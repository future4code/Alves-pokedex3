import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

const DetailPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default DetailPage