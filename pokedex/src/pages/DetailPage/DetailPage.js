
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import DefineTypes from '../../components/DefineTypes'
import GlobalContext from '../../global/GlobalContext'
import { ImgBig, H3, H2, BigContainerSmall, ContainerData, ContainerDetail, ContainerImgSmall, ContainerPokemon, ContainerStats, ImgSmall, Titles, ContainerMoves, Moves, ContainerImgBig, ContainerInfos, ButtonCaptur, ButtonDelete, ContainerProgress, Progress } from './DetailPageStyled'

const DetailPage = () => {
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
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [params])

  const defineButton = () => {
    if (window.location.pathname.includes("/pokedex/detail")) {
      return (
        <ButtonDelete onClick={() => { removePokemon(pokeDetail, pokeDetail.id) }}> Deletar </ButtonDelete>
      )
    } else if (window.location.pathname.includes("/detail")) {
      return (
        <ButtonCaptur onClick={() => { capturPokemon(pokeDetail, pokeDetail.id) }} > Capturar </ButtonCaptur>

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
          <p>Experiência:</p>
          {stats && stats.map((status) => {
            return (
              <ContainerProgress>
                <p>{status.stat.name} {status.base_stat} </p>
                <Progress max={200} value={status.base_stat} key={status.stat.name}></Progress>
              </ContainerProgress>
            )
          })}
          <p>total = {stats && stats[0]?.base_stat + stats[1]?.base_stat + stats[2]?.base_stat + stats[3]?.base_stat + stats[4]?.base_stat + stats[5]?.base_stat}</p>
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