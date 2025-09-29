"use client"

export default function Intro() {
  return (
    <a-scene 
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true;"
    >

      {/* 📍 Modelo en coordenadas GPS */}
      <a-entity
        gltf-model="/models/hornet/source/HORNET.glb"
        gps-entity-place="latitude: 3.89976041136871; longitude:  -76.30010948442047;"  
        scale="5 5 5"
        rotation="0 0 0"
      ></a-entity>

      {/* 🎥 Cámara con soporte GPS */}
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  )
}