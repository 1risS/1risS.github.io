import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export function addModel(group) {
    const draco = new DRACOLoader();
    draco.setDecoderPath('/draco/')
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco)
    loader.load("models/scene_00.gltf", function (gltf) {
        let keyboard = gltf.scene;
        keyboard.rotateY(-Math.PI / 2);
        keyboard.rotateZ(0);
        keyboard.position.set(0, 0, 0);
        keyboard.scale.set(5, 5, 5);
        // scene.add(keyboard);
        // group.add(keyboard)
        // keyGroup.add(keyboard)
        group.add(keyboard)
        // keyGroup.add(spriteGroup)
        // camera.lookAt(keyboard.position)

        document.getElementById("loader").classList.add('hide')
    });
}

export function addSprites(group) {
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

    // spriteGroup.add(spriteAbout);
    // spriteGroup.add(spriteWork);
    group.add(spriteAbout);
    group.add(spriteWork);
}

export function addLights(scene) {
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
}

export function setControls(camera, canvas) {
    let controls = new OrbitControls(camera, canvas)
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
    return controls;
}

