"use client"
import styled from "styled-components";

const MainDiv = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
` 

const LogoImage = styled.img`
    width: 300px;
`
const DefaultButton = styled.button`
    width: 150px;
    height: 80px;
    background-color: #4ea6ce;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    color: white;
    border: none;
    box-shadow: 5px 5px 3px rgba(0,0,0,0.2);
    
`
const AreaTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -50px;
`
const AreaText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    margin-top: -30px;
    margin-bottom: 50px;
`

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