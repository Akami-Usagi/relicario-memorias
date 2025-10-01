"use client";
import { useEffect, useState } from 'react';

export default function Intro() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
  setIsClient(true);

  const marker = document.querySelector("#marker");

  if (marker) {
    marker.addEventListener("loaded", () => {
      marker.addEventListener("markerFound", () => {
        console.log("✅ Marcador detectado");
      });

      marker.addEventListener("markerLost", () => {
        console.log("❌ Marcador perdido");
      });
    });
  }
}, []);

  if (!isClient) return null; // No renderizar en SSR

  return (
    <a-scene 
      arjs="sourceType: webcam; debugUIEnabled: true; detectionMode: mono; trackingMethod: best;"
      xr-mode-ui="enabled: false"
    >
      <a-marker id="marker" type="pattern" url="/markers/t.patt">
        <a-entity
          id="model"
          position="0 0 0"
          scale="1 1 1"
          gltf-model="/models/cat.glb"
          rotation="-90 0 0"
          animation__scale="property: scale; from: 0 0 0; to: 1.5 1.5 1.5; dur: 2000; loop: false; easing: linear; autoplay: false"
        ></a-entity>
      </a-marker>

      <a-entity camera="fov: 60; near: 0.1; far: 10000" look-controls="enabled: false"></a-entity>
    </a-scene>
  );
}

