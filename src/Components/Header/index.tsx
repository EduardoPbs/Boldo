import logo from "Components/Header/assets/logo.png";
import { useNavigate } from "react-router";
import AntDropdown from "Components/Header/AntDropdown";

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
                <AntDropdown />
            </div>
        </header>
    );
};

export default Header;
