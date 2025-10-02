"use client"
import styled from "styled-components";

const CustomDiv = styled.div`
  position: absolute;
  place-self: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999 !important;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0,0.7);
`

const ScannerDiv = styled.div`
    width: 500px;
    height: 500px;
    display: grid;
    place-items: center;
    position: relative;
    bottom: 50px;
`
const ScannerImage = styled.img`
    width: 300px;
    place-self: center;
    @media (max-width: 500px){
        width: 65%;
    }
`
const ScannerText = styled.h1`
    color: rgba(255,255,255,0.5);
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    max-width: 90%;
`

export default function MarkerScanner({text}){
    return(
        <CustomDiv>
            <ScannerDiv>
                <ScannerText>{text}</ScannerText>
                <ScannerImage src="/images/marker_scanner.webp" alt="scanner"/>
            </ScannerDiv>
        </CustomDiv>
        
    )
}