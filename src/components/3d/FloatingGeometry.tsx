"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const secondaryMeshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (secondaryMeshRef.current) {
      secondaryMeshRef.current.rotation.x -= delta * 0.15;
      secondaryMeshRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group>
      {/* Primary Floating Icosahedron */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef} position={[1.8, 0.2, 0]} scale={1.8}>
          <icosahedronGeometry args={[1, 3]} />
          <MeshWobbleMaterial
            color="#8b5cf6"
            factor={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Secondary Orbiting Glass Torus Knot */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={secondaryMeshRef} position={[-2.2, -0.5, -1]} scale={1.2}>
          <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
          <meshStandardMaterial
            color="#c084fc"
            roughness={0.15}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Background Ambient Particle Field */}
      <points position={[0, 0, -2]}>
        <sphereGeometry args={[6, 48, 48]} />
        <pointsMaterial size={0.015} color="#a78bfa" transparent opacity={0.4} sizeAttenuation />
      </points>
    </group>
  );
}
