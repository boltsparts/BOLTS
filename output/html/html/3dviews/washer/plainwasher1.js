var camera, controls, scene, renderer;
function attach_renderer(target) {

	var SCREEN_WIDTH = 900, SCREEN_HEIGHT = 400;
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
	camera.position.set(7.57674540205,7.57674540205,1.0);
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
                var v0 = new THREE.Vector3(0.219766818353,-3.4930935495,0.5);
                var v1 = new THREE.Vector3(-0.65583460105,-3.43800537755,0.5);
                var v2 = new THREE.Vector3(-0.65583460105,-3.43800537755,0.0);
                var v3 = new THREE.Vector3(0.219766818353,-3.4930935495,0.0);
                var v4 = new THREE.Vector3(1.08155948031,-3.32869780703,0.5);
                var v5 = new THREE.Vector3(1.08155948031,-3.32869780703,0.0);
                var v6 = new THREE.Vector3(1.87539378243,-2.95514773926,0.0);
                var v7 = new THREE.Vector3(1.87539378243,-2.95514773926,0.5);
                var v8 = new THREE.Vector3(3.39004106395,0.870414605077,0.5);
                var v9 = new THREE.Vector3(3.5,-8.57252759403e-16,0.0);
                var v10 = new THREE.Vector3(3.39004106395,0.870414605077,0.0);
                var v11 = new THREE.Vector3(3.5,-8.57252759403e-16,0.5);
                var v12 = new THREE.Vector3(2.55139019597,-2.39591487075,0.5);
                var v13 = new THREE.Vector3(2.55139019597,-2.39591487075,0.0);
                var v14 = new THREE.Vector3(3.06707338015,1.68613785936,0.5);
                var v15 = new THREE.Vector3(3.06707338015,1.68613785936,0.0);
                var v16 = new THREE.Vector3(2.55139019597,2.39591487075,0.0);
                var v17 = new THREE.Vector3(3.06707338015,-1.68613785936,0.5);
                var v18 = new THREE.Vector3(3.06707338015,-1.68613785936,0.0);
                var v19 = new THREE.Vector3(2.55139019597,2.39591487075,0.5);
                var v20 = new THREE.Vector3(3.39004106395,-0.870414605077,0.5);
                var v21 = new THREE.Vector3(3.39004106395,-0.870414605077,0.0);
                var v22 = new THREE.Vector3(1.87539378243,2.95514773926,0.5);
                var v23 = new THREE.Vector3(1.87539378243,2.95514773926,0.0);
                var v24 = new THREE.Vector3(1.08155948031,3.32869780703,0.5);
                var v25 = new THREE.Vector3(1.08155948031,3.32869780703,0.0);
                var v26 = new THREE.Vector3(0.219766818353,3.4930935495,0.5);
                var v27 = new THREE.Vector3(0.219766818353,3.4930935495,0.0);
                var v28 = new THREE.Vector3(-0.65583460105,3.43800537755,0.5);
                var v29 = new THREE.Vector3(-0.65583460105,3.43800537755,0.0);
                var v30 = new THREE.Vector3(-1.49022752048,3.16689468363,0.5);
                var v31 = new THREE.Vector3(-1.49022752048,3.16689468363,0.0);
                var v32 = new THREE.Vector3(-2.23098396412,2.69679634972,0.5);
                var v33 = new THREE.Vector3(-2.23098396412,2.69679634972,0.0);
                var v34 = new THREE.Vector3(-2.83155948031,2.05724838302,0.5);
                var v35 = new THREE.Vector3(-2.83155948031,2.05724838302,0.0);
                var v36 = new THREE.Vector3(-3.25421770061,1.2884359344,0.5);
                var v37 = new THREE.Vector3(-3.25421770061,1.2884359344,0.0);
                var v38 = new THREE.Vector3(-3.4724014546,0.438666317475,0.5);
                var v39 = new THREE.Vector3(-3.4724014546,0.438666317475,0.0);
                var v40 = new THREE.Vector3(-3.4724014546,-0.438666317475,0.5);
                var v41 = new THREE.Vector3(-3.4724014546,-0.438666317475,0.0);
                var v42 = new THREE.Vector3(-3.25421770061,-1.2884359344,0.5);
                var v43 = new THREE.Vector3(-3.25421770061,-1.2884359344,0.0);
                var v44 = new THREE.Vector3(-2.83155948031,-2.05724838302,0.5);
                var v45 = new THREE.Vector3(-2.83155948031,-2.05724838302,0.0);
                var v46 = new THREE.Vector3(-2.23098396412,-2.69679634972,0.5);
                var v47 = new THREE.Vector3(-2.23098396412,-2.69679634972,0.0);
                var v48 = new THREE.Vector3(-1.49022752048,-3.16689468363,0.0);
                var v49 = new THREE.Vector3(-1.49022752048,-3.16689468363,0.5);
                var v50 = new THREE.Vector3(-0.681246866504,1.44772328395,0.5);
                var v51 = new THREE.Vector3(-0.299810103337,1.57165960117,0.5);
                var v52 = new THREE.Vector3(1.40209068807,-0.770805878563,0.5);
                var v53 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.5);
                var v54 = new THREE.Vector3(1.54973305781,-0.397903819464,0.5);
                var v55 = new THREE.Vector3(0.100464831247,1.59684276549,0.5);
                var v56 = new THREE.Vector3(-1.294427191,-0.940456403668,0.5);
                var v57 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.5);
                var v58 = new THREE.Vector3(1.6,-3.91886975727e-16,0.5);
                var v59 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.5);
                var v60 = new THREE.Vector3(1.54973305781,0.397903819464,0.5);
                var v61 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.5);
                var v62 = new THREE.Vector3(0.494427191,1.52169042607,0.5);
                var v63 = new THREE.Vector3(0.857322871966,1.3509246808,0.5);
                var v64 = new THREE.Vector3(1.40209068807,0.770805878563,0.5);
                var v65 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.5);
                var v66 = new THREE.Vector3(0.100464831247,-1.59684276549,0.5);
                var v67 = new THREE.Vector3(1.16634980387,1.09527536949,0.5);
                var v68 = new THREE.Vector3(-1.5873835221,0.200533173703,0.5);
                var v69 = new THREE.Vector3(0.494427191,-1.52169042607,0.5);
                var v70 = new THREE.Vector3(-1.48764237742,0.588999284295,0.5);
                var v71 = new THREE.Vector3(0.857322871966,-1.3509246808,0.5);
                var v72 = new THREE.Vector3(-1.294427191,0.940456403668,0.5);
                var v73 = new THREE.Vector3(1.16634980387,-1.09527536949,0.5);
                var v74 = new THREE.Vector3(-1.0198783836,1.23282118844,0.5);
                var v75 = new THREE.Vector3(-0.681246866504,1.44772328395,0.0);
                var v76 = new THREE.Vector3(-0.299810103337,1.57165960117,0.0);
                var v77 = new THREE.Vector3(1.40209068807,-0.770805878563,0.0);
                var v78 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.0);
                var v79 = new THREE.Vector3(1.54973305781,-0.397903819464,0.0);
                var v80 = new THREE.Vector3(0.100464831247,1.59684276549,0.0);
                var v81 = new THREE.Vector3(-1.294427191,-0.940456403668,0.0);
                var v82 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.0);
                var v83 = new THREE.Vector3(1.6,-3.91886975727e-16,0.0);
                var v84 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.0);
                var v85 = new THREE.Vector3(1.54973305781,0.397903819464,0.0);
                var v86 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.0);
                var v87 = new THREE.Vector3(0.857322871966,1.3509246808,0.0);
                var v88 = new THREE.Vector3(0.494427191,1.52169042607,0.0);
                var v89 = new THREE.Vector3(1.40209068807,0.770805878563,0.0);
                var v90 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.0);
                var v91 = new THREE.Vector3(0.100464831247,-1.59684276549,0.0);
                var v92 = new THREE.Vector3(1.16634980387,1.09527536949,0.0);
                var v93 = new THREE.Vector3(-1.5873835221,0.200533173703,0.0);
                var v94 = new THREE.Vector3(0.494427191,-1.52169042607,0.0);
                var v95 = new THREE.Vector3(-1.48764237742,0.588999284295,0.0);
                var v96 = new THREE.Vector3(0.857322871966,-1.3509246808,0.0);
                var v97 = new THREE.Vector3(-1.294427191,0.940456403668,0.0);
                var v98 = new THREE.Vector3(1.16634980387,-1.09527536949,0.0);
                var v99 = new THREE.Vector3(-1.0198783836,1.23282118844,0.0);
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
                geom.vertices.push(v60);
                geom.vertices.push(v61);
                geom.vertices.push(v62);
                geom.vertices.push(v63);
                geom.vertices.push(v64);
                geom.vertices.push(v65);
                geom.vertices.push(v66);
                geom.vertices.push(v67);
                geom.vertices.push(v68);
                geom.vertices.push(v69);
                geom.vertices.push(v70);
                geom.vertices.push(v71);
                geom.vertices.push(v72);
                geom.vertices.push(v73);
                geom.vertices.push(v74);
                geom.vertices.push(v75);
                geom.vertices.push(v76);
                geom.vertices.push(v77);
                geom.vertices.push(v78);
                geom.vertices.push(v79);
                geom.vertices.push(v80);
                geom.vertices.push(v81);
                geom.vertices.push(v82);
                geom.vertices.push(v83);
                geom.vertices.push(v84);
                geom.vertices.push(v85);
                geom.vertices.push(v86);
                geom.vertices.push(v87);
                geom.vertices.push(v88);
                geom.vertices.push(v89);
                geom.vertices.push(v90);
                geom.vertices.push(v91);
                geom.vertices.push(v92);
                geom.vertices.push(v93);
                geom.vertices.push(v94);
                geom.vertices.push(v95);
                geom.vertices.push(v96);
                geom.vertices.push(v97);
                geom.vertices.push(v98);
                geom.vertices.push(v99);
                geom.faces.push( new THREE.Face3(0, 1, 2) );
                geom.faces.push( new THREE.Face3(0, 2, 3) );
                geom.faces.push( new THREE.Face3(4, 0, 3) );
                geom.faces.push( new THREE.Face3(4, 3, 5) );
                geom.faces.push( new THREE.Face3(4, 5, 6) );
                geom.faces.push( new THREE.Face3(7, 4, 6) );
                geom.faces.push( new THREE.Face3(8, 9, 10) );
                geom.faces.push( new THREE.Face3(8, 11, 9) );
                geom.faces.push( new THREE.Face3(12, 7, 6) );
                geom.faces.push( new THREE.Face3(12, 6, 13) );
                geom.faces.push( new THREE.Face3(14, 10, 15) );
                geom.faces.push( new THREE.Face3(14, 15, 16) );
                geom.faces.push( new THREE.Face3(14, 8, 10) );
                geom.faces.push( new THREE.Face3(17, 13, 18) );
                geom.faces.push( new THREE.Face3(17, 12, 13) );
                geom.faces.push( new THREE.Face3(19, 14, 16) );
                geom.faces.push( new THREE.Face3(20, 17, 18) );
                geom.faces.push( new THREE.Face3(20, 18, 21) );
                geom.faces.push( new THREE.Face3(22, 16, 23) );
                geom.faces.push( new THREE.Face3(11, 21, 9) );
                geom.faces.push( new THREE.Face3(11, 20, 21) );
                geom.faces.push( new THREE.Face3(22, 19, 16) );
                geom.faces.push( new THREE.Face3(24, 23, 25) );
                geom.faces.push( new THREE.Face3(24, 22, 23) );
                geom.faces.push( new THREE.Face3(26, 25, 27) );
                geom.faces.push( new THREE.Face3(26, 24, 25) );
                geom.faces.push( new THREE.Face3(28, 27, 29) );
                geom.faces.push( new THREE.Face3(28, 26, 27) );
                geom.faces.push( new THREE.Face3(30, 29, 31) );
                geom.faces.push( new THREE.Face3(30, 28, 29) );
                geom.faces.push( new THREE.Face3(32, 31, 33) );
                geom.faces.push( new THREE.Face3(32, 30, 31) );
                geom.faces.push( new THREE.Face3(34, 33, 35) );
                geom.faces.push( new THREE.Face3(34, 32, 33) );
                geom.faces.push( new THREE.Face3(36, 35, 37) );
                geom.faces.push( new THREE.Face3(36, 34, 35) );
                geom.faces.push( new THREE.Face3(38, 36, 37) );
                geom.faces.push( new THREE.Face3(38, 37, 39) );
                geom.faces.push( new THREE.Face3(40, 38, 39) );
                geom.faces.push( new THREE.Face3(40, 39, 41) );
                geom.faces.push( new THREE.Face3(42, 40, 41) );
                geom.faces.push( new THREE.Face3(42, 41, 43) );
                geom.faces.push( new THREE.Face3(44, 42, 43) );
                geom.faces.push( new THREE.Face3(44, 43, 45) );
                geom.faces.push( new THREE.Face3(46, 44, 45) );
                geom.faces.push( new THREE.Face3(46, 45, 47) );
                geom.faces.push( new THREE.Face3(46, 47, 48) );
                geom.faces.push( new THREE.Face3(49, 46, 48) );
                geom.faces.push( new THREE.Face3(1, 49, 48) );
                geom.faces.push( new THREE.Face3(1, 48, 2) );
                geom.faces.push( new THREE.Face3(30, 32, 50) );
                geom.faces.push( new THREE.Face3(30, 50, 51) );
                geom.faces.push( new THREE.Face3(20, 52, 17) );
                geom.faces.push( new THREE.Face3(53, 44, 46) );
                geom.faces.push( new THREE.Face3(20, 54, 52) );
                geom.faces.push( new THREE.Face3(28, 30, 51) );
                geom.faces.push( new THREE.Face3(28, 51, 55) );
                geom.faces.push( new THREE.Face3(56, 44, 53) );
                geom.faces.push( new THREE.Face3(57, 46, 49) );
                geom.faces.push( new THREE.Face3(11, 54, 20) );
                geom.faces.push( new THREE.Face3(11, 58, 54) );
                geom.faces.push( new THREE.Face3(57, 53, 46) );
                geom.faces.push( new THREE.Face3(59, 42, 44) );
                geom.faces.push( new THREE.Face3(26, 28, 55) );
                geom.faces.push( new THREE.Face3(8, 58, 11) );
                geom.faces.push( new THREE.Face3(8, 60, 58) );
                geom.faces.push( new THREE.Face3(59, 44, 56) );
                geom.faces.push( new THREE.Face3(61, 49, 1) );
                geom.faces.push( new THREE.Face3(24, 62, 63) );
                geom.faces.push( new THREE.Face3(24, 55, 62) );
                geom.faces.push( new THREE.Face3(24, 26, 55) );
                geom.faces.push( new THREE.Face3(61, 57, 49) );
                geom.faces.push( new THREE.Face3(14, 64, 60) );
                geom.faces.push( new THREE.Face3(65, 38, 40) );
                geom.faces.push( new THREE.Face3(14, 60, 8) );
                geom.faces.push( new THREE.Face3(65, 40, 42) );
                geom.faces.push( new THREE.Face3(65, 42, 59) );
                geom.faces.push( new THREE.Face3(22, 24, 63) );
                geom.faces.push( new THREE.Face3(66, 1, 0) );
                geom.faces.push( new THREE.Face3(66, 0, 4) );
                geom.faces.push( new THREE.Face3(19, 67, 64) );
                geom.faces.push( new THREE.Face3(19, 63, 67) );
                geom.faces.push( new THREE.Face3(19, 64, 14) );
                geom.faces.push( new THREE.Face3(19, 22, 63) );
                geom.faces.push( new THREE.Face3(66, 61, 1) );
                geom.faces.push( new THREE.Face3(68, 36, 38) );
                geom.faces.push( new THREE.Face3(68, 38, 65) );
                geom.faces.push( new THREE.Face3(69, 66, 4) );
                geom.faces.push( new THREE.Face3(70, 36, 68) );
                geom.faces.push( new THREE.Face3(71, 4, 7) );
                geom.faces.push( new THREE.Face3(71, 69, 4) );
                geom.faces.push( new THREE.Face3(72, 34, 36) );
                geom.faces.push( new THREE.Face3(72, 36, 70) );
                geom.faces.push( new THREE.Face3(12, 73, 71) );
                geom.faces.push( new THREE.Face3(12, 71, 7) );
                geom.faces.push( new THREE.Face3(74, 34, 72) );
                geom.faces.push( new THREE.Face3(32, 34, 74) );
                geom.faces.push( new THREE.Face3(50, 32, 74) );
                geom.faces.push( new THREE.Face3(17, 73, 12) );
                geom.faces.push( new THREE.Face3(17, 52, 73) );
                geom.faces.push( new THREE.Face3(75, 33, 31) );
                geom.faces.push( new THREE.Face3(76, 75, 31) );
                geom.faces.push( new THREE.Face3(18, 77, 21) );
                geom.faces.push( new THREE.Face3(47, 45, 78) );
                geom.faces.push( new THREE.Face3(77, 79, 21) );
                geom.faces.push( new THREE.Face3(76, 31, 29) );
                geom.faces.push( new THREE.Face3(80, 76, 29) );
                geom.faces.push( new THREE.Face3(78, 45, 81) );
                geom.faces.push( new THREE.Face3(48, 47, 82) );
                geom.faces.push( new THREE.Face3(21, 79, 9) );
                geom.faces.push( new THREE.Face3(79, 83, 9) );
                geom.faces.push( new THREE.Face3(47, 78, 82) );
                geom.faces.push( new THREE.Face3(45, 43, 84) );
                geom.faces.push( new THREE.Face3(80, 29, 27) );
                geom.faces.push( new THREE.Face3(9, 83, 10) );
                geom.faces.push( new THREE.Face3(83, 85, 10) );
                geom.faces.push( new THREE.Face3(81, 45, 84) );
                geom.faces.push( new THREE.Face3(2, 48, 86) );
                geom.faces.push( new THREE.Face3(87, 88, 25) );
                geom.faces.push( new THREE.Face3(88, 80, 25) );
                geom.faces.push( new THREE.Face3(80, 27, 25) );
                geom.faces.push( new THREE.Face3(48, 82, 86) );
                geom.faces.push( new THREE.Face3(85, 89, 15) );
                geom.faces.push( new THREE.Face3(41, 39, 90) );
                geom.faces.push( new THREE.Face3(10, 85, 15) );
                geom.faces.push( new THREE.Face3(43, 41, 90) );
                geom.faces.push( new THREE.Face3(84, 43, 90) );
                geom.faces.push( new THREE.Face3(87, 25, 23) );
                geom.faces.push( new THREE.Face3(3, 2, 91) );
                geom.faces.push( new THREE.Face3(5, 3, 91) );
                geom.faces.push( new THREE.Face3(89, 92, 16) );
                geom.faces.push( new THREE.Face3(92, 87, 16) );
                geom.faces.push( new THREE.Face3(15, 89, 16) );
                geom.faces.push( new THREE.Face3(87, 23, 16) );
                geom.faces.push( new THREE.Face3(2, 86, 91) );
                geom.faces.push( new THREE.Face3(39, 37, 93) );
                geom.faces.push( new THREE.Face3(90, 39, 93) );
                geom.faces.push( new THREE.Face3(5, 91, 94) );
                geom.faces.push( new THREE.Face3(93, 37, 95) );
                geom.faces.push( new THREE.Face3(6, 5, 96) );
                geom.faces.push( new THREE.Face3(5, 94, 96) );
                geom.faces.push( new THREE.Face3(37, 35, 97) );
                geom.faces.push( new THREE.Face3(95, 37, 97) );
                geom.faces.push( new THREE.Face3(96, 98, 13) );
                geom.faces.push( new THREE.Face3(6, 96, 13) );
                geom.faces.push( new THREE.Face3(97, 35, 99) );
                geom.faces.push( new THREE.Face3(99, 35, 33) );
                geom.faces.push( new THREE.Face3(99, 33, 75) );
                geom.faces.push( new THREE.Face3(13, 98, 18) );
                geom.faces.push( new THREE.Face3(98, 77, 18) );
                geom.faces.push( new THREE.Face3(94, 66, 69) );
                geom.faces.push( new THREE.Face3(96, 94, 71) );
                geom.faces.push( new THREE.Face3(94, 69, 71) );
                geom.faces.push( new THREE.Face3(85, 83, 60) );
                geom.faces.push( new THREE.Face3(83, 58, 60) );
                geom.faces.push( new THREE.Face3(98, 96, 73) );
                geom.faces.push( new THREE.Face3(96, 71, 73) );
                geom.faces.push( new THREE.Face3(89, 85, 64) );
                geom.faces.push( new THREE.Face3(85, 60, 64) );
                geom.faces.push( new THREE.Face3(77, 98, 52) );
                geom.faces.push( new THREE.Face3(98, 73, 52) );
                geom.faces.push( new THREE.Face3(92, 89, 67) );
                geom.faces.push( new THREE.Face3(79, 77, 54) );
                geom.faces.push( new THREE.Face3(89, 64, 67) );
                geom.faces.push( new THREE.Face3(77, 52, 54) );
                geom.faces.push( new THREE.Face3(83, 79, 58) );
                geom.faces.push( new THREE.Face3(79, 54, 58) );
                geom.faces.push( new THREE.Face3(87, 92, 63) );
                geom.faces.push( new THREE.Face3(92, 67, 63) );
                geom.faces.push( new THREE.Face3(88, 87, 62) );
                geom.faces.push( new THREE.Face3(87, 63, 62) );
                geom.faces.push( new THREE.Face3(80, 88, 55) );
                geom.faces.push( new THREE.Face3(76, 80, 55) );
                geom.faces.push( new THREE.Face3(88, 62, 55) );
                geom.faces.push( new THREE.Face3(76, 55, 51) );
                geom.faces.push( new THREE.Face3(75, 76, 50) );
                geom.faces.push( new THREE.Face3(99, 75, 50) );
                geom.faces.push( new THREE.Face3(76, 51, 50) );
                geom.faces.push( new THREE.Face3(99, 50, 74) );
                geom.faces.push( new THREE.Face3(97, 99, 72) );
                geom.faces.push( new THREE.Face3(99, 74, 72) );
                geom.faces.push( new THREE.Face3(95, 97, 70) );
                geom.faces.push( new THREE.Face3(93, 95, 70) );
                geom.faces.push( new THREE.Face3(97, 72, 70) );
                geom.faces.push( new THREE.Face3(93, 70, 68) );
                geom.faces.push( new THREE.Face3(93, 68, 65) );
                geom.faces.push( new THREE.Face3(90, 93, 65) );
                geom.faces.push( new THREE.Face3(90, 65, 59) );
                geom.faces.push( new THREE.Face3(84, 90, 59) );
                geom.faces.push( new THREE.Face3(81, 84, 59) );
                geom.faces.push( new THREE.Face3(81, 59, 56) );
                geom.faces.push( new THREE.Face3(78, 81, 53) );
                geom.faces.push( new THREE.Face3(81, 56, 53) );
                geom.faces.push( new THREE.Face3(82, 78, 57) );
                geom.faces.push( new THREE.Face3(78, 53, 57) );
                geom.faces.push( new THREE.Face3(86, 82, 61) );
                geom.faces.push( new THREE.Face3(82, 57, 61) );
                geom.faces.push( new THREE.Face3(91, 86, 66) );
                geom.faces.push( new THREE.Face3(94, 91, 66) );
                geom.faces.push( new THREE.Face3(86, 61, 66) );
                var basematerial = new THREE.MeshBasicMaterial( { color: 0x888888 } );
                var mesh = new THREE.Mesh( geom, basematerial );
                scene.add( mesh );
                var linematerial = new THREE.LineBasicMaterial({color: 0x000000,});
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
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
