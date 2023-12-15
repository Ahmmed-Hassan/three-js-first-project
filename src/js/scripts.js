import * as THREE from 'three';
import { Mesh } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
// scene.add(axesHelper);

camera.position.set(-10, 30, 30);
orbit.update();


const boxGeometry = new THREE.BoxGeometry(5,5,5);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);
box.position.set(10,10,0);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
//rotates the plane to be horizontal
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const sphereGeometry = new THREE.SphereGeometry(4,50,50);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    wireframe: false
});
const sphere = new Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-10,10,0);

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)