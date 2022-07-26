import styled from "styled-components";
import Background from '../../assets/background.png'

export const ContainerCard = styled.section`
    width: 27rem;
    height: 13rem;
    background: ${props => props.typePokemon === "grass" && "#729F92;"};
    background: ${props => props.typePokemon === "fire" && "#EAAB7D;"};
    background: ${props => props.typePokemon === "water" && "#71C3FF;"};
    background: ${props => props.typePokemon === "bug" && "#76A866"};
    background: ${props => props.typePokemon === "normal" && "#BF9762;"};
    background: ${props => props.typePokemon === "poison" && "#D1A3D0"};
    background: ${props => props.typePokemon === "electric" && "#FFC95E"};
    background: ${props => props.typePokemon === "ground" && "#B6866F"};
    background: ${props => props.typePokemon === "fairy" && "#BD7886"};
    background: ${props => props.typePokemon === "fighting" && "#B0385A"};
    background: ${props => props.typePokemon === "psychic" && "#E05E65"};
    background: ${props => props.typePokemon === "rock" && "#9E8F65"};
    background: ${props => props.typePokemon === "ghost" && "#7084CA"};
    background: ${props => props.typePokemon === "ice" && "#48A497"};
    background: ${props => props.typePokemon === "dragon" && "#004170;"};
    background: ${props => props.typePokemon === "steel" && "#B7B9D0"};
    background: ${props => props.typePokemon === "dark" && "#55433C"};
    background: ${props => props.typePokemon === "flying" && "#A891EC"};
    background-image: url(${Background});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 7.813rem;
    border-radius: 12px;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    display: flex;
    margin-top: 3.313rem;
    margin-right:0.5rem;
    @media (max-width: 480px) {
        width: 20rem;
        height: 13rem;
    }
`
export const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`
export const H2 = styled.h2`
    font-size: 32px;
    margin: 0;
    color: #FFFFFF;
    @media (max-width: 480px) {
        font-size: 24px;
    }
`
export const H3 = styled.h3`
    font-size: 16px;
    margin: 0;
    color: #FFFFFF;
`
export const H3Details = styled.h3`
    font-size: 16px;
    margin: 0;
    cursor: pointer;
    text-decoration-line: underline;
    color: #FFFFFF;
`

export const ImgCard = styled.img`
    width: 12.063rem;
    height: 12.063rem;
    left: 17.813rem;
    top: 34.625rem;
    margin-bottom: 1.56rem;
    @media (max-width: 480px) {
        width: 7rem;
        height: 7rem;
    }
`

export const ContainerFirstColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 11.565rem;
  margin-bottom: 1.56rem;
  margin-left: 1.56rem;
`

export const ConatinerSecondColumn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1.56rem;
    margin-right: 1.56rem ;
`

export const ButtonCaptur = styled.button`
    border-radius: 8px;
    background-color: #FFFFFF;
    color: #0F0F0F;
    width: 9.125rem;
    height: 2.375rem;
    border: none;
    padding: 0.25rem 0.625rem ;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    margin-left: 1.56rem;
    align-self: center ;
    :hover{
        background-color: #FF6262;
        color: #FFFFFF;
    }
    @media (max-width: 480px) {
        width: 5rem;
        height: 2rem;
        font-size: 14px;
    }
`

export const ImgType = styled.img`
    width: 6.25rem;
    height: 1.938rem;
    margin-right: 0.02rem;
    @media (max-width: 480px) {
        width: 5rem;
        height: 1.938rem;
    }
`
export const ContainerTypes = styled.section`
    display: flex;
`