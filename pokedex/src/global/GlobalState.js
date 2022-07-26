import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import { BASE_URL } from '../constants/url'
import Capturar from '../assets/capturar.png'
import Soltar from '../assets/soltar.gif'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GlobalState = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [pokedex, setPokedex] = useState([])

    const Provider = GlobalContext.Provider

    const getPokemonsDetail = () => {
        const pokemons = []
        pokemonList.forEach((item) => {
            axios.get(`${BASE_URL}/pokemon/${item.name}`)
                .then((res) => {
                    // console.log(res)
                    pokemons.push(res.data)
                    if (pokemons.length === 30) {
                        const orderList = pokemons.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemonDetail(orderList)
                        // console.log(pokemons) 
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
    }, [])

    const getPokeList = (pageValue) => {
        axios.get(`${BASE_URL}/pokemon?limit=30&offset=${pageValue}`)
            .then((res) => {
                setPokemonList(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const capturPokemon = (newPokemon, id) => {
        setPokemonDetail(pokemonDetail.filter(pokemon => pokemon.name !== newPokemon.name))
        const newPokedex = [...pokedex, newPokemon]
        setPokedex(newPokedex)
        localStorage.setItem(`key ${id}`, id)
        localStorage.setItem("pokedex", JSON.stringify(newPokedex))
        toast("Capturou!", {
            icon: <img src={Capturar} height='25px' width='25px' />
        })
    }

    const removePokemon = (newPokemon, id) => {
        setPokedex(pokedex.filter(pokemon => newPokemon.name !== pokemon.name))
        setPokemonDetail([newPokemon, ...pokemonDetail])
        localStorage.removeItem(`key ${id}`)
        toast.error("O Pokemon foi retirado da sua Pokedex", {
            icon: <img src={Soltar} height='30px' width='30px' />
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
        getPokemonsDetail,
        capturPokemon,
        removePokemon
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState