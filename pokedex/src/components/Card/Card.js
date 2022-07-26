import React, { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'
import { CardsContainer, ButtonCaptur, ConatinerSecondColumn, ContainerCard, ContainerFirstColumn, ContainerTypes, H2, H3, ImgCard, H3Details, } from './CardStyle'
import DefineTypes from '../DefineTypes'

const Card = () => {

    const navigate = useNavigate()
    const { pokemonDetail, capturPokemon } = useContext(GlobalContext)

    const showPokemons = pokemonDetail?.filter((pokemon) => {
        const id = localStorage.getItem(`key ${pokemon.id}`)
        if (id === `${pokemon.id}`) {
            return false
        } else {
            return true
        }
    }).map((pokemon) => {
        return (
            <ContainerCard typePokemon={pokemon.types[0].type.name} key={pokemon.name}>
                <ContainerFirstColumn>
                    <H3> #{pokemon.id}</H3>
                    <H2>{pokemon.name}</H2>
                    <ContainerTypes>
                        {pokemon.types && pokemon.types.map((type, index) => {
                            let pokemonType = type.type.name
                            return (
                                <DefineTypes key={index} pokemonType={pokemonType} />
                            )
                        })}
                    </ContainerTypes>
                    <H3Details onClick={() => goToDetail(navigate, pokemon.name)}>Detalhes</H3Details>
                </ContainerFirstColumn>
                <ConatinerSecondColumn>
                    <ImgCard src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
                    <ButtonCaptur onClick={() => { capturPokemon(pokemon, pokemon.id) }} >Capturar!</ButtonCaptur>
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
