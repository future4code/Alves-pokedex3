import React, { useState, useEffect } from 'react'
// import useRequestData from '../hooks/useRequestData'
import GlobalContext from './GlobalContext'
import { BASE_URL } from '../constants/url'
import axios from 'axios'

const GlobalState = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [pokedex, setPokedex] = useState()

    const Provider = GlobalContext.Provider

    const getPokemonsDetail = () => {
        const pokemons = []
        pokemonList.forEach((item) => {
            axios.get(`${BASE_URL}/pokemon/${item.name}`)
            .then((res) => {
                // console.log(res)
                pokemons.push(res.data)
                if(pokemons.length === 20){
                    const orderList = pokemons.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemonDetail(orderList)
                console.log(pokemons) 
                }
            })
            .catch((err) => {
                console.log(err)
            })
        })

    } 

    useEffect(() => {
        const effectPokedex = localStorage.getItem("pokedex")
        const newPokedex = JSON.parse(effectPokedex)
        newPokedex && setPokedex(newPokedex)
    },[])

        
    const getPokeList = () => {
      axios.get(`${BASE_URL}/pokemon?limit=20&offset=0`)
      .then((res) => {
        setPokemonList(res.data.results)
        // console.log(res)
        
      }) 
      .catch((err) => {
        console.log(err)
      })  

    }
    const values = {
        pokemonList,
        pokemonDetail,
        pokedex,
        setPokedex,
        setPokemonList,
        setPokemonDetail,
        getPokeList,
        getPokemonsDetail
    }

    // paginação usar o offset como parametro


    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState