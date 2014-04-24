#bolttools - a framework for creation of part libraries
#Copyright (C) 2013 Johannes Reinhardt <jreinhardt@ist-dein-freund.de>
#
#This library is free software; you can redistribute it and/or
#modify it under the terms of the GNU Lesser General Public
#License as published by the Free Software Foundation; either
#version 2.1 of the License, or any later version.
#
#This library is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
#Lesser General Public License for more details.
#
#You should have received a copy of the GNU Lesser General Public
#License along with this library; if not, write to the Free Software
#Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

from errors import *

FREECADPATH = '/usr/lib/freecad/lib/' # path to your FreeCAD.so or FreeCAD.dll file
import sys
sys.path.append(FREECADPATH)
try:
	import FreeCAD, Part, Sketcher
except:
	raise MissingFreeCADError()

from os.path import join
from os import makedirs, remove
from datetime import datetime
import importlib

from common import BackendExporter



def add_part(base,params,doc):
	if base.type == "function":
		module = importlib.import_module(base.module_name)
		module.__dict__[base.name](params,doc)
	else:
		raise RuntimeError("Unknown base geometry type" % base.type)

class IGESExporter(BackendExporter):
	def __init__(self,repo,databases):
		BackendExporter.__init__(self,repo, databases)
		self.freecad = databases["freecad"]

	def write_output(self,out_path,version,stable=False):
		self.clear_output_dir(out_path)

		ver_root = join(out_path,version)
		makedirs(ver_root)

		#generate version file
		date = datetime.now()
		version_file = open(join(ver_root,"VERSION"),"w")
		version_file.write("%s\n%d-%d-%d\n" %
			(version, date.year, date.month, date.day))
		version_file.close()

		#Disable writing bytecode to avoid littering the freecad database with pyc files
		write_bytecode = sys.dont_write_bytecode
		sys.dont_write_bytecode = True

		for coll in self.repo.collections:
			makedirs(join(ver_root,coll.id))
			sys.path.append(join(self.repo.path,"freecad",coll.id))
			for cl in coll.classes:
				if not cl.id in self.freecad.getbase:
					continue
				if cl.parameters.common is None:
					continue

				base = self.freecad.getbase[cl.id]

				for free in cl.parameters.common:
					try:
						params = cl.parameters.collect(dict(zip(cl.parameters.free,free)))
					except:
						print "A problem occured when parameters for %s where collected for %s" % (free,cl.id)
						raise
					params["standard"] = cl.name
					name = cl.naming.get_name(params)
					params["name"] = name
					filename = name + ".igs"
					filename = filename.replace(" ","_").replace("/","-")

					doc = FreeCAD.newDocument()

					add_part(base,params,doc)

					shape = doc.ActiveObject.Shape

					shape.exportIges(join(ver_root,coll.id,filename))
					FreeCAD.closeDocument(doc.Name)
			sys.path.pop()

		#restore byte code writing
		sys.dont_write_bytecode = write_bytecode



