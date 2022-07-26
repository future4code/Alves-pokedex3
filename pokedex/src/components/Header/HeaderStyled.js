import styled from "styled-components";

export const ContainerHeader = styled.section`
    width: 100vw;
    height: 10rem;
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
        height: 5rem;
    }
`

export const Nav = styled.nav`
    padding: 0.5rem;
    flex-grow: 1;
    align-items: center;
`
export const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li:nth-of-type(3){
        margin-left:auto;
        
    }
    li:nth-of-type(2){
        margin-left:auto;
    }
`

export const ImgLogo = styled.img`
    width: 19.188rem;
    height: 7.06rem;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 8rem;
        height: 4rem;
    }

`
export const ButtonPokedex = styled.button `
    font-family: 'Poppins', sans-serif;
    background-color: #33A4F5;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 24px;
    line-height: 36px;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 7rem;
        height: 3rem;
        font-size: 18px;
    }
`
export const ButtonBack = styled.button`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-decoration-line: underline;
    color: #1A1A1A;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const ButtonDel = styled.button`
    background: #FF6262;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 14.125rem;
    height: 3.563rem;
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    border: none;
    color: #FFFFFF;
`


