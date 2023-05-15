import Input from "Components/Input";
import Button from "Components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className='font-manrope w-full xl:px-96 lg:px-64'>
            <form className='flex flex-col gap-4 sm:justify-between  bg-main-blue px-12 py-3 rounded-xl'>
                <label className='text-main-green text-2xl font-manrope text-center mb-4 uppercase font-bold border-b-2 border-main-green'>
                    Login
                </label>
                <Input text='Name' type='text' placeholder='Nome' />
                <Input text='Email' type='email' placeholder='Email' />
                <Input text='Senha' type='password' placeholder='Senha' />
                <Button primary={true} text='Entrar' />
                <Link to='/register' className='text-white w-max'>
                    Ou <u className="text-main-green cursor-pointer">cadastrar-se</u>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
