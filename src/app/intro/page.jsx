"use client";

import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    // Esperar a que la escena cargue
    const scene = document.querySelector("a-scene");

    if (scene) {
      // Escuchar cuando la cámara GPS obtiene coordenadas
      window.addEventListener(
        "gps-camera-update-position",
        (e) => {
          const ghost = document.getElementById("ghost");
          if (ghost) {
            const lat = e.detail.position.latitude;
            const lon = e.detail.position.longitude;

            // 🔹 Offset en metros (ejemplo: 2m al norte)
            const offsetMeters = 2;

            // Convertir metros en grados (aprox)
            const latOffset = offsetMeters / 111111; // 1° lat ~ 111 km
            const lonOffset =
              offsetMeters /
              (111111 * Math.cos((lat * Math.PI) / 180));

            // Poner el fantasma delante tuyo con offset
            ghost.setAttribute(
              "gps-entity-place",
              `latitude: ${lat + latOffset}; longitude: ${lon};`
            );

            ghost.setAttribute("visible", "true");
          }
        },
        { once: true } // solo la primera vez
      );
    }
  }, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: true;"
    >
      {/* Cámara GPS */}
      <a-entity camera gps-camera rotation-reader></a-entity>

      {/* Fantasma oculto hasta que calculemos coordenadas */}
      <a-entity
        id="ghost"
        gltf-model="/models/ghost.glb"
        scale="5 5 5"
        visible="false"
      ></a-entity>
    </a-scene>
  );
}
