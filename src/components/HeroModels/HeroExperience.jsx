import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';

const HeroExperience = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [10, 0, 17], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={3.0}  />

      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 2} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI/2} // Maximum angle for vertical rotation
      />


      <group
        scale={isMobile ? 0.7 : 0.9}
        position={[isMobile ? 1.5: 3.5, isMobile ? -5.5 : -2.0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>


    </Canvas>
  )
}

export default HeroExperience
