"use client";
import { useEffect, useState } from "react";
import MarkerScanner from "@/components/markerScanner";



export default function ComedorEnglish() {
  const [isClient, setIsClient] = useState(false);
  const [scanner, setScanner] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const marker = document.querySelector("a-marker");
    const videoEl = document.querySelector("#myVideo");

    if (marker && videoEl) {
      const handleFound = () => {
        videoEl.play().catch((e) => console.warn("No se pudo reproducir:", e));
        setScanner(false)
      };

      const handleLost = () => {
        videoEl.pause();
        setScanner(true)
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
      
      <video
        id="myVideo"
        src="/videos/comedor/comedor_english.webm"
        preload="auto"
        playsInline
        style={{ display: "none" }}
      ></video>

      <a-scene
        arjs="sourceType: webcam; trackingMethod: best; detectionMode: mono"
        xr-mode-ui="enabled: false"
        >
          
        <a-marker type="pattern" url="/markers/t.patt">
          
          <a-video
            src="#myVideo"
            width="10"
            height="5"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-video>
        </a-marker>
        <a-entity camera="fov: 60; near: 0.1; far: 10000" 
            look-controls="enabled: false"></a-entity>
      </a-scene>

        {scanner ? (
            
               <MarkerScanner text={"Scan to revive memory"}/>
            
        ) : null}
      

    </>
  );
}
