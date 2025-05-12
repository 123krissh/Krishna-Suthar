import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='blue' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 1}
        position={isMobile ? [0, 0, -1] : [-3, -1.5, -1.5]}
        rotation={[-0.01, -0, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense 
    //   fallback={<CanvasLoader />}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;



// import React, { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.003;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <ambientLight intensity={0.4} />
//       <hemisphereLight intensity={0.3} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.2}
//         penumbra={0.5}
//         intensity={1.2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} position={[10, 10, 10]} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.65 : 0.75}
//         position={isMobile ? [0, -3, -2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (e) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   }, []);

//   return (
//     <div
//       onWheel={(e) => e.stopPropagation()} // ⛔ Stop wheel scroll zoom
//       style={{ width: "100%", height: "100%", overflow: "hidden" }}
//     >
//       <Canvas
//         frameloop='demand'
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [20, 3, 5], fov: 25 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense
//           // fallback={<CanvasLoader />}
//         >
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//             enableDamping
//             dampingFactor={0.05}
//           />
//           <Computers isMobile={isMobile} />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default ComputersCanvas;
