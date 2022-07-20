import React from 'react'
import Logo from '../../assets/logo.png'
import { ButtonBack, ButtonDel, ButtonPokedex, ContainerHeader, ImgLogo, Nav, NavList } from './HeaderStyled'
import { goBack, goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    const defineButtonRight = () => {
        if (window.location.pathname === "/") {
            return (
                <ButtonPokedex onClick={() => goToPokedex(navigate)}> Pokedéx </ButtonPokedex>
            )
        } else if (window.location.pathname === "/detail") {
            return (
                <ButtonDel>Excluir Pokemon</ButtonDel>
            )
        }
    }

    const defineButtonLeft = () => {
        if (window.location.pathname === "/pokedex") {
            return (
                <ButtonBack onClick={() => goBack(navigate)}> ❬  Voltar </ButtonBack>
            )
        } else if (window.location.pathname === "/detail") {
            return (
                <ButtonBack onClick={() => goBack(navigate)}> ❬  Voltar </ButtonBack>
            )
        }
    }

    return (
        <ContainerHeader>
            <Nav>
                <NavList>
                    <li>{defineButtonLeft()}</li>
                    <li><ImgLogo src={Logo} alt='Logo Pokemon' /></li>
                    <li>{defineButtonRight()}</li>
                </NavList>


            </Nav>

        </ContainerHeader>
    )
}

export default Header