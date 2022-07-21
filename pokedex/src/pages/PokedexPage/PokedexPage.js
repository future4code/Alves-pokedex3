import React, {useContext} from 'react'
import GlobalContext from '../../global/GlobalContext'
import {useNavigate} from 'react-router-dom'
import { goBack, goToIndex } from '../../routes/coordinator'


const PokedexPage = () => {
  const { pokemonList, setPokemonList, pokemonDetail, setPokemonDetail, pokedex, setPokedex} = useContext(GlobalContext)

    const navigate = useNavigate()
    const listPokedex = pokedex&& pokedex.map((pokemon) => {
      if(localStorage.getItem(`key ${pokemon.id}`)) {
        return(
          <p>{pokemon.name}</p>
        )
      }else {
        <p>Não há pokemon</p>
      }
    })
    
  return (
    <div>
        PokedexPage
        {listPokedex}
      </div>
  )
}

export default PokedexPage