import * as THREE from "/JS/three/build/three.module.js";
    
var myScene = document.getElementById('canvas');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
myScene.append(renderer.domElement);

var light = new THREE.PointLight(0xffffff, 5);
light.position.set(-10, 10, 20);
scene.add(light);

var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshStandardMaterial({color: 0x99316f});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

cube.position.z = -5;
cube.rotation.x = 10;
cube.rotation.y = 5;

renderer.render(scene,camera);

var animate = function() {
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();