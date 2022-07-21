import React, { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'
import { ButtonCaptur, ConatinerSecondColumn, ContainerCard, ContainerFirstColumn, ContainerTypes, H2, H3, ImgCard, } from './CardStyle'

import DefineTypes from '../DefineTypes'
import { CardsContainer } from '../../pages/HomePage/HomePageStyled'

const Card = () => {
    const navigate = useNavigate()
    const { pokemonList, setPokemonList, pokemonDetail, setPokemonDetail, pokedex, setPokedex} = useContext(GlobalContext)
    

    const capturPokemon = (newPokemon, id) => {
        setPokemonDetail(pokemonDetail.filter(pokemon => pokemon.name !== newPokemon.name))
        const newPokedex = [...pokedex, newPokemon]
        setPokedex(newPokedex)
        localStorage.setItem(`key ${id}`, id)
        localStorage.setItem("pokedex", JSON.stringify(newPokedex))
    }

    const showPokemons = pokemonDetail?.filter((pokemon) => {
        const id = localStorage.getItem(`key ${pokemon.id}`)
        if(id === `${pokemon.id}`) {
            return false
        } else {
            return true
        }
    }).map((pokemon) => {
        return (
            <ContainerCard typePokemon = {pokemon.types[0].type.name}  key={pokemon.name}>
                <ContainerFirstColumn>
                    <H3> #{pokemon.id}</H3>
                    <H2>{pokemon.name}</H2>
                    <ContainerTypes>
                        {pokemon.types && pokemon.types.map((type) => {
                            let pokemonType = type.type.name
                            return (
                                <DefineTypes pokemonType={pokemonType} />
                            )
                        })}
                    </ContainerTypes>
                    <H3 onClick={() => goToDetail(navigate, pokemon.name)}>Detalhes</H3>
                </ContainerFirstColumn>
                <ConatinerSecondColumn>
                        <ImgCard src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
                    <ButtonCaptur onClick={() => {capturPokemon(pokemon, pokemon.id)}} >Capturar!</ButtonCaptur>
                </ConatinerSecondColumn>
            </ContainerCard>
        )
    }
    )

    return (
        <CardsContainer>{showPokemons}</CardsContainer>
    )
}

export default Card
