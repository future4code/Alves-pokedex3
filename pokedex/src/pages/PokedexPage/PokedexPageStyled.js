import styled from "styled-components";

export const PokedexContainer = styled.div`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 0.5rem;
    @media (max-width: 480px) {
        height: 100%;
    }
`

export const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Titles = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
`

export const ButtonDelete = styled.button`
    width: 9.125rem;
    height: 2.375rem;
    background-color: #FF6262;
    border-radius: 8px;
    padding: 0.25rem 0.625rem;
    border: none;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    @media (max-width: 480px) {
        width: 5rem;
        height: 2rem;
        font-size: 14px;
    }
`