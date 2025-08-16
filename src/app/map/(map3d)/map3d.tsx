"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Color, Polygons, Rects } from "./mapdata";

function initializeMap3D(
    canvas: HTMLCanvasElement,
    resolution: number,
    initPosition: THREE.Vector3 | null,
    initTarget: THREE.Vector3 | null,
) {
    // scene, renderer, camera, controlsの初期化
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
    });
    const camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 3000);
    if (initPosition) camera.position.copy(initPosition);
    const controls = new OrbitControls(camera, canvas);
    if (initTarget) controls.target.copy(initTarget);
    controls.enableDamping = true;
    controls.dampingFactor = 0.15;
    controls.minPolarAngle = Math.PI / 16;
    controls.maxPolarAngle = (Math.PI / 4) * 3;
    controls.minDistance = 200;
    controls.maxDistance = 800;
    controls.panSpeed = 30;
    let updated = true;
    controls.addEventListener("change", () => (updated = true));

    // canvasサイズの反映 (リサイズ対応)
    const setSize = (width: number, height: number) => {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        let ratio = window.devicePixelRatio || 1;
        const ua = navigator.userAgent.toLowerCase();
        const isSafari = ua.includes("safari") && !ua.includes("chrome");
        if (isSafari) {
            const screenRatio = (window.screen.width * ratio) / window.innerWidth;
            ratio = Math.max(ratio, screenRatio);
        }
        renderer.setPixelRatio(ratio * resolution);
    };
    setSize(canvas.clientWidth, canvas.clientHeight);
    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            setSize(entry.contentRect.width, entry.contentRect.height);
            updated = true;
        }
    });
    resizeObserver.observe(canvas);

    // 照明の追加
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    const light1 = new THREE.DirectionalLight(0xffffff, 3.5);
    const light2 = new THREE.PointLight(0xffffff, 20000, 0, 1.5);
    scene.add(ambientLight);
    scene.add(light1);
    scene.add(light2);

    // 座標軸の追加
    {
        const grid = new THREE.GridHelper(2000, 20);
        grid.position.set(0, -102, 0);
        scene.add(grid);
    }

    // 地面の追加 (開発環境のみ)
    if (process.env.NODE_ENV === "development") {
        const loader = new THREE.TextureLoader();
        const texture = loader.load("/2025/map/school-picture.jpg", () => {
            texture.colorSpace = THREE.SRGBColorSpace;
            const tdjplane = new THREE.Mesh(
                new THREE.PlaneGeometry(2000, 2000, 1, 1),
                new THREE.MeshBasicMaterial({ map: texture }),
            );
            tdjplane.rotation.x = -Math.PI / 2;
            tdjplane.position.set(320, -104, 0);
            scene.add(tdjplane);
            updated = true;
        });
    }

    // 床 (長方形) の追加
    {
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
    }

    // 床 (多角形) の追加
    {
        Polygons.forEach(({ points, color }) => {
            if (points.length <= 2) return;
            if (color == undefined) color = Color.white;
            const indices = Array(points.length - 2)
                .fill(0)
                .map((value, index) => [0, index + 1, index + 2])
                .flat() as number[];
            {
                const geometry = new THREE.BufferGeometry();
                geometry.setIndex(indices);
                geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points.flat()), 3));
                geometry.computeVertexNormals();
                scene.add(
                    new THREE.Mesh(
                        geometry,
                        new THREE.MeshStandardMaterial({
                            color: color,
                            roughness: 0.5,
                        }),
                    ),
                );
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
    }

    // レンダリングループの開始
    const currentCameraPosition = new THREE.Vector3();
    const targetCameraPosition = new THREE.Vector3();
    const currentControlsTarget = new THREE.Vector3();
    const targetControlsTarget = new THREE.Vector3();
    let preventControlsUpdate = initPosition && initTarget ? performance.now() : -1;
    let frameHandler: number | null = null;
    function tick() {
        frameHandler = requestAnimationFrame(tick);
        if (preventControlsUpdate === -1) return;
        const nowTime = performance.now();
        if (preventControlsUpdate <= nowTime) controls.update();
        else {
            const t = 1 - (preventControlsUpdate - nowTime) / 400;
            const easing = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            camera.position.set(
                currentCameraPosition.x * (1 - easing) + targetCameraPosition.x * easing,
                currentCameraPosition.y * (1 - easing) + targetCameraPosition.y * easing,
                currentCameraPosition.z * (1 - easing) + targetCameraPosition.z * easing,
            );
            controls.target.set(
                currentControlsTarget.x * (1 - easing) + targetControlsTarget.x * easing,
                currentControlsTarget.y * (1 - easing) + targetControlsTarget.y * easing,
                currentControlsTarget.z * (1 - easing) + targetControlsTarget.z * easing,
            );
            camera.lookAt(controls.target);
            updated = true;
            --preventControlsUpdate;
        }
        light1.position.set(camera.position.x, camera.position.y, camera.position.z);
        light2.position.set(camera.position.x, camera.position.y, camera.position.z);
        if (updated) renderer.render(scene, camera);
        updated = false;
    }
    tick();

    // レンダリングの終了
    function dispose() {
        if (frameHandler) cancelAnimationFrame(frameHandler);
        const cameraPosition = camera.position.clone();
        const controlsTarget = controls.target.clone();
        resizeObserver.disconnect();
        renderer.dispose();
        scene.clear();
        controls.dispose();
        return {
            cameraPosition,
            controlsTarget,
        };
    }

    // 表示しているフロアに応じてカメラの位置と回転の中心を設定
    function setFloor(floor: number, no_animation: boolean = false) {
        updated = true;
        if (no_animation) preventControlsUpdate = performance.now();
        else preventControlsUpdate = performance.now() + 400;
        currentCameraPosition.copy(camera.position);
        currentControlsTarget.copy(controls.target);
        switch (floor) {
            case 0:
                targetCameraPosition.set(-120, 500, 800);
                targetControlsTarget.set(-100, 50, 500);
                break;
            case 1:
                targetCameraPosition.set(-400, 120, -370);
                targetControlsTarget.set(-100, 0, -570);
                break;
            case 2:
                targetCameraPosition.set(-450, 270, -550);
                targetControlsTarget.set(-100, 150, -100);
                break;
            case 3:
                targetCameraPosition.set(-400, 400, -520);
                targetControlsTarget.set(-100, 300, -50);
                break;
            case 4:
                targetCameraPosition.set(-550, 550, 140);
                targetControlsTarget.set(-100, 450, -70);
                break;
            case 5:
                targetCameraPosition.set(350, 170, 40);
                targetControlsTarget.set(100, 0, -60);
                break;
            case 6:
                targetCameraPosition.set(550, 270, -130);
                targetControlsTarget.set(100, 150, -50);
                break;
            case 7:
                targetCameraPosition.set(500, 420, -140);
                targetControlsTarget.set(100, 300, -70);
                break;
        }
        if (no_animation) {
            camera.position.copy(targetCameraPosition);
            controls.target.copy(targetControlsTarget);
            camera.lookAt(controls.target);
            renderer.render(scene, camera);
        }
    }

    return {
        dispose,
        setFloor,
    };
}

