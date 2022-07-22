import styled from "styled-components";

export const ContainerDetail = styled.section`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
`
export const Titles = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
`
export const ContainerPokemon = styled.section`
    width: 86.821rem;
    height: 41.438rem;
    border: 1px red solid;
    ${props => console.log('props', props)}
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
`