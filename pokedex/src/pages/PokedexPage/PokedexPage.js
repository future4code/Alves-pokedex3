import React, { useContext } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { ConatinerSecondColumn, ContainerCard, ContainerFirstColumn, ContainerTypes, H2, H3, H3Details, ImgCard } from '../../components/Card/CardStyle'
import DefineTypes from '../../components/DefineTypes'
import { goToDetailPokedex } from '../../routes/coordinator'
import { ButtonDelete, PokedexContainer, Titles, CardsContainer } from './PokedexPageStyled'

const PokedexPage = () => {
  const { pokedex, removePokemon } = useContext(GlobalContext)
  const navigate = useNavigate()

  const listPokedex = pokedex && pokedex.map((pokemon) => {
    if (localStorage.getItem(`key ${pokemon.id}`)) {
      return (
        <ContainerCard typePokemon={pokemon.types[0].type.name} key={pokemon.name}>
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
            <H3Details onClick={() => goToDetailPokedex(navigate, pokemon.name)}>Detalhes</H3Details>
          </ContainerFirstColumn>
          <ConatinerSecondColumn>
            <ImgCard src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
            <ButtonDelete onClick={() => { removePokemon(pokemon, pokemon.id) }}>Excluir!</ButtonDelete>
          </ConatinerSecondColumn>
        </ContainerCard>
      )
    }
  })

  return (
    <PokedexContainer>
      <Titles>Meus Pokémons</Titles>
      <CardsContainer>
        {listPokedex}
      </CardsContainer>
    </PokedexContainer>
  )
}

export default PokedexPage