// resolution: 解像度(1.0が最大, 0.8がデフォルト)
// className: canvasのクラス名
export function Map3D({
    resolution = 0.8,
    className = "",
    floor = -1,
}: {
    resolution?: number;
    className?: string;
    floor?: number; // フロア番号 (0: 転心殿前, 1-4: 高校棟, 5-7: 中学棟)
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef<ReturnType<typeof initializeMap3D>>(null);
    const reloader = process.env.NODE_ENV === "development" ? Math.random() : -1;
    const initPosition = useRef<THREE.Vector3 | null>(null);
    const initTarget = useRef<THREE.Vector3 | null>(null);
    useEffect(() => {
        if (!canvasRef.current) {
            console.error("Canvas element is not available.");
            return;
        }
        let initPositionValue = initPosition.current;
        let initTargetValue = initTarget.current;
        stateRef.current = initializeMap3D(canvasRef.current, resolution, initPositionValue, initTargetValue);
        if (!initPositionValue) {
            initPositionValue = new THREE.Vector3();
            initPosition.current = initPositionValue;
        }
        if (!initTargetValue) {
            initTargetValue = new THREE.Vector3();
            initTarget.current = initTargetValue;
        }
        console.log("Map3D initialized with resolution:", resolution);
        return () => {
            if (stateRef.current) {
                const { cameraPosition, controlsTarget } = stateRef.current.dispose();
                stateRef.current = null;
                initPositionValue.copy(cameraPosition);
                initTargetValue.copy(controlsTarget);
            }
            console.log("Map3D disposed");
        };
    }, [resolution, reloader]);

    const prevFloor = useRef(floor);
    useEffect(() => {
        if (floor < 0 || floor > 7 || !Number.isInteger(floor)) return;
        if (prevFloor.current === floor) return;
        if (!stateRef.current) {
            console.error("Camera is not initialized.");
            return;
        }
        stateRef.current.setFloor(floor, prevFloor.current === -1);
        prevFloor.current = floor;
    }, [floor]);

    return <canvas ref={canvasRef} className={className} suppressHydrationWarning></canvas>;
}
