"use client";
import { useEffect, useState } from "react";

export default function ModeloConAudio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const marker = document.querySelector("a-marker");
    const audioEl = document.querySelector<HTMLAudioElement>("#miAudio");

    if (marker && audioEl) {
      const handleFound = () => {
        console.log("Marcador detectado → reproducir audio");
        
        audioEl.play().catch((e) =>
          console.warn("Autoplay bloqueado, requiere interacción:", e)
        );
      };

      const handleLost = () => {
        console.log("Marcador perdido → pausar audio");
        audioEl.pause();
      };

      marker.addEventListener("markerFound", handleFound);
      marker.addEventListener("markerLost", handleLost);

      return () => {
        marker.removeEventListener("markerFound", handleFound);
        marker.removeEventListener("markerLost", handleLost);
      };
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <a-scene arjs xr-mode-ui="enabled: false" isMobile>
      <a-marker type="pattern" url="/markers/penta.patt">
        <a-entity
          position="0 0 0"
          scale="5 5 5"
          gltf-model="/models/cat.glb"
          rotation="-90 0 0"
        ></a-entity>
      </a-marker>

      {/* Cámara */}
      <a-entity
        camera="fov: 60; near: 0.1; far: 10000"
        look-controls="enabled: false"
      ></a-entity>

      {/* Audio nativo controlado con JS */}
      <audio id="miAudio" src="/audio/musica.mp3" preload="auto"></audio>
    </a-scene>
  );
}
