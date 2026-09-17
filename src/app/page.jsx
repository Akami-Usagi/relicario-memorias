"use client"
import { MainDiv, LogoImage, AreaText, DefaultButton, ButtonsDiv } from "@/components/customComponents";

export default function Home() {
  return (
    <MainDiv>
      <LogoImage src="/images/main_logo.png" alt="Relicario de Memorias"/>
      
      <AreaText>
      <strong>Relicario de Memorias</strong> es una experiencia inmersiva que permite recorrer la historia y el patrimonio de Guadalajara de Buga a través de los relatos de sus protagonistas. Cada lugar, cada espacio y cada recuerdo se convierten en una oportunidad para descubrir las historias de las personas y acontecimientos que han dejado una huella en la identidad de la ciudad.
      <br/><br/>
      La aplicación invita a escanear códigos QR y marcadores ubicados en diferentes sitios históricos y de interés patrimonial para activar experiencias de realidad aumentada que cobran vida ante los ojos del usuario. A través de representaciones virtuales, los personajes relacionados con cada lugar pueden contar su historia en primera persona, revelando aspectos de su vida, sus experiencias y aquellos relatos que forman parte de la memoria de Guadalajara de Buga.
      <br/><br/>
      Además, la experiencia se adapta a cada visitante con dos versiones, en español e inglés, para acercar este legado cultural tanto a la comunidad local como a los visitantes internacionales. De esta manera, Relicario de Memorias se convierte en una ventana interactiva al patrimonio, un espacio donde la memoria se preserva y se comparte de forma viva, sensible y cercana.

      </AreaText>
      <ButtonsDiv>
          <a href="instrucciones/"><DefaultButton>Instrucciones</DefaultButton></a>
          <a href="comedor/"><DefaultButton>Iniciar Demo</DefaultButton></a>
      </ButtonsDiv>
      
    </MainDiv>
  );
}
