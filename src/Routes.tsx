import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./Pages/DefaultPage";
import MainPage from "Pages/MainPage";
import LoginPage from "Pages/LoginPage";
import Footer from "Components/Footer";
import RegisterPage from "Pages/RegisterPage";
import Header from "Components/Header";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<MainPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='register' element={<RegisterPage />} />
                </Route>
            </Routes>
           
            <Footer />
        </BrowserRouter>
    );
};

export default Rotas;
