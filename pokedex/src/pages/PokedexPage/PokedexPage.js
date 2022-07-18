import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goBack, goToIndex } from '../../routes/coordinator'


const PokedexPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        PokedexPage
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToIndex(navigate)}>Home</button>
        </div>
  )
}

export default PokedexPage