// "use client";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useRef, useState } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";


// function loadAtari() {
//     const gltf = useLoader(GLTFLoader, "/modeles/Atari.glb");
//     return (
//         <>
//             <primitive object={gltf.scene} scale={0.4} />
//         </>
//     );
// }

// export function Atari() {
//     return (
//         <Canvas camera={{ position: [0, 0, 0.5] } }>
//             {/* Lumiere douce} */}
//             <ambientLight intensity={0.9} />
//             <directionalLight position={ [5, 5, 5] }/>

//             {/* Model3D */}
//             {loadAtari()}

//             {/* Controle a la souris */}
//             <OrbitControls />
//         </Canvas>
//     );
// }

// export default function model3d() {
//     const [hovered, setHover]= useState(false);

//     return (
//         <div className="model3dContainer">

            
//             <Canvas camera={{ position: [0, 0, 5] } }>
//                 {/* Lumiere douce} */}
//                 <ambientLight intensity={0.6} />
//                 <directionalLight position={ [5, 5, 5] }/>

//                 {/* Model3D */}
//                 <mesh 
//                     onPointerOver={(event) => setHover(true)}
//                     onPointerOut={(event) => setHover(false)}>
                    
//                     <boxGeometry />
//                     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//                 </mesh>

//                 {/* Controle a la souris */}
//                 <OrbitControls />
//             </Canvas>
//         </div>
//     );

// }