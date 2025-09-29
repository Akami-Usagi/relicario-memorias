"use client"
import { useEffect, useState } from "react";

export default function Intro() {
  const [coords, setCoords] = useState(null); // objeto {lat, lon}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      });
    });
  }, []);

  return (
    <a-scene 
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: true;"
    >
      {/* 🎥 Cámara con soporte GPS */}
      <a-camera gps-camera rotation-reader></a-camera>

      {/* 📍 Renderizar modelo solo cuando hay coordenadas */}
      {coords && (
        <a-entity
          gltf-model="/models/hornet/source/HORNET.glb"
          gps-entity-place={`latitude: ${coords.lat}; longitude: ${coords.lon}`}
          scale="5 5 5"
          rotation="0 0 0"
          position="0 1.5 0"  // altura sobre el suelo
        ></a-entity>
      )}
    </a-scene>
  );
}
