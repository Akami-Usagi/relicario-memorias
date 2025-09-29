"use client"
import { useEffect, useState } from "react";

export default function Intro() {

const [lat, setLat] = useState("");
const [lon, setLon] = useState("");

useEffect(() =>{

    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLon(pos.coords.longitude);
    });

},[])

  return (
    <a-scene 
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true;"
    >

      {/* 📍 Modelo en coordenadas GPS */}
      <a-entity
        gltf-model="/models/hornet/source/HORNET.glb"
        gps-entity-place={`latitude: ${lat}; longitude: ${lon}`}
        scale="50 50 50"
        rotation="0 0 0"
      ></a-entity>

      {/* 🎥 Cámara con soporte GPS */}
      <a-camera gps-camera rotation-reader></a-camera>
    </a-scene>
  )
}