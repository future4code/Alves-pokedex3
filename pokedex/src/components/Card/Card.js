import React, { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { ContainerCard, ContainerTypes, H2, H3, ImgType } from './CardStyle'

import DefineTypes from '../DefineTypes'

const Card = () => {
    const navigate = useNavigate()
    const { pokemonList, pokemonDetail } = useContext(GlobalContext)


    const showPokemons = pokemonDetail?.map((pokemon) => {
        return (
            <ContainerCard key={pokemon.name}>
                <H3> #{pokemon.id}</H3>
                <H2>{pokemon.name}</H2>
                {pokemon.types && pokemon.types.map((type) => {
                    let pokemonType = type.type.name
                    return (
                        <ContainerTypes>
                           <DefineTypes pokemonType = {pokemonType} />
                        </ContainerTypes>
                    )
                })}
                <H3>Detalhes</H3>

            </ContainerCard>

        )
    }
    )

    return (
        <div>{showPokemons}</div>
    )
}

export default Card
