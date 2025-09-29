"use client"
import { useEffect } from "react";

export default function ARPage() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://aframe.io/releases/1.5.0/aframe.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    
      <a-scene arjs >
        <a-marker preset="hiro">
          <a-box color="red" position="0 0.5 0"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    
  );
}