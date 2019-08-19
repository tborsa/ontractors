import React, {useEffect, useRef} from 'react';
import './Stack.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from './model/pancakes.gltf';
import { MeshToonMaterial } from 'three';
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );
var loader = new GLTFLoader();


const Stack = () => {
    const threeContainer = useRef(null);
    useEffect(()=>{
        var SCREEN_WIDTH = window.innerWidth;
        var SCREEN_HEIGHT = window.innerHeight;

        var camera, scene;
        var canvasRenderer, webglRenderer;

        var container, mesh, geometry, plane;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();

        function init() {

            container = document.createElement('div');
            threeContainer.current.appendChild(container);

            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100000);
            camera.position.x = 1200;
            camera.position.y = 800;
            camera.lookAt({
                x: 0,
                y: 0,
                z: 0
            });

            scene = new THREE.Scene();
            
            var groundMaterial = new THREE.MeshPhongMaterial({
                color: 0x6C6C6C
            });
            plane = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), groundMaterial);
            plane.rotation.x = -Math.PI / 2;
            plane.receiveShadow = true;

            scene.add(plane);
            
            // LIGHTS
            let hemiLight = new THREE.HemisphereLight( '#b1e1ff','#bba17b', 0.4 );
            scene.add(hemiLight);

            scene.add(new THREE.AmbientLight(0x666666));
            
            var light;
            
            light = new THREE.DirectionalLight(0xdfebff, 0.3);
            light.position.set(50, 300, 50);
            light.position.multiplyScalar(1.3);

            light.castShadow = true;
            light.shadowCameraVisible = true;

            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;

            var d = 200;

            light.shadowCameraLeft = -d;
            light.shadowCameraRight = d;
            light.shadowCameraTop = d;
            light.shadowCameraBottom = -d;

            light.shadowCameraFar = 1000;
            light.shadowDarkness = 0.2;

            scene.add(light);
            var helper = new THREE.CameraHelper( light.shadow.camera );
            //scene.add(sun)
            scene.add( helper );
            
            
            var boxgeometry = new THREE.CubeGeometry(100, 100, 100);
            var boxmaterial = new THREE.MeshLambertMaterial({
                color: 0x0aeedf
            });
            var cube = new THREE.Mesh(boxgeometry, boxmaterial);
            cube.castShadow = true;
            cube.position.x = 0;
            cube.position.y = 100;
            cube.position.z = 0;
            
            scene.add(cube);
            
            loader.load( process.env.PUBLIC_URL+'/model/pancakes.gltf', function ( gltf ) {
                gltf.scene.scale.set(300,300,300)
                gltf.scene.position.x = 100;
                gltf.scene.position.y = -100;
                gltf.scene.position.z = 0;
                gltf.scene.children[0].castShadow = true;
                gltf.scene.children[0].receiveShadow = true;
                gltf.scene.castShadow = true;
                gltf.scene.receiveShadow = true;

                console.log(gltf.scene)
                scene.add( gltf.scene );
            }, undefined, function ( error ) {
                
                console.error( error );
                
            } );
            
            scene.traverse( function( child ) {
                
                if ( child.isMesh ) {
                    console.log(child)
                    child.castShadow = true;
                    child.receiveShadow = true;
                    
                }
            } );

            // RENDERER
            webglRenderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
                }
            );
            webglRenderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            webglRenderer.domElement.style.position = "relative";
            webglRenderer.shadowMapEnabled = true;
            webglRenderer.shadowMapType = THREE.PCFSoftShadowMap;
            
            
            container.appendChild(webglRenderer.domElement);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            
            webglRenderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            var timer = Date.now() * 0.0002;
            camera.position.x = Math.cos(timer) * 1000;
            camera.position.z = Math.sin(timer) * 1000;
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            camera.lookAt(scene.position);
            webglRenderer.render(scene, camera);
        }
    }, [])

    return (
        <div className="stack container flex row">
            <div className="renderer"ref={threeContainer}></div>
            <div className="block">
                <div className="title">
                    Full Stack Development, With all the Berries. 
                </div>
                <p>
                    We are an enthusiastic team of designers and developers building web solutions here in Vancouver. 
                </p>
                <button>
                    Get to Know us
                </button>
            </div>
        </div>
    );
};

export default Stack;