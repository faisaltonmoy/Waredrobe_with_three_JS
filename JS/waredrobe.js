const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
var texture = {
	tile: "img/tiles_1.jpg",
	body: "img/body.jpg",
	drawer: "img/drawer.jpg",
	door: "img/door.jpg",
	wall: "img/wall.webp"
}
var  height= 2, speed= 0.015 ;

//first drawer open
function drawer_one(){
	const draw = new THREE.Group();
	scene.add(draw)

	var texture_wd = new THREE.TextureLoader().load(texture.drawer);
	var texture_bd = new THREE.TextureLoader().load(texture.body);

	const pln1 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .15, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	draw.add(pln1)

	const pln2 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln2.position.x = .82
	pln2.position.y = .2
	pln2.position.z = 0
	draw.add(pln2)

	const pln5 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln5.position.x = -.82
	pln5.position.y = .2
	pln5.position.z = 0
	draw.add(pln5)

	const pln3 = new THREE.Mesh(
		new THREE.BoxGeometry(1.8, .6, .05),
		new THREE.MeshPhongMaterial({ map: texture_bd })
	)
	pln3.position.x = 0
	pln3.position.y = .15
	pln3.position.z = .2
	draw.add(pln3)

	const pln4 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .55, .05),
		new THREE.MeshBasicMaterial({ map: texture_wd })
	)
	pln4.position.x = 0
	pln4.position.y = .18
	pln4.position.z = -.2
	draw.add(pln4)

	draw.position.set(0.4, 1.35, 2.05);
	draw.name = "drawer";
	draw.receiveShadow = true;
	draw.castShadow = true;
}
//second drawer open
function drawer_two(){
	const draw = new THREE.Group();
	scene.add(draw)

	var texture_wd = new THREE.TextureLoader().load(texture.drawer);
	var texture_bd = new THREE.TextureLoader().load(texture.body);

	const pln1 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .15, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	draw.add(pln1)

	const pln2 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln2.position.x = .82
	pln2.position.y = .2
	pln2.position.z = 0
	draw.add(pln2)

	const pln5 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln5.position.x = -.82
	pln5.position.y = .2
	pln5.position.z = 0
	draw.add(pln5)

	const pln3 = new THREE.Mesh(
		new THREE.BoxGeometry(1.8, .55, .05),
		new THREE.MeshPhongMaterial({ map: texture_bd })
	)
	pln3.position.x = 0
	pln3.position.y = .15
	pln3.position.z = .2
	draw.add(pln3)

	const pln4 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .55, .05),
		new THREE.MeshBasicMaterial({ map: texture_wd })
	)
	pln4.position.x = 0
	pln4.position.y = .18
	pln4.position.z = -.2
	draw.add(pln4)

	draw.position.set(0.4, 0.80, 2.05);
	draw.name = "drawer";
	draw.receiveShadow = true;
	draw.castShadow = true;
}
//third drawer open
function drawer_three(){
	const draw = new THREE.Group();
	scene.add(draw)

	var texture_wd = new THREE.TextureLoader().load(texture.drawer);
	var texture_bd = new THREE.TextureLoader().load(texture.body);

	const pln1 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .15, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	draw.add(pln1)

	const pln2 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln2.position.x = .82
	pln2.position.y = .2
	pln2.position.z = 0
	draw.add(pln2)

	const pln5 = new THREE.Mesh(
		new THREE.BoxGeometry(.05, .3, .4),
		new THREE.MeshBasicMaterial({ map: texture_bd })
	)
	pln5.position.x = -.82
	pln5.position.y = .2
	pln5.position.z = 0
	draw.add(pln5)

	const pln3 = new THREE.Mesh(
		new THREE.BoxGeometry(1.8, .55, .05),
		new THREE.MeshPhongMaterial({ map: texture_bd })
	)
	pln3.position.x = 0
	pln3.position.y = .15
	pln3.position.z = .2
	draw.add(pln3)

	const pln4 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, .55, .05),
		new THREE.MeshBasicMaterial({ map: texture_wd })
	)
	pln4.position.x = 0
	pln4.position.y = .165
	pln4.position.z = -.2
	draw.add(pln4)

	draw.position.set(0.4, 0.2, 2.05);
	draw.name = "drawer";
	draw.receiveShadow = true;
	draw.castShadow = true;
}

