import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react';

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

const Sphere = ({position, color, args} : {
  position: [number, number, number];
  color: string;
  args: [number, number, number];
}) => {

  const [colorState, setColorState] = useState(color)

  const ref = useRef<MeshProps>()
  // useFrame((state, delta) => {
  //     if(ref.current) {
  //       ref.current.rotation.x += delta;
  //       ref.current.rotation.y += delta;
  //       ref.current.rotation.z += delta;

  //       ref.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2;
        
  //     }
    
  // })

  return (
    <mesh position={position} ref={ref} onPointerEnter={(event) => (event.stopPropagation(), setColorState(getRandomHexColor()))}>
      <sphereGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={colorState} />
    </mesh>
  )
}

const Torus = ({position, color, args} : {
  position: [number, number, number];
  color: string;
  args: [number, number, number, number];
}) => {

  const ref = useRef<MeshProps>()
  useFrame((state, delta) => {
      if(ref.current) {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.rotation.z += delta;

        ref.current.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
        
      }
    
  })

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry attach="geometry" args={args} />
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

        {/* <Cube position={[0, 0, 0]} color={"#6be092"} size={[1, 1, 1]} /> */}
        <Sphere position={[0, 0, 0]} color={"#6be092"} args={[1, 10, 10]} />
        <Torus position={[2, 0, 0]} color={"#ff0000"} args={[1.5, 0.1, 10, 30]} />

      </Canvas>
    </>
  )
}

export default App



function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  // Pad the color code with zeros if needed to ensure it has 6 digits
  return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}