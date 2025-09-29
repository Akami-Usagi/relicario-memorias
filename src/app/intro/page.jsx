"use client"


export default function ARPage() {
  

  return (
    
      <a-scene arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;" >
        <a-marker preset="hiro">
          <a-box color="red" position="0 0.5 0"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}