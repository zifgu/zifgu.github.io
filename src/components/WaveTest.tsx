import React, { useRef } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";
import { degToRad } from "three/src/math/MathUtils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

/*
Based off of: https://codepen.io/soju22/full/PLeLwo
 */

function Lights() {
    const distance = 120;
    const intensity = 0.6;

    const light1 = useRef<THREE.PointLight>(null);
    const light2 = useRef<THREE.PointLight>(null);
    const light3 = useRef<THREE.PointLight>(null);

    useFrame(() => {
        const time = Date.now() * 0.001;

        if (light1.current) {
            light1.current.position.x = Math.cos(time * 0.2) * 60;
            light1.current.position.z = Math.sin(time * 0.1) * 30;
        }

        if (light2.current) {
            light2.current.position.x = Math.sin(time * 0.3) * 60;
            light2.current.position.z = Math.cos(time * 0.1) * 30;
        }

        if (light3.current) {
            light3.current.position.x = Math.cos(time * 0.3 + Math.PI) * 60;
            light3.current.position.z = Math.sin(time * 0.1 + Math.PI) * 30;
        }
    });

    return (
        <>
            <ambientLight color={"#584698"} intensity={0.2}/>
            <pointLight ref={light1} distance={distance} intensity={intensity} color={"#59cea1"} position-y={10} />
            <pointLight ref={light2} distance={distance} intensity={intensity} color={"#ee9bec"} position-y={10} />
            <pointLight ref={light3} distance={distance} intensity={intensity} color={"#3abfc4"} position-y={10} />
        </>
    );
}

// Returns horizontal field of view in radians
// Calculation: https://www.reddit.com/r/Planetside/comments/1xl1z5/brief_table_for_calculating_fieldofview_vertical/
function getHorizontalFov(vFovDegrees: number, aspect: number): number {
    return 2 * Math.atan(Math.tan(degToRad(vFovDegrees / 2)) * aspect);
}

function getPlaneWidth(camera: THREE.PerspectiveCamera, distanceToPlaneFar: number): number {
    const hFov = getHorizontalFov(camera.fov, camera.aspect);
    return 2 * Math.tan(hFov / 2) * distanceToPlaneFar;
}

const simplex = new SimplexNoise();

interface AnimationParams {
    xFactor: number,
    yFactor: number,
    zFactor: number,
    timeFactor: number,
}

function WaveAnimation({yPos, cameraZ, animationParams}: {yPos: number, cameraZ: number, animationParams: AnimationParams}) {
    const { camera } = useThree();

    const planeLength = cameraZ * 1.5;
    const planeWidth = getPlaneWidth(camera as THREE.PerspectiveCamera, (cameraZ + planeLength / 2));

    const bufferGeometryRef = useRef<THREE.PlaneBufferGeometry>(null);

    useFrame(() => {
        if (!bufferGeometryRef.current) {
            return;
        }

        const attribute = bufferGeometryRef.current.getAttribute("position");
        const time = Date.now() * 0.001 * animationParams.timeFactor;

        for (let i = 0; i < attribute.count; i++) {
            const zDisplace = simplex.noise3d(attribute.getX(i) / animationParams.xFactor, attribute.getY(i) / animationParams.yFactor, time);
            attribute.setZ(i, zDisplace * animationParams.zFactor);
        }

        attribute.needsUpdate = true;
    });

    return (
        <mesh position-y={yPos} rotation-x={-Math.PI / 2}>
            <planeBufferGeometry args={[planeWidth, planeLength, planeWidth / 2, planeLength / 2]} ref={bufferGeometryRef} />
            <meshLambertMaterial color={"#ffffff"} side={THREE.DoubleSide}/>
        </mesh>
    );
}

export function WaveTest() {
    const fov = 75;
    const cameraZ = 75;

    const animationParams: AnimationParams = {
        xFactor: 50,
        yFactor: 20,
        zFactor: 6,
        timeFactor: 0.3,
    };

    return (
        <Canvas
            camera={{
                position: [0, 0, cameraZ],
                fov: fov,
            }}
        >
            <Lights />
            <WaveAnimation yPos={-25} cameraZ={cameraZ} animationParams={animationParams}/>
        </Canvas>
    );
}