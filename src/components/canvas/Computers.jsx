// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");


//   return (
//     <mesh>
//       <hemisphereLight intensity={5} groundColor='blue' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={5} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.6 : 1}
//         position={isMobile ? [0, 0, -1] : [-9, -1.5, -3.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 1500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense 
//         // fallback={null}
//       >
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;



import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile, isLargeScreen }) => {
  const group = useRef();
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  // Center-aligned position regardless of screen size
  // This ensures rotation happens around the same point
  const getPosition = () => {
    if (isMobile) return [0, 0.2, -1.2]; // Centered for mobile
    return [0, -1.2, -1.2]; // Same centered position for all screen sizes
  };

  // Scale based on screen size
  const getScale = () => {
    if (isMobile) return 0.7;
    if (isLargeScreen) return 0.75; // Scale for large screens
    return 0.9; // Default scale
  };

  return (
    <group ref={group}>
      <hemisphereLight intensity={6} groundColor="blue" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} position={[0, 0, 5]} color="blue" />
      <primitive
        object={computer.scene}
        scale={getScale()}
        position={getPosition()}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Add listeners for different screen sizes
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const largeScreenQuery = window.matchMedia("(min-width: 1300px)");

    // Set the initial values
    setIsMobile(mobileQuery.matches);
    setIsLargeScreen(largeScreenQuery.matches);

    // Define callback functions
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    const handleLargeScreenQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    // Add listeners
    mobileQuery.addEventListener("change", handleMobileQueryChange);
    largeScreenQuery.addEventListener("change", handleLargeScreenQueryChange);

    // Remove listeners when component unmounts
    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      largeScreenQuery.removeEventListener("change", handleLargeScreenQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand" // Changed to 'demand' since we don't need constant rendering
      shadows
      dpr={[1, 2]}
      camera={{ 
        position: [20, 3, 5], // Position camera directly in front for consistent view
        fov: isMobile ? 30 : 25 
      }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false} // Explicitly disable zooming
          autoRotate={false} // Disable auto-rotation
          target={[0, 0, 0]} // Rotate around center point
          enablePan={false} // Disable panning for consistency
          enableRotate={true} // Enable manual rotation
          maxPolarAngle={Math.PI/2} // Allow full vertical rotation
          minPolarAngle={1.2} // Allow full vertical rotation
          // Configure mouse buttons to enable rotation
          // mouseButtons={{
          //   LEFT: 1, // Enable left button for rotation
          //   MIDDLE: 0, // No action
          //   RIGHT: 0 // No action
          // }}
          // touches={{
          //   ONE: 1, // Enable one finger drag for rotation
          //   TWO: 0 // No action on two-finger pinch
          // }}
          rotateSpeed={1.2} // Slightly increased rotation speed for better control
          dampingFactor={0.1} // Add slight dampening for smoother rotation
          enableDamping={true} // Enable damping for more natural rotation feel
        />
        <Computers isMobile={isMobile} isLargeScreen={isLargeScreen} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;