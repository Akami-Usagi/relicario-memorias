"use client"
import { MainDiv, LogoImage, AreaTitle, AreaText, DefaultButton } from "@/components/customComponents";

export default function Instrucciones(){
    return(
        <MainDiv>
            <LogoImage src="/images/main_logo.webp" alt="Hacienda el Paraiso"/>
            <AreaTitle>Instrucciones</AreaTitle>
            <AreaText>
                <strong>Instrucciones de uso — Relicario de Memorias</strong><br/><br/>
                1. <strong>Descarga del marcador:</strong> Descarga el archivo PDF que contiene el marcador oficial desde el enlace proporcionado en la demo.<br/><br/>
                <a href="documents/patron.pdf" download={"marcador"}><DefaultButton>Descargar Patron</DefaultButton></a><br/><br/>
                2. <strong>Impresión del marcador:</strong> Imprime el marcador en una hoja blanca, asegurándote de que el recuadro y los bordes queden completos y sin recortes para garantizar una correcta detección.<br/><br/>
                <LogoImage src="/images/patron.webp"/><br/><br/>
                3. <strong>Acceso a la aplicación:</strong> Abre la aplicación en tu dispositivo con cámara (móvil o computadora) usando un navegador actualizado y concede permiso para acceder a la cámara cuando se solicite.<br/><br/>
                4. <strong>Escaneo del marcador:</strong> Coloca el marcador impreso frente a la cámara; cuando la aplicación lo detecte se activarán los contenidos audiovisuales asociados (videos y relatos).<br/><br/>
                <LogoImage src="/images/ss.webp"/><br/><br/>
                5. <strong>Recomendaciones:</strong> Mantén buena iluminación y evita reflejos sobre el marcador; si la detección falla, acerca o aleja ligeramente la cámara hasta obtener el reconocimiento correcto.
            </AreaText>
            <a href="comedor/"><DefaultButton>Iniciar Demo</DefaultButton></a>
        </MainDiv>
    )
}