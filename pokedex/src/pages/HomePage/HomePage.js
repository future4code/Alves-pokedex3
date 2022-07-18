import React from 'react'
import { goToPokedex } from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'



const HomePage = () => {
    const navigate = useNavigate()

  return (
    <div>
        HomePage
        <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
    </div>
  )
}

export default HomePage