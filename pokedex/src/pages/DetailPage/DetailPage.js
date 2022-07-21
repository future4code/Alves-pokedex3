
import {useNavigate, useParams} from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import DefineTypes from '../../components/DefineTypes'

const DetailPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [pokeDetail, setPokeDetail] = useState({})

    const stats = pokeDetail.stats
    const types = pokeDetail.types
    const moves = pokeDetail.moves

  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon/${params.name}`)
    .then((res) => {
      console.log(res.data)
      setPokeDetail(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }, [params])


  return (
    <div>
      <div>
        <p>{pokeDetail.name}</p>
        {/* <img src={pokeDetail.sprites.other.front_default} alt={pokeDetail.name} /> */}
        <div>
          {types && types.map((type) => {
            const pokemonType = type.type.name
            return(
              <DefineTypes pokemonType={pokemonType} />
            )
          })}
        </div>
        <p>Experiencia: {pokeDetail.base_experience}</p>
        {stats && stats.map((status) => {
          return (
            <p key={status.stat.name}>
              {status.stat.name}: {status.base_stat}
            </p>
          )
        })}
      </div>
      <div>
        {moves && moves.map((move) => {
          const pokeMove = move.move.name
          return (
            <p>{pokeMove}</p>
          )
        })}
        </div> 
        <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default DetailPage