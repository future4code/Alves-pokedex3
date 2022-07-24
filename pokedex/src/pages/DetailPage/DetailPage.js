
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'
import React, { useState, useEffect, useContext } from 'react'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import DefineTypes from '../../components/DefineTypes'
import GlobalContext from '../../global/GlobalContext'
import { ImgBig, H3, H2, BigContainerSmall, ContainerData, ContainerDetail, ContainerImgSmall, ContainerPokemon, ContainerStats, ImgSmall, Titles, ContainerMoves, Moves, ContainerImgBig, ContainerInfos, ButtonCaptur, ButtonDelete } from './DetailPageStyled'

const DetailPage = () => {
  const navigate = useNavigate()
  const { removePokemon, capturPokemon } = useContext(GlobalContext)
  const params = useParams()
  const [pokeDetail, setPokeDetail] = useState({})

  const stats = pokeDetail.stats
  const types = pokeDetail.types
  const moves = pokeDetail.abilities
  const images = pokeDetail.sprites?.versions["generation-v"]["black-white"].animated
  const imagesBig = pokeDetail.sprites?.other["official-artwork"]["front_default"]

  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon/${params.name}`)
      .then((res) => {
        setPokeDetail(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [params])

  const defineButton = () => {
    if (window.location.pathname.includes("/pokedex/detail")){
      return (
        <ButtonDelete onClick = {() => {removePokemon(pokeDetail, pokeDetail.id)}}> Deletar </ButtonDelete>
    )
    }else if (window.location.pathname.includes("/detail")) {
      return (
        <ButtonCaptur  onClick = {() => {capturPokemon(pokeDetail, pokeDetail.id)}} > Capturar </ButtonCaptur>
       
    )
    }
  }
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
          <p>Experiência: {pokeDetail.base_experience}</p>
          {stats && stats.map((status) => {
            return (
              <p key={status.stat.name}>
                {status.stat.name}: {status.base_stat}
              </p>
            )
          })}
        </ContainerStats>
        <ContainerData>
          <ContainerInfos>
          <H3 >#{pokeDetail.id}</H3>
          <H2>{pokeDetail.name}</H2>
          <div>
            {types && types.map((type) => {
              const pokemonType = type.type.name
              return (
                <DefineTypes pokemonType={pokemonType} />
              )
            })}
          </div>
          </ContainerInfos>
          <ContainerMoves>
            <p>Habilidades:</p>
            {moves && moves.map((move) => {
              const pokeMove = move.ability.name
              return (
                <Moves>{pokeMove}</Moves>
              )
            })}
          </ContainerMoves>
        </ContainerData>
        <ContainerImgBig>
          <ImgBig src={imagesBig && imagesBig} />
          {defineButton()}
        </ContainerImgBig>
      </ContainerPokemon>
    </ContainerDetail>
  )
}

export default DetailPage