import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// Elements for sprite selection


let selectedObject = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();


// Canvas
const canvas = document.querySelector('canvas.webgl')

const canvasHydra = document.querySelector('canvas.hydra')

// Scene
const scene = new THREE.Scene()

let spriteGroup = new THREE.Group();
let keyGroup = new THREE.Group();

// scene.add(spriteGroup);
scene.add(keyGroup);


// Background

scene.background = new THREE.Color('rgb(222, 160, 157)')

// Model

const draco = new DRACOLoader();
draco.setDecoderPath('/draco/')

const loader = new GLTFLoader();
loader.setDRACOLoader(draco)

let keyboard;

loader.load("models/scene_00.gltf", function (gltf) {

    keyboard = gltf.scene;

    const axesHelper = new THREE.AxesHelper(2)
    //scene.add(axesHelper)

    //keyboard.rotateX(Math.PI/2);
    keyboard.rotateY(-Math.PI / 2);
    keyboard.rotateZ(0);
    keyboard.position.set(0, 0, 0);
    keyboard.scale.set(5, 5, 5);
    //keyboard.axesHelper;

    // scene.add(keyboard);
    // group.add(keyboard)
    keyGroup.add(keyboard)
    
    keyGroup.add(spriteGroup)
    camera.lookAt(keyboard.position)

});

/** 
 * Sprites
 */


const mapAbout = new THREE.TextureLoader().load('sprites/about_02.png');
const materialAbout = new THREE.SpriteMaterial({
    map: mapAbout,
    alphaTest: 0.5,
    transparent: true,
    depthTest: false,
    depthWrite: false
});

const spriteAbout = new THREE.Sprite(materialAbout);
spriteAbout.position.set(-0.65, 0.3, -0.55);
spriteAbout.scale.set(1, 1, 1);

spriteGroup.add(spriteAbout);

const mapWork = new THREE.TextureLoader().load('sprites/work_01.png');
const materialWork = new THREE.SpriteMaterial({
    map: mapWork,
    alphaTest: 0.5,
    transparent: true,
    depthTest: false,
    depthWrite: false
});

const spriteWork = new THREE.Sprite(materialWork);
spriteWork.position.set(-3.1, 0.3, 0);
spriteWork.scale.set(1, 1, 1);

spriteGroup.add(spriteWork);
document.addEventListener('pointermove', onPointerMove);

function onPointerMove(event) {
    if (selectedObject) {
        selectedObject.material.color.set('#ff6652');
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
/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(0, 0, 3)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// vista en x 
// camera.position.set(10, 1, 1)

//top
camera.position.set(0, 5, 0)
//n
//camera.position.set(-5, 0, 0.1)
// s
//camera.position.set(5, 0, 0)
// e 
//camera.position.set(0.1, 0, -5)
//w
//camera.position.set(0, 0, 5)


scene.add(camera)

const helper = new THREE.CameraHelper(camera);
// scene.add( helper );



// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true


controls.minDistance = 2.5
controls.maxDistance = 5
const date = new Date()
// controls.autoRotate = true
// controls.autoRotateSpeed = 10 * Math.sin(date.getTime())
// controls.autoRotateSpeed = ((Math.sin(clock/10000)+2)*-0.1)
controls.maxPolarAngle = Math.PI / 2;
controls.minAzimuthAngle = -1;
controls.maxAzimuthAngle = 1;

// camera.rotation.set(0, 5, 10 * Math.sin(date.getDate()))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    canvasHydra: canvasHydra
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()
let previousTime = 0

// let angY = 0
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if (keyboard) {
        // let baseY = Math.PI * 0
        let amntY = Math.PI * 0.006125;
        let angY = map(Math.sin(elapsedTime * 1), -1, 1,  - amntY, amntY)

        // let baseZ = Math.PI * 0
        let amntZ = Math.PI * 0.0125;
        let angZ = map(Math.sin(elapsedTime * 1.25), -1, 1,  - amntZ,   amntZ)

        // keyboard.rotation.set(0, angY, angZ)
        // keyboard.rotation.set(0, baseY, angZ)
        keyGroup.rotation.set(0, angY, angZ)

    }
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;