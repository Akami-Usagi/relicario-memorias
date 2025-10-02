"use client"
import { MainDiv, LogoImage, AreaTitle, AreaText, DefaultButton } from "@/components/customComponents"



export default function Comedor(){

    return(
        <MainDiv>
            <LogoImage src="/images/main_logo.webp" alt="Hacienda El Paraiso"/>
            <AreaTitle>El Comedor</AreaTitle>
            <AreaText>Selecciona el idioma para revivir el recuerdo</AreaText>
            <a href="comedor/spanish"><DefaultButton>Español</DefaultButton></a>
            <a href="comedor/english"><DefaultButton>English</DefaultButton></a>
        </MainDiv>
    )
}