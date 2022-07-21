import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
// import { goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { CardsContainer, HomeContainer, Titles } from './HomePageStyled'



const HomePage = () => {
  
  const { getPokeList, pokemonList, getPokemonsDetail} = useContext(GlobalContext)

  useEffect(() => {
    getPokemonsDetail()
  },[pokemonList])
  useEffect(() => {
    getPokeList()
  },[])

  return (
    <HomeContainer>
      <Titles>Todos Pokémons</Titles>
        <Card />
    </HomeContainer>
  )
}

export default HomePage