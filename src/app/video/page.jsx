"use client";
import { useEffect, useState } from 'react';

export default function Video() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marca que ya estamos en el cliente
  }, []);

  if (!isClient) return null; // No renderizar en SSR

  return (
    <a-scene 
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;" 
        vr-mode-ui="enabled: false">
      <a-marker preset="hiro">
        <a-video 
                src="/videos/video.mp4" 
                width="2" 
                height="2" 
                position="0 0.3 0"
                rotation="-90 0 0"
                muted>
            </a-video>
      </a-marker>
      <a-entity camera position="0 0 0"></a-entity>
    </a-scene>
  );
}