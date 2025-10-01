"use client";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marca que ya estamos en el cliente

    // Registrar componente de suavizado
    AFRAME.registerComponent("smooth", {
      schema: {
        positionFactor: { type: "number", default: 0.2 },
        rotationFactor: { type: "number", default: 0.2 },
      },
      init: function () {
        this.lastPosition = new THREE.Vector3();
        this.lastRotation = new THREE.Euler();
      },
      tick: function () {
        const el = this.el;
        const obj = el.object3D;

        if (!obj.visible) return;

        // Suavizar posición
        obj.position.lerp(this.lastPosition, this.data.positionFactor);
        this.lastPosition.copy(obj.position);

        // Suavizar rotación
        obj.rotation.x += (this.lastRotation.x - obj.rotation.x) * this.data.rotationFactor;
        obj.rotation.y += (this.lastRotation.y - obj.rotation.y) * this.data.rotationFactor;
        obj.rotation.z += (this.lastRotation.z - obj.rotation.z) * this.data.rotationFactor;
        this.lastRotation.copy(obj.rotation);
      },
    });
  }, []);

  if (!isClient) return null; // No renderizar en SSR

  return (
    <a-scene arjs xr-mode-ui="enabled: false" isMobile>
      <a-marker type="pattern" url="/markers/penta.patt">
        <a-entity
          position="0 0 0"
          scale="5 5 5"
          rotation="-90 0 0"
          gltf-model="/models/cat.glb"
          smooth // Aplica el suavizado
        ></a-entity>
      </a-marker>
      <a-entity camera="fov: 60; near: 0.1; far: 10000" look-controls="enabled: false"></a-entity>
    </a-scene>
  );
}

