"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Sparkles } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

function Book({ position, rotation, color }: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
}) {
  const ref = React.useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003 + state.clock.elapsedTime * 0;
  });

  return (
    <group position={position} rotation={rotation} ref={ref}>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh>
          <boxGeometry args={[1.1, 0.7, 0.18]} />
          <meshStandardMaterial
            color={color}
            roughness={0.35}
            metalness={0.15}
            emissive={color}
            emissiveIntensity={0.08}
          />
        </mesh>
        <mesh position={[0.55, 0, 0]}>
          <boxGeometry args={[0.06, 0.66, 0.2]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      </Float>
    </group>
  );
}

function GraduationCap({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const group = React.useRef<Group>(null);
  const tassel = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.004;
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
    if (tassel.current) {
      tassel.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group position={position} rotation={rotation} ref={group}>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.55, 0.7, 0.18, 32]} />
        <meshStandardMaterial color="#134A7C" roughness={0.3} metalness={0.2} emissive="#134A7C" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.46, 0.5, 0.14, 32]} />
        <meshStandardMaterial color="#1E293B" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.07, 16, 32]} />
        <meshStandardMaterial color="#F4B400" roughness={0.3} metalness={0.4} />
      </mesh>
      <group ref={tassel} position={[0.5, 0.62, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
          <meshStandardMaterial color="#F4B400" roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.72, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#F4B400" emissive="#F4B400" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function Atom({ position }: { position: [number, number, number] }) {
  const ref = React.useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.6;
  });
  const orbit = [
    { pos: [0, 0, 0.8] as const, color: "#4A90E2" },
    { pos: [0.69, 0, -0.4] as const, color: "#F4B400" },
    { pos: [-0.69, 0, -0.4] as const, color: "#F472B6" },
  ];
  return (
    <group position={position} ref={ref}>
      <mesh>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial color="#F4B400" emissive="#F4B400" emissiveIntensity={0.5} />
      </mesh>
      {[0, Math.PI / 3, (Math.PI * 2) / 3].map((rotY, i) => (
        <group key={i} rotation={[0.35 + i * 0.4, rotY, 0]}>
          <mesh>
            <torusGeometry args={[0.8, 0.02, 8, 48]} />
            <meshStandardMaterial color="#4A90E2" transparent opacity={0.7} />
          </mesh>
          <mesh position={orbit[i].pos}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={orbit[i].color} emissive={orbit[i].color} emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 4]} intensity={1.6} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={1.2} color="#4A90E2" />
      <pointLight position={[3, -3, 2]} intensity={0.8} color="#F4B400" />

      <Book position={[-2.4, 0.6, 0]} rotation={[0.2, 0.5, -0.1]} color="#134A7C" />
      <Book position={[-1.4, -0.4, 0.4]} rotation={[-0.2, -0.4, 0.15]} color="#4A90E2" />
      <Book position={[-3.1, -0.7, 0.2]} rotation={[0.3, 0.9, -0.2]} color="#8B5CF6" />
      <GraduationCap position={[2.6, 0.4, -0.2]} rotation={[0.1, -0.3, 0]} />
      <Atom position={[-0.4, 0.8, -0.6]} />

      <Sparkles count={60} scale={8} size={2.2} speed={0.4} color="#4A90E2" opacity={0.5} />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={12} blur={2.4} far={4} />
      <Environment preset="city" />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
    </div>
  );
}

export function EducationScene() {
  const [ready, setReady] = React.useState(false);
  return (
    <div className="relative h-full w-full" aria-hidden>
      {!ready && <LoadingFallback />}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
        onCreated={() => setReady(true)}
      >
        <Scene />
      </Canvas>
    </div>
  );
}