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
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;" 
        vr-mode-ui="enabled: false">
      <a-marker preset="hiro">
        <a-entity 
          position="0 0 0" 
          scale="1" 
          gltf-model="/models/cat.glb"
          rotation="-90 0 0"
          ></a-entity>
      </a-marker>
      <a-entity camera position="0 0 0"></a-entity>
    </a-scene>
  );
}
