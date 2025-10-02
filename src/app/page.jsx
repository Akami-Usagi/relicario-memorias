"use client"
import { MainDiv, LogoImage, AreaTitle, AreaText, DefaultButton } from "@/components/customComponents";

export default function Home() {
  return (
    <MainDiv>
      <LogoImage src="/images/main_logo.webp" alt="Hacienda el Paraiso"/>
      <AreaTitle>Relicario de Memorias</AreaTitle>
      <AreaText>
      <strong>Relicario de Memorias</strong> es una experiencia inmersiva que permite recorrer la historia de la Hacienda El Paraíso a través de los relatos de sus protagonistas. Cada espacio y cada recuerdo se revelan de manera única, ofreciendo al visitante la posibilidad de descubrir cómo la vida cotidiana, las tradiciones y los acontecimientos históricos dieron forma a este lugar emblemático del Valle del Cauca.
      <br/><br/>
      La aplicación invita a escanear marcadores ubicados en diferentes puntos de la hacienda para activar contenidos audiovisuales exclusivos que cobran vida ante los ojos del usuario. Estos recuerdos se presentan en primera persona, como si fueran narrados directamente por quienes hicieron parte de la historia de la hacienda, creando un puente entre pasado y presente.
      <br/><br/>
      Además, la experiencia se adapta a cada visitante con dos versiones, en español e inglés, para acercar este legado cultural tanto a la comunidad local como a los visitantes internacionales. De esta manera, Relicario de Memorias se convierte en una ventana interactiva al patrimonio, un espacio donde la memoria se preserva y se comparte de forma viva, sensible y cercana.

      </AreaText>
      <a href="comedor/"><DefaultButton>Iniciar Demo Comedor</DefaultButton></a>
    </MainDiv>
  );
}
