#BOLTS - Open Library of Technical Specifications
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


import FreeCAD
import FreeCADGui
import Part
from os.path import join, exists, dirname
from os import listdir
from .bolttools import blt
from .bolttools import freecad

USE_PYSIDE = True


try:
    from PySide import QtCore
    from FreeCADGui import getMainWindow
except ImportError:
    from PyQt5 import QtCore, QtGui
    USE_PYSIDE=False

    def getMainWindow():
        "returns the main window"
        for i in QtGui.qApp.topLevelWidgets():
            if i.metaObject().className() == "Gui::MainWindow":
                return i
        raise Exception("No main window found")

from .gui import freecad_bolts as boltsgui


rootpath =  dirname(__file__)
repo = blt.Repository(rootpath)
freecad_db = freecad.FreeCADData(repo)

widget = None


def show_widget():
    global widget
    if widget is None:
        widget = boltsgui.BoltsWidget(repo,freecad_db)

        mw = getMainWindow()
        mw.addDockWidget(QtCore.Qt.RightDockWidgetArea, widget)
    else:
        widget.show()


def make_drawing(scale,obj):
    doc = FreeCAD.ActiveDocument
    page = doc.addObject("Drawing::FeaturePage","Page")
    page.Template = join(rootpath,"assets","template.svg")

    #front, side right, side left, rear, top, bottom, iso
    directions = [(0.,0.,1.),(1.,0.,0.),(-1.,0.,0.),(0.,0.,-1.),(0.,-1.,0.),(0.,1.,0.),(1.,1.,1.)]
    #x center positions
    positions = [(110.,100.),(40.,100.),(180.,100.),(250.,100.),(110.,35.),(110.,165.),(215.,35.)]
    rotations = [0,0,0,0,270,270,0]
    for i in range(7):
        view = doc.addObject("Drawing::FeatureViewPart","View%d" % i)
        view.Source = obj
        view.Direction = directions[i]
        view.X = positions[i][0]
        view.Y = positions[i][1]
        view.Rotation = rotations[i]
        view.Scale = scale
        page.addObject(view)


def list_names(doc):
    '''
    BOLTS.list_names(document)
        lists object Labels and object Names
        off all Part and Part.Feature document objects
    '''
    print("Label   Name")
    print("------------")
    for part in doc.findObjects():
        if isinstance(part, Part.Feature):
            print("%s    %s" % (part.Label, part.Name))


# ************************************************************************************************
# names and standards

def get_name(classid):
    '''
    BOLTS.get_name()
        get SaveClassName from classid (which can be retrieved from blt file)
    '''
    for n in get_names():
        name = repo.names[n]
        cl = repo.class_names.get_src(name)
        if classid == cl.id:
            return n


def get_standard(classid):
    '''
    BOLTS.get_standard()
        get SaveStandardName from classid (which can be retrieved from blt file)
    '''
    for s in get_standards():
        standard = repo.standards[s]
        cl = repo.class_standards.get_src(standard)
        if classid == cl.id:
            return s


def get_names():
    '''
    BOLTS.get_names()
        get all known class names
    '''
    return sorted(list(repo.names.keys()))


def print_names():
    '''
    BOLTS.print_names()
        print all known class names
    '''
    for n in get_names():
        print(n)


def get_standards():
    '''
    BOLTS.get_standards()
        get all known class names
    '''
    return sorted(list(repo.standards.keys()))


def print_standards():
    '''
    BOLTS.print_standards()
        print all known class names
    '''
    for n in get_standards():
        print(n)


def get_default_params_by_name(
    id
):
    '''
    BOLTS.get_default_params_by_name(SaveClassName)
    '''
    cl = repo.class_names.get_src(repo.names[id])
    return _get_free_in_params(cl)


def get_default_params_by_standard(
    id
):
    '''
    BOLTS.get_default_params_by_standard(SaveClassName)
    '''
    cl = repo.class_standards.get_src(repo.standards[id])
    return _get_free_in_params(cl)


# ************************************************************************************************
# add BOLTS parts by Python
def add_part_by_classid(
    classid,
    in_params=None
):
    '''
    BOLTS.add_part_by_name(ClassID, [Parameter])

        Add a BOLTS part by Python according the ClassID

        ClassID:
            - get the ClassID from *.blt file

        Parameter:
            - dictionary of all free Parameters
            - if ommited, the default parameters are taken (see Default in *.blt file)
            - if a key is missing in Parameter, the default is added
            - get the default parameters by BOLTS.get_default_params(SaveClassName)
            - if the key 'name' is given, this will be used as FreeCAD object name

        Examples:
            BOLTS.add_part_by_classid('ibeam_heb')
            BOLTS.add_part_by_classid('ibeam_heb', {'type': 'HEB500', 'name': 'my_profile'})
            BOLTS.add_part_by_classid('ibeam_heb', {'type': 'HEB500', 'l' : 50, 'arch' : True})
            BOLTS.add_part_by_classid('tslot20x20', {'l': 5})
            BOLTS.add_part_by_classid('vslot20x60', {'l': 5, 'finish': 'Clear anodized'})
    '''
    name = repo.names[get_name(classid)]
    cl = repo.class_names.get_src(name)

    # get params and add part
    _add_part(cl, in_params)


