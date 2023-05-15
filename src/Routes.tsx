import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './Pages/DefaultPage';
import MainPage from 'Pages/MainPage';
import LoginPage from 'Pages/LoginPage';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;