import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import HomePage from '../pages/HomePage/HomePage'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index exact path="/" element={<HomePage />} />
                <Route path=":number" element={<HomePage />} />
                <Route path="/detail/:name" element={<DetailPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokedex/detail/:name" element={<DetailPage />} />
                <Route path="*" element={"Página não encontrada"} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router