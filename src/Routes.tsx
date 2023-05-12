import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './Pages/DefaultPage';
import MainPage from 'Pages/MainPage';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;