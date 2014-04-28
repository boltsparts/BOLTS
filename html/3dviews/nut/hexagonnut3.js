var camera, controls, scene, renderer;
function attach_renderer(target) {

	var SCREEN_WIDTH = 300, SCREEN_HEIGHT = 300;
	var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	target.appendChild( renderer.domElement );

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE, // Field of view
		ASPECT, // Aspect ratio
		NEAR, // Near plane
		FAR // Far plane
	);
	camera.position.set(0,0,1000);
                camera.lookAt( scene.position );
                 // placeholder for the FreeCAD camera
	controls = new THREE.TrackballControls( camera );

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];

	var geom = new THREE.Geometry();
                var v0 = new THREE.Vector3(0.28125,0.16237976321,0.0);
                var v1 = new THREE.Vector3(-1.38777878078e-17,0.324759526419,0.0);
                var v2 = new THREE.Vector3(-1.38777878078e-17,0.324759526419,0.328125);
                var v3 = new THREE.Vector3(0.28125,0.16237976321,0.328125);
                var v4 = new THREE.Vector3(-0.28125,0.16237976321,0.0);
                var v5 = new THREE.Vector3(-0.28125,0.16237976321,0.328125);
                var v6 = new THREE.Vector3(0.28125,-0.16237976321,0.328125);
                var v7 = new THREE.Vector3(0.28125,-0.16237976321,0.0);
                var v8 = new THREE.Vector3(-0.28125,-0.16237976321,0.0);
                var v9 = new THREE.Vector3(-0.28125,-0.16237976321,0.328125);
                var v10 = new THREE.Vector3(1.38777878078e-17,-0.324759526419,0.0);
                var v11 = new THREE.Vector3(1.38777878078e-17,-0.324759526419,0.328125);
                var v12 = new THREE.Vector3(0.09375,-0.16237976321,0.328125);
                var v13 = new THREE.Vector3(0.132582521472,-0.132582521472,0.328125);
                var v14 = new THREE.Vector3(0.16237976321,-0.09375,0.328125);
                var v15 = new THREE.Vector3(0.181111092429,-0.0485285709567,0.328125);
                var v16 = new THREE.Vector3(0.0485285709567,-0.181111092429,0.328125);
                var v17 = new THREE.Vector3(0.1875,-1.38777878078e-17,0.328125);
                var v18 = new THREE.Vector3(-2.0097664492e-16,-0.1875,0.328125);
                var v19 = new THREE.Vector3(-0.0485285709567,-0.181111092429,0.328125);
                var v20 = new THREE.Vector3(0.181111092429,0.0485285709567,0.328125);
                var v21 = new THREE.Vector3(0.16237976321,0.09375,0.328125);
                var v22 = new THREE.Vector3(-0.09375,-0.16237976321,0.328125);
                var v23 = new THREE.Vector3(0.132582521472,0.132582521472,0.328125);
                var v24 = new THREE.Vector3(0.09375,0.16237976321,0.328125);
                var v25 = new THREE.Vector3(-0.132582521472,-0.132582521472,0.328125);
                var v26 = new THREE.Vector3(-0.16237976321,-0.09375,0.328125);
                var v27 = new THREE.Vector3(-0.181111092429,-0.0485285709567,0.328125);
                var v28 = new THREE.Vector3(-0.1875,-2.77555756156e-17,0.328125);
                var v29 = new THREE.Vector3(0.0485285709567,0.181111092429,0.328125);
                var v30 = new THREE.Vector3(1.1481063742e-17,0.1875,0.328125);
                var v31 = new THREE.Vector3(-0.0485285709567,0.181111092429,0.328125);
                var v32 = new THREE.Vector3(-0.09375,0.16237976321,0.328125);
                var v33 = new THREE.Vector3(-0.132582521472,0.132582521472,0.328125);
                var v34 = new THREE.Vector3(-0.16237976321,0.09375,0.328125);
                var v35 = new THREE.Vector3(-0.181111092429,0.0485285709567,0.328125);
                var v36 = new THREE.Vector3(0.16237976321,-0.09375,0.0);
                var v37 = new THREE.Vector3(0.132582521472,-0.132582521472,0.0);
                var v38 = new THREE.Vector3(0.181111092429,0.0485285709567,0.0);
                var v39 = new THREE.Vector3(0.1875,-2.99010213879e-17,0.0);
                var v40 = new THREE.Vector3(0.181111092429,-0.0485285709567,0.0);
                var v41 = new THREE.Vector3(0.16237976321,0.09375,0.0);
                var v42 = new THREE.Vector3(0.132582521472,0.132582521472,0.0);
                var v43 = new THREE.Vector3(0.09375,0.16237976321,0.0);
                var v44 = new THREE.Vector3(0.0485285709567,0.181111092429,0.0);
                var v45 = new THREE.Vector3(1.1481063742e-17,0.1875,0.0);
                var v46 = new THREE.Vector3(-0.0485285709567,0.181111092429,0.0);
                var v47 = new THREE.Vector3(-0.09375,0.16237976321,0.0);
                var v48 = new THREE.Vector3(-0.132582521472,0.132582521472,0.0);
                var v49 = new THREE.Vector3(-0.16237976321,0.09375,0.0);
                var v50 = new THREE.Vector3(-0.181111092429,0.0485285709567,0.0);
                var v51 = new THREE.Vector3(-0.1875,-2.77555756156e-17,0.0);
                var v52 = new THREE.Vector3(-0.181111092429,-0.0485285709567,0.0);
                var v53 = new THREE.Vector3(-0.16237976321,-0.09375,0.0);
                var v54 = new THREE.Vector3(-0.132582521472,-0.132582521472,0.0);
                var v55 = new THREE.Vector3(-0.09375,-0.16237976321,0.0);
                var v56 = new THREE.Vector3(-0.0485285709567,-0.181111092429,0.0);
                var v57 = new THREE.Vector3(-2.0097664492e-16,-0.1875,0.0);
                var v58 = new THREE.Vector3(0.0485285709567,-0.181111092429,0.0);
                var v59 = new THREE.Vector3(0.09375,-0.16237976321,0.0);
                console.log(geom.vertices)
                geom.vertices.push(v0);
                geom.vertices.push(v1);
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.vertices.push(v4);
                geom.vertices.push(v5);
                geom.vertices.push(v6);
                geom.vertices.push(v7);
                geom.vertices.push(v8);
                geom.vertices.push(v9);
                geom.vertices.push(v10);
                geom.vertices.push(v11);
                geom.vertices.push(v12);
                geom.vertices.push(v13);
                geom.vertices.push(v14);
                geom.vertices.push(v15);
                geom.vertices.push(v16);
                geom.vertices.push(v17);
                geom.vertices.push(v18);
                geom.vertices.push(v19);
                geom.vertices.push(v20);
                geom.vertices.push(v21);
                geom.vertices.push(v22);
                geom.vertices.push(v23);
                geom.vertices.push(v24);
                geom.vertices.push(v25);
                geom.vertices.push(v26);
                geom.vertices.push(v27);
                geom.vertices.push(v28);
                geom.vertices.push(v29);
                geom.vertices.push(v30);
                geom.vertices.push(v31);
                geom.vertices.push(v32);
                geom.vertices.push(v33);
                geom.vertices.push(v34);
                geom.vertices.push(v35);
                geom.vertices.push(v36);
                geom.vertices.push(v37);
                geom.vertices.push(v38);
                geom.vertices.push(v39);
                geom.vertices.push(v40);
                geom.vertices.push(v41);
                geom.vertices.push(v42);
                geom.vertices.push(v43);
                geom.vertices.push(v44);
                geom.vertices.push(v45);
                geom.vertices.push(v46);
                geom.vertices.push(v47);
                geom.vertices.push(v48);
                geom.vertices.push(v49);
                geom.vertices.push(v50);
                geom.vertices.push(v51);
                geom.vertices.push(v52);
                geom.vertices.push(v53);
                geom.vertices.push(v54);
                geom.vertices.push(v55);
                geom.vertices.push(v56);
                geom.vertices.push(v57);
                geom.vertices.push(v58);
                geom.vertices.push(v59);
                geom.faces.push( new THREE.Face3(0, 1, 2) );
                geom.faces.push( new THREE.Face3(3, 0, 2) );
                geom.faces.push( new THREE.Face3(2, 1, 4) );
                geom.faces.push( new THREE.Face3(2, 4, 5) );
                geom.faces.push( new THREE.Face3(6, 7, 0) );
                geom.faces.push( new THREE.Face3(6, 0, 3) );
                geom.faces.push( new THREE.Face3(4, 8, 9) );
                geom.faces.push( new THREE.Face3(5, 4, 9) );
                geom.faces.push( new THREE.Face3(10, 7, 6) );
                geom.faces.push( new THREE.Face3(11, 10, 6) );
                geom.faces.push( new THREE.Face3(9, 8, 10) );
                geom.faces.push( new THREE.Face3(9, 10, 11) );
                geom.faces.push( new THREE.Face3(11, 6, 12) );
                geom.faces.push( new THREE.Face3(6, 13, 12) );
                geom.faces.push( new THREE.Face3(13, 6, 14) );
                geom.faces.push( new THREE.Face3(14, 6, 15) );
                geom.faces.push( new THREE.Face3(11, 12, 16) );
                geom.faces.push( new THREE.Face3(15, 6, 17) );
                geom.faces.push( new THREE.Face3(11, 16, 18) );
                geom.faces.push( new THREE.Face3(11, 18, 19) );
                geom.faces.push( new THREE.Face3(20, 17, 3) );
                geom.faces.push( new THREE.Face3(17, 6, 3) );
                geom.faces.push( new THREE.Face3(20, 3, 21) );
                geom.faces.push( new THREE.Face3(11, 19, 22) );
                geom.faces.push( new THREE.Face3(21, 3, 23) );
                geom.faces.push( new THREE.Face3(23, 3, 24) );
                geom.faces.push( new THREE.Face3(25, 26, 9) );
                geom.faces.push( new THREE.Face3(22, 25, 9) );
                geom.faces.push( new THREE.Face3(11, 22, 9) );
                geom.faces.push( new THREE.Face3(9, 26, 27) );
                geom.faces.push( new THREE.Face3(9, 27, 28) );
                geom.faces.push( new THREE.Face3(29, 24, 2) );
                geom.faces.push( new THREE.Face3(30, 29, 2) );
                geom.faces.push( new THREE.Face3(31, 30, 2) );
                geom.faces.push( new THREE.Face3(32, 31, 2) );
                geom.faces.push( new THREE.Face3(24, 3, 2) );
                geom.faces.push( new THREE.Face3(33, 32, 5) );
                geom.faces.push( new THREE.Face3(34, 33, 5) );
                geom.faces.push( new THREE.Face3(35, 34, 5) );
                geom.faces.push( new THREE.Face3(28, 35, 5) );
                geom.faces.push( new THREE.Face3(9, 28, 5) );
                geom.faces.push( new THREE.Face3(32, 2, 5) );
                geom.faces.push( new THREE.Face3(36, 37, 13) );
                geom.faces.push( new THREE.Face3(37, 12, 13) );
                geom.faces.push( new THREE.Face3(38, 39, 17) );
                geom.faces.push( new THREE.Face3(40, 36, 14) );
                geom.faces.push( new THREE.Face3(36, 13, 14) );
                geom.faces.push( new THREE.Face3(41, 38, 20) );
                geom.faces.push( new THREE.Face3(39, 40, 15) );
                geom.faces.push( new THREE.Face3(38, 17, 20) );
                geom.faces.push( new THREE.Face3(40, 14, 15) );
                geom.faces.push( new THREE.Face3(39, 15, 17) );
                geom.faces.push( new THREE.Face3(42, 41, 21) );
                geom.faces.push( new THREE.Face3(41, 20, 21) );
                geom.faces.push( new THREE.Face3(43, 42, 23) );
                geom.faces.push( new THREE.Face3(42, 21, 23) );
                geom.faces.push( new THREE.Face3(44, 43, 24) );
                geom.faces.push( new THREE.Face3(43, 23, 24) );
                geom.faces.push( new THREE.Face3(45, 44, 29) );
                geom.faces.push( new THREE.Face3(44, 24, 29) );
                geom.faces.push( new THREE.Face3(46, 45, 30) );
                geom.faces.push( new THREE.Face3(45, 29, 30) );
                geom.faces.push( new THREE.Face3(47, 46, 31) );
                geom.faces.push( new THREE.Face3(46, 30, 31) );
                geom.faces.push( new THREE.Face3(47, 31, 32) );
                geom.faces.push( new THREE.Face3(48, 47, 33) );
                geom.faces.push( new THREE.Face3(47, 32, 33) );
                geom.faces.push( new THREE.Face3(49, 48, 34) );
                geom.faces.push( new THREE.Face3(48, 33, 34) );
                geom.faces.push( new THREE.Face3(50, 49, 35) );
                geom.faces.push( new THREE.Face3(49, 34, 35) );
                geom.faces.push( new THREE.Face3(50, 35, 28) );
                geom.faces.push( new THREE.Face3(51, 50, 28) );
                geom.faces.push( new THREE.Face3(51, 28, 27) );
                geom.faces.push( new THREE.Face3(52, 51, 27) );
                geom.faces.push( new THREE.Face3(52, 27, 26) );
                geom.faces.push( new THREE.Face3(53, 52, 26) );
                geom.faces.push( new THREE.Face3(54, 53, 26) );
                geom.faces.push( new THREE.Face3(55, 54, 25) );
                geom.faces.push( new THREE.Face3(54, 26, 25) );
                geom.faces.push( new THREE.Face3(55, 25, 22) );
                geom.faces.push( new THREE.Face3(56, 55, 22) );
                geom.faces.push( new THREE.Face3(56, 22, 19) );
                geom.faces.push( new THREE.Face3(56, 19, 18) );
                geom.faces.push( new THREE.Face3(57, 56, 18) );
                geom.faces.push( new THREE.Face3(58, 57, 18) );
                geom.faces.push( new THREE.Face3(58, 18, 16) );
                geom.faces.push( new THREE.Face3(59, 58, 16) );
                geom.faces.push( new THREE.Face3(37, 59, 12) );
                geom.faces.push( new THREE.Face3(59, 16, 12) );
                geom.faces.push( new THREE.Face3(59, 7, 10) );
                geom.faces.push( new THREE.Face3(59, 37, 7) );
                geom.faces.push( new THREE.Face3(36, 7, 37) );
                geom.faces.push( new THREE.Face3(40, 7, 36) );
                geom.faces.push( new THREE.Face3(58, 59, 10) );
                geom.faces.push( new THREE.Face3(39, 7, 40) );
                geom.faces.push( new THREE.Face3(57, 58, 10) );
                geom.faces.push( new THREE.Face3(56, 57, 10) );
                geom.faces.push( new THREE.Face3(0, 39, 38) );
                geom.faces.push( new THREE.Face3(0, 7, 39) );
                geom.faces.push( new THREE.Face3(41, 0, 38) );
                geom.faces.push( new THREE.Face3(55, 56, 10) );
                geom.faces.push( new THREE.Face3(42, 0, 41) );
                geom.faces.push( new THREE.Face3(43, 0, 42) );
                geom.faces.push( new THREE.Face3(8, 53, 54) );
                geom.faces.push( new THREE.Face3(8, 54, 55) );
                geom.faces.push( new THREE.Face3(8, 55, 10) );
                geom.faces.push( new THREE.Face3(52, 53, 8) );
                geom.faces.push( new THREE.Face3(51, 52, 8) );
                geom.faces.push( new THREE.Face3(1, 43, 44) );
                geom.faces.push( new THREE.Face3(1, 44, 45) );
                geom.faces.push( new THREE.Face3(1, 45, 46) );
                geom.faces.push( new THREE.Face3(1, 46, 47) );
                geom.faces.push( new THREE.Face3(1, 0, 43) );
                geom.faces.push( new THREE.Face3(4, 47, 48) );
                geom.faces.push( new THREE.Face3(4, 48, 49) );
                geom.faces.push( new THREE.Face3(4, 49, 50) );
                geom.faces.push( new THREE.Face3(4, 50, 51) );
                geom.faces.push( new THREE.Face3(4, 1, 47) );
                geom.faces.push( new THREE.Face3(4, 51, 8) );
                var basematerial = new THREE.MeshBasicMaterial( { color: 0x888888 } );
                var mesh = new THREE.Mesh( geom, basematerial );
                scene.add( mesh );
                var linematerial = new THREE.LineBasicMaterial({color: 0x000000,});
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(6.93889390391e-18, -0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(6.93889390391e-18, -0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.328125));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(-0.09375, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.1875, -2.77555756156e-17, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.09375, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.09375, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.1875, -1.38777878078e-17, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.09375, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.09375, 0.16237976321, 0.328125));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(0.1875, -1.38777878078e-17, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.09375, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.09375, 0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.1875, -2.77555756156e-17, 0.328125));
                wire.vertices.push(new THREE.Vector3(-0.09375, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.09375, -0.16237976321, 0.328125));
                wire.vertices.push(new THREE.Vector3(0.1875, -2.24536482453e-17, 0.0));
                wire.vertices.push(new THREE.Vector3(0.09375, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.09375, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.1875, -3.29597460436e-17, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.09375, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.09375, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.1875, -1.38777878078e-17, 0.328125));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-1.38777878078e-17, 0.324759526419, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.28125, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(1.38777878078e-17, -0.324759526419, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(0.09375, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.1875, -2.99010213879e-17, 0.0));
                wire.vertices.push(new THREE.Vector3(0.09375, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.09375, 0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.1875, -2.77555756156e-17, 0.0));
                wire.vertices.push(new THREE.Vector3(-0.09375, -0.16237976321, 0.0));
                wire.vertices.push(new THREE.Vector3(0.09375, -0.16237976321, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
 // placeholder for the FreeCAD objects

	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( -10000, -10000, 10000 );
	scene.add( light );
	renderer.render( scene, camera );
	animate();
};

function animate(){
	requestAnimationFrame( animate );
	render();
};

function render(){
	controls.update();
	renderer.render( scene, camera );
};
