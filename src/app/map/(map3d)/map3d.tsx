"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons";
import { mapIcons } from "./map-icons";
import { BazaarPositions, Boxes, Color, ExhibitionPositions, Polygons, Rects } from "./mapdata";

function initializeMap3D(
    canvas: HTMLCanvasElement,
    resolution: number,
    initPosition: THREE.Vector3 | null,
    initTarget: THREE.Vector3 | null,
) {
    // scene, renderer, camera, controlsの初期化
    const scene = new THREE.Scene();
    const billboardObjects: THREE.Object3D[] = [];
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
    controls.enablePan = false;
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

    // 地面の追加
    /*
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
    */

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
    {
        //展示アイコンの追加
        function setIcon(iconName: string, setX: number, setY: number, setZ: number, scale: number) {
            const SVGData = (
                iconName in exhibitionIcons
                    ? exhibitionIcons[iconName as keyof typeof exhibitionIcons]
                    : iconName in mapIcons
                      ? mapIcons[iconName as keyof typeof mapIcons]
                      : exhibitionIcons["fallback"]
            ).replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');

            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load(
                "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SVGData),
                (tex) => {
                    tex.colorSpace = THREE.SRGBColorSpace;
                    updated = true;
                },
            );

            const planeHeight = 40;
            const planeWidth = 40;

            const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                side: THREE.FrontSide,
                depthWrite: false,
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(setX, setY, setZ);
            mesh.scale.set(scale, scale, scale);
            scene.add(mesh);
            billboardObjects.push(mesh);
        }

        const smallScale: string[] = ["トイレ", "男子トイレ", "女子トイレ", "階段", "自動販売機"];

        for (let i = 0; i < ExhibitionPositions.length; i++) {
            const [name, x, y, z] = ExhibitionPositions[i];
            const scale = smallScale.includes(name) ? 0.7 : 1;
            setIcon(name, x, y + 20, z, scale);
        }
    }
    {
        function setText(
            text: string,
            setX: number,
            setY: number,
            setZ: number,
            scale: number,
            color: string,
            size: number = 10,
        ) {
            //展示団体名の表示
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d")!;

            const fontSize = 192;

            ctx.font = fontSize + "px Noto Sans JP, Noto Sans JP Fallback";
            canvas.width = ctx.measureText(text).width * 1.2;
            canvas.height = fontSize * 1.2;

            ctx.fillStyle = "black";
            ctx.lineWidth = 5; // 枠の太さ
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            if (color != "none") {
                ctx.fillStyle = color;
                ctx.fillRect(
                    ctx.lineWidth,
                    ctx.lineWidth,
                    canvas.width - 2 * ctx.lineWidth,
                    canvas.height - 2 * ctx.lineWidth,
                );
            }

            ctx.font = fontSize + "px Noto Sans JP, Noto Sans JP Fallback";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
            const texture = new THREE.CanvasTexture(canvas);
            texture.colorSpace = THREE.SRGBColorSpace;

            const geometry = new THREE.PlaneGeometry((size * canvas.width) / canvas.height, size);
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                side: THREE.FrontSide,
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(setX, setY, setZ);
            mesh.scale.set(scale, scale, scale);

            // シーンに追加
            scene.add(mesh);
            billboardObjects.push(mesh);
        }

        const exception: string[] = ["トイレ", "男子トイレ", "女子トイレ", "階段"];

        document.fonts.ready.then(() => {
            updated = true;
            for (let i = 0; i < ExhibitionPositions.length; i++) {
                const [name, x, y, z] = ExhibitionPositions[i];
                if (!exception.includes(name)) setText(name, x, y + 50, z, 1, "none");
            }

            setText("圓融館", 312.5, 0 + 20, -387.5, 1, "none", 20);
            setText("体育館", -87.5, -100 + 20, -712.5, 1, "none", 30);
            setText("小講堂", 50, 300 + 15, 175, 1, "none", 20);
            setText("中庭", -62.5, 200 + 20, -25, 1, "none", 20);
            setText("音楽室", -337.5, 150 + 10, 0, 1, "none", 10);
            setText("地学室", -337.5, 300 + 10, 12.5, 1, "none", 10);
            setText("4年A組", -337.5, 450 + 10, 12.5, 1, "none", 10);
            setText("視聴覚室", -187.5, 450 + 10, 25, 1, "none", 10);
            setText("物理室", -187.5, 300 + 10, 12.5, 1, "none", 10);

            for (let i = 0; i < BazaarPositions.length; i++) {
                const [name, x, y, z, color] = BazaarPositions[i];
                setText(name, x, y + 20, z, 3, color);
            }
        });
    }
    {
        //階段の追加
        Boxes.forEach((boxData) => {
            const [x1, y1, z1] = boxData.begin;
            const [x2, y2, z2] = boxData.end;
            const dx = Math.abs(x1 - x2);
            const dy = Math.abs(y1 - y2);
            const dz = Math.abs(z1 - z2);

            const geometry = new THREE.BoxGeometry(dx, dy, dz);
            const material = new THREE.MeshBasicMaterial({
                color: boxData.color,
                transparent: true,
                opacity: 0.5,
                depthWrite: false,
            });

            const box = new THREE.Mesh(geometry, material);
            box.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2);

            scene.add(box);
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

        // ビルボードオブジェクトの回転を更新
        const dir = Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z);
        for (const obj of billboardObjects) {
            obj.rotation.y = dir;
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
                targetCameraPosition.set(140, 320, 1100);
                targetControlsTarget.set(10, 50, 500);
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
    resolution = 1.0,
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
        return () => {
            if (stateRef.current) {
                const { cameraPosition, controlsTarget } = stateRef.current.dispose();
                stateRef.current = null;
                initPositionValue.copy(cameraPosition);
                initTargetValue.copy(controlsTarget);
            }
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
