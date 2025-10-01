"use client";
import { useEffect, useState, useRef } from "react";

export default function Intro() {
  const [isClient, setIsClient] = useState(false);
  const attachedRef = useRef(false);     // evita añadir listeners varias veces
  const firstScanRef = useRef(false);    // controla "solo la primera vez"

  useEffect(() => {
    setIsClient(true);
    if (typeof window === "undefined") return;

    // función que añade los listeners cuando el marker ya existe
    const attachListenersToMarker = (marker) => {
      if (!marker || attachedRef.current) return;

      const model = document.querySelector("#model");

      const handleFound = () => {
        console.log("✅ markerFound");
        if (!firstScanRef.current) {
          // ejemplo: emitir evento para la animación (suponiendo startScale en la anim)
          if (model && model.emit) model.emit("startScale");
          firstScanRef.current = true;
        }
        // si quieres que se ejecute cada vez, quita el if y el firstScanRef guard
      };

      const handleLost = () => {
        console.log("❌ markerLost");
      };

      marker.addEventListener("markerFound", handleFound);
      marker.addEventListener("markerLost", handleLost);

      // guardamos handlers para limpiar luego
      marker._afHandlers = { handleFound, handleLost };

      attachedRef.current = true;
    };

    // 1) MutationObserver: observa cuando el marker aparece en el DOM
    const observer = new MutationObserver((mutations, obs) => {
      const marker = document.querySelector("#marker");
      if (marker) {
        attachListenersToMarker(marker);
        obs.disconnect(); // ya no necesitamos observar
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 2) Fallback por si no entra el observer (polling corto)
    const interval = setInterval(() => {
      const marker = document.querySelector("#marker");
      if (marker) {
        attachListenersToMarker(marker);
        clearInterval(interval);
        observer.disconnect();
      }
    }, 300);

    // 3) Intento inmediato (por si ya estaba)
    const immediateMarker = document.querySelector("#marker");
    if (immediateMarker) {
      attachListenersToMarker(immediateMarker);
      clearInterval(interval);
      observer.disconnect();
    }

    // cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
      const marker = document.querySelector("#marker");
      if (marker && marker._afHandlers) {
        marker.removeEventListener("markerFound", marker._afHandlers.handleFound);
        marker.removeEventListener("markerLost", marker._afHandlers.handleLost);
      }
    };
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
      <video
        id="myVideo"
        src="/videos/video.mp4"
        preload="auto"
        playsInline
        style={{ display: "none" }}
      ></video>

      <a-scene
        arjs="sourceType: webcam; debugUIEnabled: false"
        xr-mode-ui="enabled: false"
        
      >
        <a-marker id="marker" type="pattern" url="/markers/t.patt">
          
          <a-video
          id="model"
            src="#myVideo"
            width="1.6"
            height="1"
            position="0 0 0"
            rotation="-90 0 0"
            animation="property: scale; from: 0 0 0; to: 1.5 1.5 1.5; dur: 2000; loop: false; easing: linear; autoplay: false; startEvents: startScale"
          ></a-video>
          
        </a-marker>

        <a-entity camera="fov: 60; near: 0.1; far: 10000" look-controls="enabled: false"></a-entity>
      </a-scene>
    </>
    
  );
}
