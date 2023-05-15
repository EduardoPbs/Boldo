import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./Pages/DefaultPage";
import MainPage from "Pages/MainPage";
import LoginPage from "Pages/LoginPage";
import Footer from "Components/Footer";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<MainPage />} />
                    
                    <Route path='login' element={<LoginPage />} />
                </Route>
            </Routes>
           
            <Footer />
        </BrowserRouter>
    );
};

export default Rotas;
