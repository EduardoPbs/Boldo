import logo from "Components/Header/assets/logo.png";
import { useNavigate } from "react-router";
import AntdDropdown from "Components/Header/AntdDropdown";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='bg-main-blue px-24 py-8 md:flex sm:justify-between sm:items-center'>
            <div className='flex justify-center'>
                <img
                    src={logo}
                    alt='Imagem logo'
                    className='cursor-pointer px-4 py-6 sm:p-0 mb-4'
                    onClick={() => navigate("/")}
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
                    <li>
                        <AntdDropdown/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
