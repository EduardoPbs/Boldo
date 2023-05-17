import { MenuProps, Dropdown } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <Link to='/login' className='font-manrope font-semibold'>
                Entrar
            </Link>
        ),
    },
    {
        key: "2",
        label: (
            <Link to='/register' className='font-manrope font-semibold'>
                Cadastrar-se
            </Link>
        ),
    },
];

const AntdDropdown = () => (
    <Dropdown menu={{ items }}>
        <div className='mt-4 sm:mt-0 cursor-pointer font-semibold align-middle bg-white/95 text-main-blue px-10 py-2 rounded-full hover:bg-white transition'>
            Log In
        </div>
    </Dropdown>
);

export default AntdDropdown;
