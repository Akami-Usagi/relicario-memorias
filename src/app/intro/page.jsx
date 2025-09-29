"use client"

export default function Intro() {
  return (
    <a-scene 
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true;"
    >

      {/* 📍 Modelo en coordenadas GPS */}
      <a-entity camera gps-camera rotation-reader>
        <a-entity
          gltf-model="/models/hornet/source/HORNET.glb"
          position="0 0 -10"
          scale="5 5 5"
        ></a-entity>
      </a-entity>

      {/* 🎥 Cámara con soporte GPS */}
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  )
}