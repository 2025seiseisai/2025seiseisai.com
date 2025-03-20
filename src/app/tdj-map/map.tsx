"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Rects, Polygons } from "./mapdata";

function BuildScene(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const light1 = new THREE.DirectionalLight(0xffffff, 3.5);
    const light2 = new THREE.PointLight(0xffffff, 20000, 0, 1.5);
    scene.add(light1);
    scene.add(light2);

    const grid = new THREE.GridHelper(1000, 10);
    grid.position.set(0, -102, 0);
    scene.add(grid);
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/tdj-map/gitignore.png");
    texture.colorSpace = THREE.SRGBColorSpace;
    const tdjplane = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000, 1, 1),
        new THREE.MeshBasicMaterial({ map: texture }),
    );
    tdjplane.rotation.x = -Math.PI / 2;
    tdjplane.position.set(320, -104, 0);
    scene.add(tdjplane);

    Rects.forEach(({ y, x1, z1, x2, z2, color }) => {
        if (color == undefined) color = 0xeeeeee;
        const width = Math.abs(x1 - x2);
        const height = Math.abs(z1 - z2);
        const materials = [
            new THREE.MeshPhongMaterial({ color: 0xaaaaaa }),
            new THREE.MeshPhongMaterial({ color: 0xaaaaaa }),
            new THREE.MeshPhongMaterial({ color: 0xaaaaaa }),
            new THREE.MeshPhongMaterial({ color: 0xaaaaaa }),
            new THREE.MeshStandardMaterial({ color: color, roughness: 0.5 }),
            new THREE.MeshBasicMaterial({ color: 0xaaaaaa }),
        ];
        const rect = new THREE.Mesh(new THREE.BoxGeometry(width, height, 5), materials);
        rect.rotation.set(-Math.PI / 2, 0, 0);
        rect.position.set((x1 + x2) / 2, y - 2.5, (z1 + z2) / 2);
        scene.add(rect);
    });

    Polygons.forEach(({ points, color }) => {
        if (points.length <= 2) return;
        if (color == undefined) color = 0xeeeeee;
        const indices = Array(points.length - 2)
            .fill(0)
            .map((value, index) => [0, index + 1, index + 2])
            .flat() as number[];
        {
            const geometry = new THREE.BufferGeometry();
            geometry.setIndex(indices);
            geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points.flat()), 3));
            geometry.computeVertexNormals();
            scene.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: color, roughness: 0.5 })));
        }
        {
            const geometry = new THREE.BufferGeometry();
            geometry.setIndex(indices);
            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(
                    new Float32Array(
                        points
                            .map(([x, y, z]) => [x, y - 5, z])
                            .reverse()
                            .flat(),
                    ),
                    3,
                ),
            );
            geometry.computeVertexNormals();
            scene.add(new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xaaaaaa })));
        }
        for (let i = 0; i != points.length; ++i) {
            const [x1, y1, z1] = points[i];
            const [x2, y2, z2] = points[(i + 1) % points.length];
            const geometry = new THREE.BufferGeometry();
            const vertices = new Float32Array([x1, y1, z1, x1, y1 - 5, z1, x2, y2 - 5, z2, x2, y2, z2]);
            geometry.setIndex([0, 1, 2, 0, 2, 3]);
            geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
            geometry.computeVertexNormals();
            scene.add(new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xaaaaaa })));
        }
    });

    return () => {
        light1.position.set(camera.position.x, camera.position.y, camera.position.z);
        light2.position.set(camera.position.x, camera.position.y, camera.position.z);
    };
}

export function Map({}: { location: string }) {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        if (canvas === null) {
            console.error("Canvas not found");
            return;
        }
        const scene = new THREE.Scene();
        const sizes = {
            width: innerWidth,
            height: innerHeight,
        };
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 2000);
        camera.position.set(-300, 750, 750);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas || undefined,
            antialias: true,
            alpha: true,
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const update_func = BuildScene(scene, camera);

        const controls = new OrbitControls(camera, document.getElementById("canvas"));
        controls.enableDamping = true;
        controls.dampingFactor = 0.15;
        controls.minPolarAngle = Math.PI / 16;
        controls.maxPolarAngle = (Math.PI / 4) * 3;
        controls.minDistance = 500;
        controls.maxDistance = 1200;
        controls.panSpeed = 20;
        let updated = true;
        controls.addEventListener("change", () => (updated = true));

        renderer.render(scene, camera);
        const tick = () => {
            controls.update();
            update_func();
            requestAnimationFrame(tick);
            if (updated) renderer.render(scene, camera);
            updated = false;
        };
        tick();

        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(window.devicePixelRatio);
        });
    }, []);
    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    );
}
