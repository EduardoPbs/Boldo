import logo from "Components/Header/assets/logo.png";
import LoginPage from "Pages/LoginPage";
import { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();


    return (
        <header className='md:flex sm:justify-between sm:items-center'>
            <div className='flex justify-center'>
                <img
                    src={logo}
                    alt='Imagem logo'
                    className='cursor-pointer px-4 py-6 sm:p-0 mb-4'
                    onClick={() => navigate('/')}
                />
            </div>
            <div>
                <ul className='sm:flex text-white gap-10 font-sans justify-center text-center'>
                    <li className='mt-4 sm:mt-0 cursor-pointer font-semibold align-middle'>
                        Product
                    </li>

                    <li className='mt-4 sm:mt-0 cursor-pointer font-semibold align-middle'>
                        Services
                    </li>

                    <li className='mt-4 sm:mt-0 cursor-pointer font-semibold align-middle'>
                        About
                    </li>

                    <li
                        onClick={() => navigate('/login')}
                        className='
                        mt-4 
                        sm:mt-0 
                        cursor-pointer font-semibold align-middle
                        bg-white/95
                        text-main-blue
                        px-10
                        py-2
                        rounded-full
                        hover:bg-white
                        transition
                    '
                    >
                        Log In
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
