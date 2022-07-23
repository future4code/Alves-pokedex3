import styled from "styled-components";
import Background from '../../assets/background.png'


export const ContainerDetail = styled.section`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
`
export const Titles = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    align-self: flex-start;
    margin-left: 1.563rem;
`
export const ContainerPokemon = styled.section`
    display: flex;
    width: calc(100% - 1.563rem);
    height: 41rem;
    border-radius: 12px;
    margin: 1.563rem;
    justify-content: space-around;
    background-color: ${props => props.typePokemon === "grass" && "#729F92;"};
    background-color: ${props => props.typePokemon === "fire" && "#EAAB7D;"};
    background-color: ${props => props.typePokemon === "water" && "#71C3FF;"};
    background-color: ${props => props.typePokemon === "bug" && "#76A866"};
    background-color: ${props => props.typePokemon === "normal" && "#BF9762;"};
    background-color: ${props => props.typePokemon === "poison" && "#D1A3D0"};
    background-color: ${props => props.typePokemon === "electric" && "#FFC95E"};
    background-color: ${props => props.typePokemon === "ground" && "#B6866F"};
    background-color: ${props => props.typePokemon === "fairy" && "#BD7886"};
    background-color: ${props => props.typePokemon === "fighting" && "#B0385A"};
    background-color: ${props => props.typePokemon === "psychic" && "#E05E65"};
    background-color: ${props => props.typePokemon === "rock" && "#9E8F65"};
    background-color: ${props => props.typePokemon === "ghost" && "#7084CA"};
    background-color: ${props => props.typePokemon === "ice" && "#48A497"};
    background-color: ${props => props.typePokemon === "dragon" && "#004170;"};
    background-color: ${props => props.typePokemon === "steel" && "#B7B9D0"};
    background-color: ${props => props.typePokemon === "dark" && "#55433C"};
    background-color: ${props => props.typePokemon === "flying" && "#A891EC"};
    background-image: url(${Background});
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: 58.5rem;
`

export const BigContainerSmall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`

export const ContainerImgSmall = styled.section`
    width: 17.625rem;
    height: 17.625rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgSmall = styled.img`
    width: 8rem;
    height: 8rem;
`

export const ContainerStats = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    width: 21.438rem;
    height: 38.313rem;
    background-color: #FFFFFF;
    border-radius: 8px;
`

export const ContainerData = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const H2 = styled.h2`
    font-size: 48px;
    margin: 0;
    color: #FFFFFF;
`
export const H3 = styled.h3`
    font-size: 16px;
    margin: 0;
    color: #FFFFFF;
`

export const ContainerInfos = styled.section`
    display: flex;
    flex-direction: column;
`

export const ContainerMoves = styled.section`
    width: 18.25rem;
    height: 28.313rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    p{
        font-size: 24px;
        font-weight: 800;
    }
`

export const Moves = styled.section`
    border: 1px dashed rgba(0, 0, 0, 0.14);
    padding: 0.625rem;
    border-radius: 12px;
    background-color: #ECECEC;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-bottom: 1.25rem;
    /* display: inline-block; */

`
export const ContainerImgBig = styled.section`
    height: 48rem;
    align-self: flex-end;
    width: 16.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ImgBig = styled.img`
    width: 16.875rem;
    height: 16.875rem;
    
`
export const ButtonCaptur = styled.button`
    border-radius: 8px;
    background-color: #FFFFFF;
    color: #0F0F0F;
    width: 10rem;
    height: 3rem;
    border: none;
    padding: 0.25rem 0.625rem ;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    margin-top: 3rem;
    :hover {
        background-color: #FF6262;
        color: #FFFFFF;
    }

`
export const ButtonDelete = styled.button`
    width: 10rem;
    height: 3rem;
    background-color: #FF6262;
    border-radius: 8px;
    padding: 0.25rem 0.625rem;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 3rem;
    cursor: pointer;
    :hover {
        background-color: #FFFFFF;
        color: #0F0F0F;
    }

`
