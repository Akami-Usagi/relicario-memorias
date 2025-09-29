"use client"


export default function ARPage() {
  

  return (
    
      <a-scene arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;" >
        <a-marker preset="hiro">
          <a-entity 
                gltf-model="/models/hornet/source/HORNET.glb" 
                scale="0.5 0.5 0.5" 
                position="0 0 0" 
                rotation="0 0 0">
            </a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}