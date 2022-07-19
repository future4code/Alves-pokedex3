import React from 'react'
import Logo from '../../assets/logo.png'
import { ButtonBack, ButtonDel, ButtonPokedex, ContainerHeader, ImgLogo } from './HeaderStyled'
import { goBack, goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    const defineButton = () => {
        if (window.location.pathname === "/") {
            return (
                <ButtonPokedex onClick={() => goToPokedex(navigate)}> Pokedéx </ButtonPokedex>
            )
        } else if (window.location.pathname === "/pokedex") {
            return (
                <ButtonBack onClick={() => goBack(navigate)}> ❬  Voltar </ButtonBack>
            )
        } else if (window.location.pathname === "/detail") {
            return (
                <>
                    <ButtonBack onClick={() => goBack(navigate)}> ❬  Voltar </ButtonBack>
                    <ButtonDel>Excluir Pokemon</ButtonDel>
                </>
            )
        }
    }

    return (
        <ContainerHeader>
               <ImgLogo src={Logo} alt='Logo Pokemon' />
                {defineButton()}
        </ContainerHeader>
    )
}

export default Header