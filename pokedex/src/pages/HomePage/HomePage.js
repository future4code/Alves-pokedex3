import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { goToHomeNext, goToHomeBack } from '../../routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { CardsContainer, ContainerPagination, HomeContainer, Titles } from './HomePageStyled'

const HomePage = () => {

  const { getPokeList, pokemonList, getPokemonsDetail } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getPokemonsDetail()
  }, [pokemonList])

  useEffect(() => {
    getPokeList(params.number)
  }, [navigate])

  return (
    <HomeContainer>
      <Titles>Todos Pokémons</Titles>
      <Card />
      <ContainerPagination>
        <a onClick={() => goToHomeBack(navigate, +params.number - +30)}>&lt;</a>
        <a onClick={() => goToHomeNext(navigate, 0)}>1</a>
        <a onClick={() => goToHomeNext(navigate, 30)}>2</a>
        <a onClick={() => goToHomeNext(navigate, 60)}>3</a>
        <a onClick={() => goToHomeNext(navigate, 90)}>4</a>
        <a onClick={() => goToHomeNext(navigate, 120)}>5</a>
        <a onClick={() => goToHomeNext(navigate, 150)}>6</a>
        <a onClick={() => goToHomeNext(navigate, 180)}>7</a>
        <a onClick={() => goToHomeNext(navigate, +params.number + +30)}>&gt;</a>
      </ContainerPagination>
    </HomeContainer>

  )
}
export default HomePage