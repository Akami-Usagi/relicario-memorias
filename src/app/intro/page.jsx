"use client"

export default function Intro() {
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: true;"
    >
      
      <a-entity
        gltf-model="/models/hornet/source/HORNET.glb"
        gps-offset="latitude: 0; longitude: 0;"
        position="0 0 -10"
        scale="5 5 5"
      ></a-entity>

      
      <a-entity camera gps-camera rotation-reader></a-entity>
    </a-scene>
  )
}