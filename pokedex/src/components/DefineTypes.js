import React from 'react'
import Bug from '../assets/bug.png'
import Dark from '../assets/dark.png'
import Dragon from '../assets/dragon.png'
import Electric from '../assets/eletric.png'
import Fairy from '../assets/fairy.png'
import Fighting from '../assets/fighting.png'
import Fire from '../assets/fire.png'
import Flying from '../assets/flying.png'
import Ghost from '../assets/ghost.png'
import Grass from '../assets/grass.png'
import Ground from '../assets/ground.png'
import Ice from '../assets/ice.png'
import Normal from '../assets/normal.png'
import Psychic from '../assets/psychic.png'
import Poison from '../assets/poison.png'
import Rock from '../assets/rock.png'
import Steel from '../assets/steel.png'
import Water from '../assets/water.png'
import { ImgType } from './Card/CardStyle'
const DefineTypes = ({ pokemonType }) => {

    if (pokemonType === "poison") {
        return (
            <>
                <ImgType src={Poison} />
            </>
        )
    } if (pokemonType === "bug") {
        return (
            <>
                <ImgType src={Bug} />
            </>
        )
    } if (pokemonType === "dark") {
        return (
            <>
                <ImgType src={Dark} />
            </>
        )
    } if (pokemonType === "dragon") {
        return (
            <>
                <ImgType src={Dragon} />
            </>
        )
    } if (pokemonType === "electric") {
        return (
            <>
                <ImgType src={Electric} />
            </>
        )
    } if (pokemonType === "fairy") {
        return (
            <>
                <ImgType src={Fairy} />
            </>
        )
    } if (pokemonType === "fighting") {
        return (
            <>
                <ImgType src={Fighting} />
            </>
        )
    } if (pokemonType === "fire") {
        return (
            <>
                <ImgType src={Fire} />
            </>
        )
    } if (pokemonType === "flying") {
        return (
            <>
                <ImgType src={Flying} />
            </>
        )
    } if (pokemonType === "ghost") {
        return (
            <>
                <ImgType src={Ghost} />
            </>
        )
    } if (pokemonType === "grass") {
        return (
            <>
                <ImgType src={Grass} />
            </>
        )
    } if (pokemonType === "ground") {
        return (
            <>
                <ImgType src={Ground} />
            </>
        )
    } if (pokemonType === "ice") {
        return (
            <>
                <ImgType src={Ice} />
            </>
        )
    } if (pokemonType === "normal") {
        return (
            <>
                <ImgType src={Normal} />
            </>
        )
    } if (pokemonType === "psychic") {
        return (
            <>
                <ImgType src={Psychic} />
            </>
        )
    } if (pokemonType === "rock") {
        return (
            <>
                <ImgType src={Rock} />
            </>
        )
    } if (pokemonType === "steel") {
        return (
            <>
                <ImgType src={Steel} />
            </>
        )
    } if (pokemonType === "water") {
        return (
            <>
                <ImgType src={Water} />
            </>
        )
    }
    return (
        <>DefineTypes</>
    )
}

export default DefineTypes