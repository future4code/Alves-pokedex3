import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { goToHomeNext } from '../../routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { CardsContainer, HomeContainer, Titles } from './HomePageStyled'



const HomePage = () => {
  
  const { getPokeList, pokemonList, getPokemonsDetail} = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getPokemonsDetail()
  },[pokemonList])
  
  useEffect(() => {
    getPokeList(params.number)
  },[navigate])
  
  // useEffect(() => {
  //   getPokeList()
  // },[])

  return (
    <HomeContainer>
              
          <span onClick={() => goToHomeNext(navigate, +params.number - + 30)}>&laquo;</span>
          <span onClick={() => goToHomeNext(navigate, 1)}>1</span>
          <span onClick={() => goToHomeNext(navigate, 30)}>2</span>
          <span onClick={() => goToHomeNext(navigate, 60)}>3</span>
          <span onClick={() => goToHomeNext(navigate, 90)}>4</span>
          <span onClick={() => goToHomeNext(navigate, 120)}>5</span>
          <span onClick={() => goToHomeNext(navigate, 150)}>6</span>
          <span onClick={() => goToHomeNext(navigate, 180)}>7</span>
          <span onClick={() => goToHomeNext(navigate, +params.number - + 30)}>&laquo;</span>
      <Titles>Todos Pokémons</Titles>
        <Card />


       
    </HomeContainer>
    
  )
}

export default HomePage