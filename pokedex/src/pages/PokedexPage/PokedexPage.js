import React, {useContext} from 'react'
import GlobalContext from '../../global/GlobalContext'
import {useNavigate} from 'react-router-dom'
import { ConatinerSecondColumn, ContainerCard, ContainerFirstColumn, ContainerTypes, H2, H3, ImgCard } from '../../components/Card/CardStyle'
import DefineTypes from '../../components/DefineTypes'
import { goToDetailPokedex } from '../../routes/coordinator'
import { ButtonDelete, PokedexContainer, Titles, CardsContainer } from './PokedexPageStyled'


const PokedexPage = () => {
  const { pokemonDetail, setPokemonDetail, pokedex, setPokedex} = useContext(GlobalContext)

    const navigate = useNavigate()
    
    const removePokemon = (newPokemon, id) => {
      setPokedex(pokedex.filter(pokemon => newPokemon.name !== pokemon.name))
      setPokemonDetail([newPokemon, ...pokemonDetail])
      localStorage.removeItem(`key ${id}`)
    }

    const listPokedex = pokedex && pokedex.map((pokemon) => {
      if(localStorage.getItem(`key ${pokemon.id}`)) {
        return(
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
              <H3 onClick={() => goToDetailPokedex(navigate, pokemon.name)}>Detalhes</H3>
          </ContainerFirstColumn>
          <ConatinerSecondColumn>
                  <ImgCard src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
              <ButtonDelete  onClick={() => {removePokemon(pokemon, pokemon.id)}}>Excluir!</ButtonDelete>
          </ConatinerSecondColumn>
      </ContainerCard>
        )
      }else {
        <p>Não há pokemon</p>
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