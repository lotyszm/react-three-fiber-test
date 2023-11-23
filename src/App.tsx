import { Canvas } from '@react-three/fiber'
import './App.css'

const Cube = ({position, color, size} : {
  position: [number, number, number];
  color: string;
  size: [number, number, number];
}) => {
  return (
    <mesh position={position}>
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

        <group position={[0, -1, 0]}>
          <Cube position={[-1, 0, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[1, 0, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[-1, 2, 0]} color={"#6be092"} size={[1, 1, 1]} />
          <Cube position={[1, 2, 0]} color={"#6be092"} size={[1, 1, 1]} />
        </group>

      </Canvas>
    </>
  )
}

export default App
