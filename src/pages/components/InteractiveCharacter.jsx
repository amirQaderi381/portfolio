
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CharacterModel() {
  const root = useRef(null);
  const head = useRef(null);
  const body = useRef(null);
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);
  const jump = useRef(0);

  useFrame((state, delta) => {
    if (!root.current) return;

    const { x, y } = state.pointer;
    const time = state.clock.elapsedTime;

    // Body follows the mouse.
    root.current.rotation.y = THREE.MathUtils.damp(
      root.current.rotation.y,
      x * 0.35,
      4,
      delta,
    );

    root.current.rotation.x = THREE.MathUtils.damp(
      root.current.rotation.x,
      -y * 0.12,
      4,
      delta,
    );

    root.current.position.x = THREE.MathUtils.damp(
      root.current.position.x,
      x * 0.22,
      3,
      delta,
    );

    // Floating animation and click reaction.
    jump.current = Math.max(0, jump.current - delta * 2.5);

    root.current.position.y =
      Math.sin(time * 1.5) * 0.07 +
      Math.sin((1 - jump.current) * Math.PI) * 0.48;

    // Head independently follows the mouse.
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(
        head.current.rotation.y,
        x * 0.5,
        5,
        delta,
      );

      head.current.rotation.x = THREE.MathUtils.damp(
        head.current.rotation.x,
        -y * 0.25,
        5,
        delta,
      );
    }

    // Pupils look toward the cursor.
    [leftPupil.current, rightPupil.current].forEach((pupil) => {
      if (!pupil) return;

      pupil.position.x = THREE.MathUtils.damp(
        pupil.position.x,
        x * 0.035,
        7,
        delta,
      );

      pupil.position.y = THREE.MathUtils.damp(
        pupil.position.y,
        y * 0.025,
        7,
        delta,
      );
    });

    // Slight independent body sway.
    if (body.current) {
      body.current.rotation.z = THREE.MathUtils.damp(
        body.current.rotation.z,
        -x * 0.08,
        3,
        delta,
      );
    }
  });

  return (
    <group
      ref={root}
      onClick={(event) => {
        event.stopPropagation();
        jump.current = 1;
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      {/* Hoodie torso */}
      <group ref={body}>
        <mesh position={[0, -0.48, 0]} castShadow>
          <capsuleGeometry args={[0.43, 0.72, 8, 16]} />
          <meshStandardMaterial
            color="#20232d"
            roughness={0.82}
          />
        </mesh>

        {/* Hood behind the head */}
        <mesh position={[0, 0.72, -0.13]} castShadow>
          <sphereGeometry args={[0.53, 32, 32]} />
          <meshStandardMaterial
            color="#303440"
            roughness={0.9}
          />
        </mesh>

        {/* Sleeves */}
        <mesh
          position={[-0.53, -0.43, 0]}
          rotation={[0, 0, -0.38]}
          castShadow
        >
          <capsuleGeometry args={[0.15, 0.62, 8, 12]} />
          <meshStandardMaterial color="#20232d" />
        </mesh>

        <mesh
          position={[0.53, -0.43, 0]}
          rotation={[0, 0, 0.38]}
          castShadow
        >
          <capsuleGeometry args={[0.15, 0.62, 8, 12]} />
          <meshStandardMaterial color="#20232d" />
        </mesh>

        {/* Hands */}
        <mesh position={[-0.65, -0.85, 0.02]} castShadow>
          <sphereGeometry args={[0.14, 20, 20]} />
          <meshStandardMaterial color="#dca783" />
        </mesh>

        <mesh position={[0.65, -0.85, 0.02]} castShadow>
          <sphereGeometry args={[0.14, 20, 20]} />
          <meshStandardMaterial color="#dca783" />
        </mesh>

        {/* Hoodie strings */}
        {[-0.075, 0.075].map((x) => (
          <mesh
            key={x}
            position={[x, -0.2, 0.418]}
            castShadow
          >
            <cylinderGeometry args={[0.012, 0.012, 0.3, 8]} />
            <meshStandardMaterial color="#d6d8df" />
          </mesh>
        ))}

        {/* Tomato logo */}
        <mesh position={[0, -0.63, 0.437]}>
          <circleGeometry args={[0.09, 32]} />
          <meshBasicMaterial color="#ff6347" />
        </mesh>

        {/* Pants */}
        <mesh position={[0, -1.3, 0]} castShadow>
          <boxGeometry args={[0.62, 0.38, 0.36]} />
          <meshStandardMaterial color="#171922" />
        </mesh>

        {/* Shoes */}
        <mesh position={[-0.2, -1.57, 0.08]} castShadow>
          <boxGeometry args={[0.34, 0.16, 0.48]} />
          <meshStandardMaterial color="#ff6347" />
        </mesh>

        <mesh position={[0.2, -1.57, 0.08]} castShadow>
          <boxGeometry args={[0.34, 0.16, 0.48]} />
          <meshStandardMaterial color="#ff6347" />
        </mesh>
      </group>

      {/* Head */}
      <group ref={head} position={[0, 0.72, 0.08]}>
        {/* Face */}
        <mesh castShadow>
          <sphereGeometry args={[0.43, 40, 40]} />
          <meshStandardMaterial
            color="#e6b493"
            roughness={0.75}
          />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 0.29, -0.025]} castShadow>
          <sphereGeometry
            args={[0.435, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.53]}
          />
          <meshStandardMaterial color="#29212a" roughness={0.8} />
        </mesh>

        {/* Hair fringe */}
        <mesh
          position={[0, 0.25, 0.285]}
          rotation={[0.15, 0, 0]}
          castShadow
        >
          <sphereGeometry args={[0.25, 24, 16]} />
          <meshStandardMaterial color="#29212a" />
        </mesh>

        {/* White eyes */}
        <mesh position={[-0.15, 0.035, 0.36]}>
          <sphereGeometry args={[0.095, 24, 24]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0.15, 0.035, 0.36]}>
          <sphereGeometry args={[0.095, 24, 24]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Moving pupils */}
        <mesh ref={leftPupil} position={[-0.15, 0.035, 0.444]}>
          <sphereGeometry args={[0.043, 20, 20]} />
          <meshStandardMaterial color="#24202a" />
        </mesh>

        <mesh ref={rightPupil} position={[0.15, 0.035, 0.444]}>
          <sphereGeometry args={[0.043, 20, 20]} />
          <meshStandardMaterial color="#24202a" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, -0.07, 0.405]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#d9a184" />
        </mesh>

        {/* Smile */}
        <mesh position={[0, -0.19, 0.386]}>
          <sphereGeometry args={[0.075, 24, 12]} scale={[1, 0.24, 0.25]} />
          <meshBasicMaterial color="#75433e" />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.42, -0.02, 0]}>
          <sphereGeometry args={[0.09, 20, 20]} />
          <meshStandardMaterial color="#e6b493" />
        </mesh>

        <mesh position={[0.42, -0.02, 0]}>
          <sphereGeometry args={[0.09, 20, 20]} />
          <meshStandardMaterial color="#e6b493" />
        </mesh>
      </group>
    </group>
  );
}

export default function InteractiveCharacter() {
  return (
    <div
      style={{
        width: "100%",
        height: "min(560px, 75vh)",
        minHeight: 380,
        position: "relative",
        touchAction: "pan-y",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.3], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[-3, 5, 5]}
          intensity={2.5}
          castShadow
        />

        <pointLight
          position={[3, 1, 3]}
          color="#ff6347"
          intensity={22}
          distance={8}
        />

        <pointLight
          position={[-3, 0, -2]}
          color="#7777ff"
          intensity={12}
          distance={7}
        />

        <CharacterModel />
      </Canvas>
    </div>
  );
}
