import { Canvas } from '@react-three/fiber'
import './App.css'

const App = () => {
  

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[0, 10, 0]}>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={"#6be092"} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
