import React, {useContext, useState} from 'react'
import GlobalContext from '../../global/GlobalContext'
import {useNavigate} from 'react-router-dom'
import { ContainerCard, H2, H3, ImgType } from './CardStyle'
import Poison from '../../assets/poison.png'

const Card = () => {
    const navigate = useNavigate()
    const {pokemonList, pokemonDetail} = useContext(GlobalContext)


    const showPokemons = pokemonDetail?.map((pokemon) => {
        return(
          <ContainerCard key={pokemon.name}>
            <H3> #{pokemon.id}</H3>
            <H2>{pokemon.name}</H2>
            <p>{pokemon.types&&pokemon.types.map((type) => {
                return(
                    <div>
                     <ImgType src= {Poison}/>
                         <p>{type.type.name}</p>
                    </div>
                )
            })}
            </p>
            <img src={pokemon.sprites.front_default} />
            <H3>Detalhes</H3>
          </ContainerCard>
         
        )
      })

  return (
    <div>{showPokemons}</div>
  )
}

export default Card
