import styled from "styled-components";

export const HomeContainer = styled.section`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 100%;
    }
`
export const Titles = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
`
export const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const ContainerPagination = styled.section`
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 480px) {
        align-self: center;
    }
    a{
    padding: 1rem;
    border: 1px solid gray;
    margin: 0.05rem;
    @media (max-width: 480px) {
        padding: 0.2rem;
    }
    }
    a:hover {
        background-color: #4CAF50;
        border-radius: 5px;
        color: white;
    }
    @media (max-width: 480px) {
        width: 50%;
        height: 3rem;
    }
`

