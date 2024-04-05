
import './scss/Variables.scss';
import './scss/style.scss';

//custom pages
import "./scss/Custom_pages/toggle-menu.scss";
import './scss/Custom_pages/Landing.scss'
import './scss/Custom_pages/Inside-landing/_digitalproducts.scss';
import './scss/Custom_pages/Inside-landing/_section-visual-designs.scss';
import './scss/Custom_pages/_typography.scss';

//three js
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import gsap from 'gsap';
import normal from "./assets/textures/Normal.png"
import height from "./assets/textures/Height.jpg"

//javascript
import "./navigation";
import "./Mouseenter";
import "./exceldatabase"
import "./BGeraser";


//bootstrap javascripts;
import "../node_modules/bootstrap/js/src/modal"





//---------------------------------------- V A R I A B L E S --------------------------------------------------------
const textureLoader=new THREE.TextureLoader()
const normalTextureMap=textureLoader.load(normal);
const heightTextureMap=textureLoader.load(height);
const scrollable=document.querySelector('main');
var cursor= document.querySelector('.mouse-cursor')


//function to mouse curosr------------------------------------

window.addEventListener('mousemove',(e)=>{
   

    cursor.style.top=e.pageY + (-10) +'px';
    cursor.style.left=e.pageX + (-10) +'px';
});

// window.addEventListener('mousedown',()=>{
//     cursor.style.transform="scale(1.4)";
   
// });

// window.addEventListener('mouseup',()=>{
//     cursor.style.transform="scale(1)";
// })


//----- modification to the textures-----------

normalTextureMap.wrapS = THREE.RepeatWrapping;
normalTextureMap.wrapT = THREE.RepeatWrapping;
normalTextureMap.repeat.set(10,10);


// Debug
// const gui = new dat.GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene1 = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry( 10,100,200);
geometry.scale(0.08,0.08,0.08)

// Materials

const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0x00000)
// var material=new THREE.MeshStandardMaterial();
material.metalness=0.463;
material.roughness=0.7;
material.normalMap=normalTextureMap;

material.heightTextureMap=heightTextureMap;

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene1.add(sphere)

// Lights

//-----------This is orange point light

const pointLight1 = new THREE.PointLight(0xFB722E, 15)
pointLight1.position.x = 5.7
pointLight1.position.y = 7
pointLight1.position.z = -3.1
scene1.add(pointLight1)

//-----------This is purple point light

const pointLight2 = new THREE.PointLight(0xC25FFD, 20)
pointLight2.position.x = -100
pointLight2.position.y = 7
pointLight2.position.z = -3.1
pointLight2.scale.z=105
scene1.add(pointLight2)





/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
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
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene1.add(camera)




//add GUI
// gui.add(pointLight1.position,'x',-10,10).name('sphererotationX')
// gui.add(pointLight1.position,'y',-10,10).name('sphererotationY')
// gui.add(pointLight1.position,'z',-10,10).name('sphererotationZ')


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,alpha:1
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Controls
var controls=new OrbitControls(camera,renderer.domElement);

/**
 * Animate
 */

// window.addEventListener('load',()=>{
//     document.querySelector('.loading').classList.add('loaded')
// });

window.addEventListener('mousedown',()=>{
    gsap.to(camera.position,{
        z:3,
        duration:1.5
    })
})

window.addEventListener('mouseup',()=>{
    gsap.to(camera.position,{
        z:2,
        duration:1.5
    })
})



window.addEventListener('touchstart',()=>{
    gsap.to(camera.position,{
        z:3,
        duration:1.5
    })
})

window.addEventListener('touchend',()=>{
    gsap.to(camera.position,{
        z:2,
        duration:1.5
    })
})


scrollable.addEventListener('scroll',()=>{
    let t=scrollable.scrollTop;
    
// console.log(t);
let o=1
sphere.position.z=t*0.002;
sphere.rotation.z +=t*10;
if (t>0){
    o=0*t
}
if(t=0){
    o=1+t;
}

canvas.style.opacity=o
})

 

const clock = new THREE.Clock()
const tick = () =>
{
        
    // Update Orbital Controls
    //-->currently the layer is beaneath the main so the controls don't 'seem' to function
    controls.update()
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

  
        
    sphere.rotation.y += 0.001;

    // Render
    renderer.render(scene1, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
