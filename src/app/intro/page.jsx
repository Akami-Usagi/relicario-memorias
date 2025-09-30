"use client";
import { useEffect, useState } from 'react';

export default function Intro() {

  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true); // Marca que ya estamos en el cliente
    
  }, []);

  if (!isClient) return null; // No renderizar en SSR

  return (
    <a-scene 
        vr-mode-ui="enabled: false"
        renderer="antialias: true; alpha: true"
        style={{ width: '100%', height: '100%' }}>
      <a-marker presset="hiro">
        <a-entity 
          position="0 0 0" 
          scale="5 5 5" 
          gltf-model="/models/cat.glb"
          rotation="-90 0 0"
          ></a-entity>
      </a-marker>
      <a-entity camera="fov: 60; near: 0.1; far: 1000" 
            look-controls="enabled: false"></a-entity>
    </a-scene>
  );
}
