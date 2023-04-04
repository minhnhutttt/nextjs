import * as THREE from 'three';
import { WebGLCheck } from './webglCheck';
import { useEffect, useRef } from 'react';

const ThreeJsScene = () => {

    const mouseX = useRef(0);
    const mouseY = useRef(0);


    useEffect(() => {
        let scene, camera, renderer;
            const width = window.innerWidth;
            const height = window.innerHeight;

        const fov = 75;
        const near = 100;
        const far = 10000;

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
        camera.position.set(0, 0, 100);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        document.body.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xFFFFFF, 2.0);
        scene.add(light);

        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.FogExp2(0x000000, 0.002);

        const params = {
            count: 10000,
            size: 1,
        };
        const positions = new Float32Array(params.count * 3);


        const geometry = new THREE.BufferGeometry();

        for (let i = 0; i < params.count; i++) {
            const i3 = i * 3;

            const x = Math.random() * 1000 - 500;
            const y = Math.random() * 1000 - 500;
            const z = Math.random() * 1000 - 500;

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: params.size,
            transparent: true
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        function onDocumentMouseMove(event) {
            mouseX.current = event.clientX - window.innerWidth / 2;
            mouseY.current = event.clientY - window.innerHeight / 2;
        }

        window.addEventListener('resize', onWindowResize);
        document.addEventListener('mousemove', onDocumentMouseMove, false);

        const animate = () => {
            requestAnimationFrame(animate);
            camera.position.x += (mouseX.current - camera.position.x) * .05;
            camera.position.y += (- mouseY.current + 200 - camera.position.y) * .05;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (WebGLCheck.isWebGLAvailable()) {
                document.body.removeChild(renderer.domElement);
                window.removeEventListener('resize', onWindowResize);
                document.removeEventListener('mousemove', onDocumentMouseMove, false);
            } else {
                const warning = WebGL.getWebGLErrorMessage();
                document.body.appendChild(warning);
            }
        };
    }, []);
};

export default ThreeJsScene;