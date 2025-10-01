"use client";
import { useEffect, useState } from 'react';

export default function Intro() {

  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true); // Marca que ya estamos en el cliente   
    const marker = document.querySelector("a-marker");
    const soundEl = document.querySelector("#mysound");

    if (marker && soundEl) {
      const handleFound = () => soundEl.components.sound.playSound();
      const handleLost = () => soundEl.components.sound.stopSound();

      marker.addEventListener("markerFound", handleFound);
      marker.addEventListener("markerLost", handleLost);

      return () => {
        marker.removeEventListener("markerFound", handleFound);
        marker.removeEventListener("markerLost", handleLost);
      };
    } 
  }, []);

  if (!isClient) return null; // No renderizar en SSR

  return (
    <a-scene 
        arjs
        xr-mode-ui="enabled: false"
        
        >
      <a-marker type="pattern" url="/markers/penta.patt">
        <a-entity 
          position="0 0 0" 
          scale="5 5 5" 
          gltf-model="/models/cat.glb"
          rotation="-90 0 0"
        ></a-entity>
        <a-sound
          id="mysound"
          src="url(/sounds/cat.mp3)"
          autoplay="false"
          loop="false"
        ></a-sound>
      </a-marker>
      <a-entity camera="fov: 60; near: 0.1; far: 10000" 
            look-controls="enabled: false"></a-entity>
    </a-scene>
  );
}
