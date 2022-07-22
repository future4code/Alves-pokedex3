
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import DefineTypes from '../../components/DefineTypes'
import { BigContainerSmall, ContainerDetail, ContainerImgSmall, ContainerPokemon, ContainerStats, ImgSmall, Titles } from './DetailPageStyled'

const DetailPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [pokeDetail, setPokeDetail] = useState({})

  const stats = pokeDetail.stats
  const types = pokeDetail.types
  const moves = pokeDetail.abilities
  const images = pokeDetail.sprites?.versions["generation-v"]["black-white"].animated

  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon/${params.name}`)
      .then((res) => {
        // console.log(res.data)
        setPokeDetail(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [params])

  console.log(pokeDetail)
  return (
    <ContainerDetail  >
      <Titles>Detalhes</Titles>
      <ContainerPokemon typePokemon={types && types[0].type && types[0].type.name}>
        <BigContainerSmall>
          <ContainerImgSmall>
            <ImgSmall src={images && images.front_default} />
          </ContainerImgSmall>
          <ContainerImgSmall>
            <ImgSmall src={images && images.back_default} />

          </ContainerImgSmall>
        </BigContainerSmall>
        <ContainerStats>
          <p>Experiencia: {pokeDetail.base_experience}</p>
          {stats && stats.map((status) => {
            return (
              <p key={status.stat.name}>
                {status.stat.name}: {status.base_stat}
              </p>
            )
          })}
        </ContainerStats>
        <div>
          <p>#{pokeDetail.id}</p>
          <p>{pokeDetail.name}</p>
          <div>
            {types && types.map((type) => {
              const pokemonType = type.type.name
              return (
                <DefineTypes pokemonType={pokemonType} />
              )
            })}
          </div>


        </div>
        <div>
          {moves && moves.map((move) => {
            const pokeMove = move.ability.name
            return (
              <p>{pokeMove}</p>
            )
          })}
        </div>
      </ContainerPokemon>

    </ContainerDetail>
  )
}

export default DetailPage