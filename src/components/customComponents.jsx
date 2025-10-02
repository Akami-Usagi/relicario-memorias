import styled from "styled-components"

export const MainDiv = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
` 

export const LogoImage = styled.img`
    width: 300px;
`
export const DefaultButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #4ea6ce;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    color: white;
    border: none;
    box-shadow: 5px 5px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    
`
export const AreaTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -50px;
`
export const AreaText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
    margin-top: -30px;
    margin-bottom: 50px;
    width: 400px;
    text-align: center;

`
export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`