//mainLoader function
function mainLoader() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
	//texture loader
	var texture_tile = new THREE.TextureLoader().load(texture.tile);
	var texture_body = new THREE.TextureLoader().load(texture.body);
	var texture_drawer = new THREE.TextureLoader().load(texture.drawer);
	var texture_door = new THREE.TextureLoader().load(texture.door);


	const geometry = new THREE.BoxGeometry(7, 5, 7);
	const material = new THREE.MeshStandardMaterial({
		map: new THREE.TextureLoader().load(texture.wall),
	});

	material.side = THREE.BackSide;
	const room = new THREE.Mesh(geometry, material);
	room.position.y = 2.4;
	room.receiveShadow = true;
	scene.add(room);

	texture_tile.wrapS = THREE.RepeatWrapping;
	texture_tile.wrapT = THREE.RepeatWrapping;
	texture_tile.repeat.set(5, 10);


	//Wardrobe
	body = new THREE.Mesh(
		new THREE.BoxGeometry(2.7, 2, .50),
		new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: texture_body
		})
	);
	scene.add(body);
	body.position.set(0, 1, 2.5);
	body.receiveShadow = true;
	body.castShadow = true;

	//Drawer 
	drawer1 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, 0.5, 0.45),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF,
			map: texture_drawer
		})
	);
	scene.add(drawer1);
	drawer1.position.set(0.4, 1.55, 2.460);
	drawer1.receiveShadow = true;
	drawer1.castShadow = true;

	drawer2 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, 0.5, 0.45),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF,
			map: texture_drawer
		})
	);
	scene.add(drawer2);
	drawer2.position.set(0.4, 0.95, 2.460);
	drawer2.receiveShadow = true;
	drawer2.castShadow = true;

	drawer3 = new THREE.Mesh(
		new THREE.BoxGeometry(1.7, 0.5, 0.45),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF,
			map: texture_drawer
		})
	);
	scene.add(drawer3);
	drawer3.position.set(0.4, 0.35, 2.460);
	drawer3.receiveShadow = true;
	drawer3.castShadow = true;


	//Door
	door = new THREE.Mesh(
		new THREE.BoxGeometry(0.7, 1.69, 0.45),
		new THREE.MeshBasicMaterial({
			color: 0xFFFFFF,
			map: texture_door
		})
	);
	scene.add(door);
	door.position.set(-0.9, 0.95, 2.460);
	door.receiveShadow = true;
	door.castShadow = true;

	//Floor
	floor = new THREE.Mesh(
		new THREE.PlaneGeometry(7, 7),
		new THREE.MeshPhongMaterial({
			color: "linen",
			wireframe: false,
			map: texture_tile
		})
	);
	floor.rotation.x -= Math.PI / 2;
	floor.receiveShadow = true;
	scene.add(floor);

	//AmbientLight
	ambientLight = new THREE.AmbientLight(0xD6C675, 0.5);
	scene.add(ambientLight);

	//pointLight
	light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(-5, 5, -5);
	light.castShadow = true;
	light.shadow.camera.near = 0.5;
	light.shadow.camera.far = 25;
	light.shadowMapWidth = 1024;
	light.shadowMapHeight = 1024;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	scene.add(light);

	//camera
	camera.position.set(0, height, -1.5);
	camera.lookAt(new THREE.Vector3(0, height, 1));

	//render
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setClearColor("black");
	document.body.appendChild(renderer.domElement);

	resizeRendererToDisplaySize(renderer);

	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();

	animate();
}

//resizing display
function resizeRendererToDisplaySize(renderer) {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize)
		renderer.setSize(width, height, false);
	return needResize;
}

var keyboard = {}, degree = 0, click = 0;

//camera and light animation
function animate() {
	setTimeout(function () { requestAnimationFrame(animate); }, 1000 / 100);
	//Up Arrow
	if (keyboard[38]) {
		camera.position.x -= Math.sin(camera.rotation.y) * speed;
		camera.position.z -= -Math.cos(camera.rotation.y) * speed;
	}
	//Down Arrow
	if (keyboard[40]) {
		camera.position.x += Math.sin(camera.rotation.y) * speed;
		camera.position.z += -Math.cos(camera.rotation.y) * speed;
	}
	//left Arrow
	if (keyboard[37]) {
		camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * speed;
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * speed;
	}
	//Right Arrow
	if (keyboard[39]) {
		camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * speed;
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * speed;
	}
	//Left turn(space bar & a)
	if (keyboard[32] && keyboard[65]) {
		camera.rotation.y -= Math.PI * 0.01;
	}
	//Right turn(space bar & d)
	if (keyboard[32] && keyboard[68]) {
		camera.rotation.y += Math.PI * 0.01;
	}
	//lightAnimation
	if (degree < 360) {
		degree += 0.75;
	}
	else {
		degree = 0;
	}
	light.position.x = Math.sin(degree * Math.PI / 180) * 3;
	light.position.z = Math.cos(degree * Math.PI / 180) * 3;

	renderer.render(scene, camera);
}

function keyDown(event) {
	keyboard[event.keyCode] = true;
}

function keyUp(event) {
	keyboard[event.keyCode] = false;
}

//drawer will comes up with mouse click
function clickable(event) {
	if (click < 6)
		click += 1;
	else
		click = 1;

	switch (click) {
		case 1:
			drawer_one();
			break;
		case 2:
			scene.remove(scene.getObjectByName('drawer'));
			break;
		case 3:
			drawer_two();
			break;
		case 4:
			scene.remove(scene.getObjectByName('drawer'));
			break;
		case 5:
			drawer_three();
			break;
		case 6:
			scene.remove(scene.getObjectByName('drawer'));
			break;
		default:
	}
}

//eventListener
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
window.addEventListener('click', clickable);
window.onload = mainLoader;