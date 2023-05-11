import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainPage from 'Pages/MainPage';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;