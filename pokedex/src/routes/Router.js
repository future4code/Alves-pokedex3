import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import HomePage from '../pages/HomePage/HomePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="detail" element={<DetailPage />} />
                <Route path="pokedex" element={<PokedexPage />}/>
                <Route path="*"element={"Página não encontrada"}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router