"use client";
import { useEffect, useState } from "react";

export default function Video() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const marker = document.querySelector("a-marker");
    const videoEl = document.querySelector("#myVideo");

    if (marker && videoEl) {
      const handleFound = () => {
        console.log("Marcador detectado → reproducir video");
        videoEl.play().catch((e) => console.warn("No se pudo reproducir:", e));
      };

      const handleLost = () => {
        console.log("Marcador perdido → pausar video");
        videoEl.pause();
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
    <>
      {/* Video HTML oculto */}
      <video
        id="myVideo"
        src="/videos/video.mp4"
        preload="auto"
        playsInline
        style={{ display: "none" }}
      ></video>

      <a-scene
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        xr-mode-ui="enabled: false"
        isMobile    
      >
        <a-marker type="pattern" url="/markers/penta.patt">
          {/* Usar el video por id como textura */}
          <a-video
            src="#myVideo"
            width="2.5"
            height="2"
            position="0 0.3 0"
            rotation="-90 0 0"
          ></a-video>
        </a-marker>
        <a-entity camera="fov: 60; near: 0.1; far: 1000" 
            look-controls="enabled: false"></a-entity>
      </a-scene>
    </>
  );
}
