import React, { useContext, useState } from 'react'
import GlobalContext from '../../global/GlobalContext'
// import { goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { CardsContainer, HomeContainer, Titles } from './HomePageStyled'


const HomePage = () => {


  return (
    <HomeContainer>
      <Titles>Todos Pokémons</Titles>
        <Card />
    </HomeContainer>
  )
}

export default HomePage