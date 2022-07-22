import React, {useContext} from 'react'
import GlobalContext from '../global/GlobalContext'
import { ButtonDelete } from '../pages/PokedexPage/PokedexPageStyled'

const DeleteButton = ({pokemon, pokemonId}) => {

const { removePokemon } = useContext(GlobalContext)

  return (
    <ButtonDelete onClick={() => {removePokemon(pokemon, pokemonId)}}>DeleteButton</ButtonDelete>
  )
}

export default DeleteButton
