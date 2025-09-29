"use client"


export default function Video() {
  

  return (
    
      <a-scene arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;" >
        <a-marker preset="hiro">
            <a-video 
                src="/videos/video.mp4" 
                width="1" 
                height="0.6" 
                position="0 0.3 0"
                autoplay
                loop
                muted>
            </a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}