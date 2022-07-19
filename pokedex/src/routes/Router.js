import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import HomePage from '../pages/HomePage/HomePage'
// import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index exact path="/" element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/pokedex" element={<PokedexPage />}/>
                <Route path="*"element={"Página não encontrada"}/>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default Router