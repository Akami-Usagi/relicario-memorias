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
        src="/videos/transparent-video.webm"
        preload="auto"
        playsInline
        style={{ display: "none" }}
      ></video>

      <a-scene
        arjs
        xr-mode-ui="enabled: false"
         
      >
        <a-marker type="pattern" url="/markers/t.patt">
          {/* Usar el video por id como textura */}
          <a-video
            src="#myVideo"
            width="1.6"
            height="1"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-video>
        </a-marker>
        <a-entity camera="fov: 60; near: 0.1; far: 10000" 
            look-controls="enabled: false"></a-entity>
      </a-scene>
    </>
  );
}
