import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

/*
Particle code is modified from:
https://varun.ca/three-js-particles/
https://codesandbox.io/s/instanced-particles-pjcc1?file=/src/index.js
 */

function AmbientLight({...props}) {
    return (
        <ambientLight intensity={0.18} color={"#aebbff"} {...props}/>
    );
}

function PointLight({...props}) {
    return (
        <pointLight position={[10, 10, 10]} intensity={0.46} color={"#d5eef2"} {...props}/>
    );
}

function GlowObject() {
    const glowColor = "#d8b1e8";

    return (
        <pointLight distance={30} intensity={8} color={glowColor}>
            <mesh>
                <sphereBufferGeometry args={[6, 32, 16]} />
                <MeshWobbleMaterial factor={1} speed={8}/>
            </mesh>
        </pointLight>
    );
}

function Particles() {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const count = 800;

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            const z = Math.random() * 100 - 50;
            const updateSpeed = Math.random() / 100 + 0.005;
            const time = Math.random() * 100;
            const factor = Math.random() * 100 + 20;

            temp.push({ x, y, z, updateSpeed, time, factor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (mesh.current) {
            particles.forEach((particle, index) => {
                let {x, y, z, updateSpeed, factor} = particle;

                const t = (particle.time += updateSpeed);

                const a = Math.cos(t) + Math.sin(t * 1) / 10;
                const b = Math.sin(t) + Math.cos(t * 1) / 10;

                particle.mx += (state.mouse.x * 100 - particle.mx) * 0.01;
                particle.my += (state.mouse.y * 100 - particle.my) * 0.01;

                const xContribution = particle.mx;
                const yContribution = particle.my;

                dummy.position.set(
                    x + xContribution * a + (Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10) / 2,
                    y + yContribution * b + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    z - yContribution * a + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
                );

                const s = Math.cos(t);
                dummy.scale.set(s, s, s);
                dummy.rotation.set(s * 5, s * 5, s * 5);

                dummy.updateMatrix();
                mesh.current?.setMatrixAt(index, dummy.matrix);
            });

            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[null as unknown as THREE.BufferGeometry, null as unknown as THREE.Material, count]}>
            <octahedronBufferGeometry args={[0.5, 0]} />
            <meshPhongMaterial color={"#79d7d0"} />
        </instancedMesh>
    );
}

function Postprocessing() {
    return (
        <EffectComposer multisampling={0} disableNormalPass={true}>
            <Bloom luminanceThreshold={0.3} intensity={1.9}/>
        </EffectComposer>
    );
}

export function ParticleTest() {
    const {ref, inView} = useInView();

    return (
        <Canvas
            ref={ref}
            camera={{position: [0, 0, 50]}}
            gl={{
                powerPreference: "high-performance",
                alpha: false,
                antialias: false,
                stencil: false,
                depth: false,
            }}
            frameloop={inView ? "always" : "never"}
        >
            <color attach="background" args={["#181621"]} />
            <AmbientLight />
            <PointLight />
            <GlowObject />
            <Particles />
            <Postprocessing />
        </Canvas>
    );
}