"use client"
import { MainDiv, LogoImage, AreaTitle, AreaText, DefaultButton, ButtonsDiv } from "@/components/customComponents"



export default function Comedor(){

    return(
        <MainDiv>
            <LogoImage src="/images/main_logo.webp" alt="Relicario de Memorias"/>
            <AreaTitle>El Comedor</AreaTitle>
            <AreaText>Selecciona el idioma para revivir el recuerdo</AreaText>
            <ButtonsDiv>
                <a href="comedor/spanish"><DefaultButton>Español</DefaultButton></a>
                <a href="comedor/english"><DefaultButton>English</DefaultButton></a>
            </ButtonsDiv>
            
        </MainDiv>
    )
}