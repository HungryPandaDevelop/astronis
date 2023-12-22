$(document).ready(function(){
// Extra geometry
THREE.IcosahedronGeometry = function(radius, detail) {
	var t = (1 + Math.sqrt(5)) / 2;
	var vertices = [-1, t, 0, 1, t, 0, -1, -t, 0, 1, -t, 0,
									0, -1, t, 0, 1, t, 0, -1, -t, 0, 1, -t,
									t, 0, -1, t, 0, 1, -t, 0, -1, -t, 0, 1
								 ];
	var indices = [
		0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11,
		1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
		3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
		4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
	];
	THREE.PolyhedronGeometry.call(this, vertices, indices, radius, detail);
	this.type = 'IcosahedronGeometry';
	this.parameters = {
		radius: radius,
		detail: detail
	};
};

THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);

THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;

// Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({
	antialias: 1
});

renderer.setClearColor(0x000000);
let sceneObj = document.getElementsByClassName('sphere')[0]; 

console.log('123,',sceneObj);

renderer.setSize(sceneObj.offsetWidth, sceneObj.offsetHeight);
sceneObj.appendChild(renderer.domElement);

scene.fog = new THREE.Fog(0xd4d4d4, 8, 20);

// Create vertex points
var mesh = new THREE.IcosahedronGeometry(10, 2); // radius, detail
var vertices = mesh.vertices;
var positions = new Float32Array(vertices.length * 3);

for (var i = 0, l = vertices.length; i < l; i++) {
	vertices[i].toArray(positions, i * 3);
}

var geometry = new THREE.BufferGeometry();
geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

var material = new THREE.PointsMaterial({
	size: 0.3,
	vertexColors: THREE.VertexColors,
	color: 0xffffff
});
var points = new THREE.Points(geometry, material);

var object = new THREE.Object3D();

object.add(points);



object.add(new THREE.Mesh(
	mesh,
	new THREE.MeshPhongMaterial({
		color: 0xffffff,
		emissive: 0xa1a1a1,
		wireframe: true,
		fog: 1
	})

));

scene.add(object);

camera.position.z = 20;

var render = function() {
	requestAnimationFrame(render);

	object.rotation.x += 0.0025;
	object.rotation.y += 0.0025;

	renderer.render(scene, camera);
};

render();
});