"use client";

import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    let handler;

    const scene = document.querySelector("a-scene");
    const ghost = document.getElementById("ghost");
    const gpsCamSelector = "#gpsCamera";

    function toRad(v) { return v * Math.PI / 180; }

    // Convierte un offset en metros y heading a lat/lon
    function offsetLatLon(lat, lon, forwardMeters, headingDeg) {
      const headingRad = toRad(headingDeg || 0);
      const dNorth = forwardMeters * Math.cos(headingRad);
      const dEast = forwardMeters * Math.sin(headingRad);

      const R = 6378137; // radio de la Tierra en metros
      const latOffset = (dNorth / R) * (180 / Math.PI);
      const lonOffset = (dEast / (R * Math.cos(toRad(lat)))) * (180 / Math.PI);

      return { lat: lat + latOffset, lon: lon + lonOffset };
    }

    // Intentar obtener la rotación Y de la cámara (yaw)
    function getHeadingFromCamera() {
      const cam = document.querySelector(gpsCamSelector);
      if (!cam) return 0; // fallback
      const rot = cam.getAttribute && cam.getAttribute("rotation");
      if (rot && typeof rot.y === "number") return rot.y;
      return 0;
    }

    handler = function (e) {
      try {
        // Proteger acceso a e.detail.position
        const pos = e && e.detail && e.detail.position;
        if (!pos || typeof pos.latitude !== "number" || typeof pos.longitude !== "number") {
          console.warn("[gps] coordenadas aún no disponibles");
          return;
        }

        const lat = pos.latitude;
        const lon = pos.longitude;
        console.log("[gps] position event", lat, lon);

        if (!ghost) {
          console.error("[gps] ghost entity not found in DOM");
          return;
        }

        const heading = getHeadingFromCamera();
        const offsetMeters = 2; // distancia delante del usuario
        const { lat: lat2, lon: lon2 } = offsetLatLon(lat, lon, offsetMeters, heading);

        // Colocar el modelo
        ghost.setAttribute("gps-entity-place", `latitude: ${lat2}; longitude: ${lon2};`);
        ghost.setAttribute("position", "0 1.5 0"); // altura sobre el suelo
        ghost.setAttribute("scale", "1 1 1");
        ghost.setAttribute("visible", "true");

        console.log("[gps] ghost placed at:", { lat2, lon2 });

        ghost.addEventListener("model-loaded", () => {
          console.log("[gps] GLTF model-loaded event fired (ghost)");
        });

        // Solo necesitamos colocar el fantasma la primera vez
        window.removeEventListener("gps-camera-update-position", handler);
      } catch (err) {
        console.error("Error en handler gps:", err);
      }
    };

    // Espera a que la escena exista y luego agrega listener
    const waitSceneInterval = setInterval(() => {
      if (scene) {
        console.log("[gps] scene found - adding gps listener");
        window.addEventListener("gps-camera-update-position", handler);
        clearInterval(waitSceneInterval);
      }
    }, 300);

    return () => {
      window.removeEventListener("gps-camera-update-position", handler);
      clearInterval(waitSceneInterval);
    };
  }, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: true;"
    >
      {/* Cámara GPS */}
      <a-entity id="gpsCamera" camera gps-camera rotation-reader></a-entity>

      {/* Fantasma oculto hasta calcular posición */}
      <a-entity
        id="ghost"
        visible="false"
        gltf-model="/models/hornet/source/HORNET.glb" // ajusta ruta si hace falta
      ></a-entity>
    </a-scene>
  );
}
