
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function MouseTrackedHead() {
  const headRef = useRef(null);
  const target = useRef(new THREE.Vector2());

  useFrame((state, delta) => {
    if (!headRef.current) return;

    target.current.set(
      state.pointer.x * 0.35,
      state.pointer.y * 0.2
    );

    const smooth = 1 - Math.exp(-delta * 5);

    headRef.current.rotation.y = THREE.MathUtils.damp(
      headRef.current.rotation.y,
      target.current.x,
      5,
      delta
    );

    headRef.current.rotation.x = THREE.MathUtils.damp(
      headRef.current.rotation.x,
      -target.current.y,
      5,
      delta
    );
  });

  return (
    <group ref={headRef} position={[0, 1.5, 0]}>
      {/* سر مدل سه‌بعدی اینجا قرار می‌گیرد */}

    </group>
  );
}

export default function CharacterScene() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 420 }}>
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight
          position={[3, 5, 5]}
          intensity={2}
        />
        <Environment preset="city" />

        <MouseTrackedHead />
      </Canvas>
    </div>
  );
}
