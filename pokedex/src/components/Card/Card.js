import React, { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'
import { ButtonCaptur, ConatinerSecondColumn, ContainerCard, ContainerFirstColumn, ContainerTypes, H2, H3, ImgCard, } from './CardStyle'

import DefineTypes from '../DefineTypes'
import { CardsContainer } from '../../pages/HomePage/HomePageStyled'

const Card = () => {
    const navigate = useNavigate()
    const { pokemonList, pokemonDetail,   } = useContext(GlobalContext)
    

    const showPokemons = pokemonDetail?.map((pokemon) => {
        return (
            <ContainerCard key={pokemon.name}>
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
                    <ButtonCaptur>Capturar!</ButtonCaptur>
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
