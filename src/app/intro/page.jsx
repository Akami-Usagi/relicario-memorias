"use client"


export default function Intro() {
  

  return (
    
      <a-scene arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;" >
        <a-marker preset="hiro">
          <a-entity 
                gltf-model="/models/hornet/source/HORNET.glb" 
                scale="1 1 1" 
                position="0 0 0" 
                rotation="0 0 0">
            </a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}