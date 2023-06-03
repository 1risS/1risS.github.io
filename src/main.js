import * as THREE from 'three'

import { addModel, addSprites, addLights, setControls } from './elements.js'

let selectedObject;
let raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2();

const canvas = document.querySelector('canvas.webgl')
const canvasHydra = document.querySelector('canvas.hydra')

var scene, keyGroup
var clock, previousTime
var renderer, camera, controls

init();
function init() {
    scene = new THREE.Scene()
    let spriteGroup = new THREE.Group();
    keyGroup = new THREE.Group();

    scene.add(keyGroup);
    scene.background = new THREE.Color('rgb(222, 160, 157)')

    /// MODEL
    addModel(keyGroup)

    /// SPRITES
    addSprites(spriteGroup)
    keyGroup.add(spriteGroup)


    /// LIGHTS
    addLights(scene)

    /// CAMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 5, 0)
    scene.add(camera)

    // CONTROLS
    controls = setControls(camera, canvas)

    /// RENDERER
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        canvasHydra: canvasHydra
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    /// RAYCAST
    document.addEventListener('pointermove', onPointerMove);
    function onPointerMove(event) {
        if (selectedObject) {
            selectedObject.material.color.set('#fff');

            selectedObject = null;
        }
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(spriteGroup, true);

        if (intersects.length > 0) {
            const res = intersects.filter(function (res) {
                return res && res.object;
            })[0];

            if (res && res.object) {
                selectedObject = res.object;
                selectedObject.material.color.set('#f00');
            }
        }
    }

    clock = new THREE.Clock()
    tick()
}


/// ANIMATION
function tick() {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // let baseY = Math.PI * 0
    let amntY = Math.PI * 0.006125;
    let angY = map(Math.sin(elapsedTime * 1), -1, 1, - amntY, amntY)
    // let baseZ = Math.PI * 0
    let amntZ = Math.PI * 0.0125;
    let angZ = map(Math.sin(elapsedTime * 1.25), -1, 1, - amntZ, amntZ)

    keyGroup.rotation.set(0, angY, angZ)

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}
window.addEventListener('resize', onResize)
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