def add_part_by_name(
    id,
    in_params=None
):
    '''
    BOLTS.add_part_by_name(SaveClassName, [Parameter])

        Add a BOLTS part by Python according the class name

        SaveClassName:
            - get a list of all known names by BOLTS.get_names()
            - print all known names with BOLTS.print_names()
            - get a name from *.blt file classid by BOLTS.get_name(ClassID)

        Parameter:
            - dictionary of all free Parameters
            - if ommited, the default parameters are taken (see Default in *.blt file)
            - if a key is missing in Parameter, the default is added
            - get the default parameters by BOLTS.get_default_params(SaveClassName)
            - if the key 'name' is given, this will be used as FreeCAD object name

        Examples:
            BOLTS.add_part_by_name('HEBProfile')
            BOLTS.add_part_by_name('HEAProfile', {'type': 'HEB500', 'name': 'my_profile'})
            BOLTS.add_part_by_name('HEBProfile', {'type': 'HEB500', 'l' : 50, 'arch' : True})
            BOLTS.add_part_by_name('TSlotExtrusion20x20', {'l': 5})
            BOLTS.add_part_by_name('V_slot20x60mm', {'l': 5, 'finish': 'Clear anodized'})
    '''
    name = repo.names[id]
    cl = repo.class_names.get_src(name)

    # get params and add part
    _add_part(cl, in_params)


def add_part_by_standard(
    id,
    in_params=None
):
    '''
    BOLTS.add_part_by_standard(SaveStandardName, [Parameter])

        Add a BOLTS part by Python according the national standard name

        SaveStandardName:
            - get a list of all known standards by BOLTS.get_standards()
            - print all known standards with BOLTS.print_standards()
            - get a standard from *.blt file classid by BOLTS.get_name(ClassID)

        Parameter:
            - dictionary of all free Parameters
            - if ommited, the default parameters are taken (see Default in *.blt file)
            - if a key is missing in Parameter, the default is added
            - get the default parameters by BOLTS.get_default_params(SaveClassName)
            - if the key 'name' is given, this will be used as FreeCAD object name

        Examples:
            BOLTS.add_part_by_standard('DIN1025_2')
            BOLTS.add_part_by_standard('DIN1025_2', {'type': 'HEB500', 'name': 'my_profile'})
            BOLTS.add_part_by_standard('DIN1025_2', {'type': 'HEB500', 'l' : 50, 'arch' : True})
            BOLTS.add_part_by_standard('DIN933')
            BOLTS.add_part_by_standard('DIN933', {'key': 'M10', 'l': 120, 'thread_type': 'coarse'})
    '''
    standard = repo.standards[id]
    cl = repo.class_standards.get_src(standard)

    # get params and add part
    _add_part(cl, in_params)


# ************************************************************************************************
# helper
def _get_free_in_params(cl):
    base = freecad_db.base_classes.get_src(cl)
    params = cl.parameters.union(base.parameters)
    free_params = params.free

    in_params = {}
    for p in free_params:
        # p_type = params.types[p]  # not used
        default_value = params.defaults[p]
        in_params[p] = default_value
    return in_params


def _add_missing_inparams(cl, params):
    # print(cl.id)
    default_params = _get_free_in_params(cl)
    for def_key in default_params:
        if def_key not in params:
            params[def_key] = default_params[def_key]
            print(
                "Added default parameter: '{}': '{}'"
                .format(def_key, default_params[def_key])
            )
    return params


def _add_part(cl, in_params):

    # params
    if not in_params:
        params = _get_free_in_params(cl)
    params = _add_missing_inparams(cl, in_params)
    params = cl.parameters.collect(in_params)

    # add name to params
    if 'name' not in params:
        name = repo.names[get_name(cl.id)]
        params['name'] = name.labeling.get_nice(params)

    # add part
    base = freecad_db.base_classes.get_src(cl)
    coll = repo.collection_classes.get_src(cl)
    boltsgui.add_part(
        coll,
        base,
        params,
        FreeCAD.ActiveDocument
    )
