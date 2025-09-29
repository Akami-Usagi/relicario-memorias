"use client"


export default function Video() {
  

  return (
    
      <a-scene arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;" >
        <a-marker preset="hiro">
            <a-video 
                src="/videos/video.mp4" 
                width="2" 
                height="2" 
                position="0 0.3 0"
                muted>
            </a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}