import Button from "Components/Button";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log("Fazendo Login")
        console.log(e)
    };

    return (
        <div className='flex justify-center font-manrope w-full lg:px-64 xl:px-96 py-16'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4 sm:justify-between  bg-main-blue px-12 py-3 border-2 border-main-green rounded-xl'
                >
                <label className='text-main-green text-2xl font-manrope text-center mb-4 uppercase font-bold border-b-2 border-main-green'>
                    Login
                </label>
                <div>
                    <label className="text-white">Email</label>
                    <input {...register("email", {required: true})} className="main-input" type='email' placeholder='Email' />
                </div>
                <div>
                    <label className="text-white">Senha</label>
                    <input {...register("senha", {required: true })}className="main-input" type='password' placeholder='Senha' />
                </div>
                <Button primary={true} text='Entrar' />
                <Link to='/register' className='text-white w-max'>
                    Ou{" "}
                    <u className='text-main-green cursor-pointer'>
                        cadastrar-se
                    </u>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
