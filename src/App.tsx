import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react';

const Cube = ({position, color, size} : {
  position: [number, number, number];
  color: string;
  size: [number, number, number];
}) => {

  const ref = useRef<MeshProps>()
  useFrame((state, delta) => {
      if(ref.current) {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.rotation.z += delta;

        ref.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2;
        
      }
    
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

const App = () => {
  

  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />

        {/* <group position={[0, -1, 0]}>
          <Cube position={[-1, 0, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[1, 0, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[-1, 2, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[1, 2, 0]} color={"#6be092"} size={[1, 1, 1]} />
        </group> */}

        <Cube position={[0, 0, 0]} color={"#6be092"} size={[1, 1, 1]} />

      </Canvas>
    </>
  )
}

export default App
