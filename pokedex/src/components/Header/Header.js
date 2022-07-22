import React, {useContext} from 'react'
import Logo from '../../assets/logo.png'
import { ButtonBack, ButtonDel, ButtonPokedex, ContainerHeader, ImgLogo, Nav, NavList } from './HeaderStyled'
import { goBack, goToPokedex, goToIndex } from '../../routes/coordinator'
import { useNavigate} from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext'

const Header = () => {
const navigate = useNavigate()
const { removePokemon, capturPokemon, pokemonDetail } = useContext(GlobalContext)


    const defineButtonRight = () => {

        if ((window.location.pathname === "/") || (window.location.pathname.includes("/1")) || (window.location.pathname.includes("/3")) || (window.location.pathname.includes("/6")) || (window.location.pathname.includes("/9")) || (window.location.pathname.includes("/0")) )  {
            return (
                <ButtonPokedex onClick={() => goToPokedex(navigate)}> Pokedéx </ButtonPokedex>
            )
        } else if (window.location.pathname.includes("/pokedex/detail")) {
            return (
                <ButtonDel onClick={() => {removePokemon(pokemonDetail, pokemonDetail.id)}} >Excluir Pokemon</ButtonDel>
            )
        } else if (window.location.pathname.includes("/detail")) {
            return(
                <button>Capturar</button>
            )
        }
    }

    const defineButtonLeft = () => {
        if (window.location.pathname === "/pokedex") {
            return (
                <ButtonBack onClick={() => goBack(navigate)}> ❬  Voltar </ButtonBack>
            )
        } else if (window.location.pathname.includes("/detail")) {
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
                    <li onClick = {() => goToIndex(navigate) }><ImgLogo src={Logo} alt='Logo Pokemon' /></li>
                    <li>{defineButtonRight()}</li>
                </NavList>
            </Nav>

        </ContainerHeader>
    )
}

export default Header