"use client";

export default function Intro() {
  return (
    <a-scene 
      vr-mode-ui="enabled: false"
      embedded
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;"
    >
      {/* 📍 Marcador Hiro */}
      <a-marker preset="hiro">
        {/* Modelo 3D */}
        <a-entity
          gltf-model="/models/cat.glb"
          scale="1 1 1"
          position="0 0 1"
          rotation="-90 0 0"
        ></a-entity>
      </a-marker>

      {/* 🎥 Cámara */}
      <a-entity camera></a-entity>
    </a-scene>
  );
}
