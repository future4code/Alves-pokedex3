import styled from "styled-components";
import Background from '../../assets/background.png'

export const ContainerCard = styled.section`
    width: 27.5rem;
    height: 13.125rem;
    background-image: url(${Background});
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #729F92;
    border-radius: 12px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
`
export const H2 = styled.h2`
    font-size: 32px;
`
export const H3 = styled.h3`
    font-size: 16px;
`

export const ImgType = styled.img`
    width: 6.25rem;
    height: 1.938rem;
    margin-right: 02.rem;
    display: inline;
    
`
export const ContainerTypes = styled.section`
    display: inline-block;
    border: 1px solid red;
`