import { Button } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log("Fazendo cadastro");
        console.log(e);
    };

    return (
        <div className='flex justify-center font-manrope w-full lg:px-64 xl:px-96 py-16'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4 sm:justify-between  bg-main-blue px-12 py-3 border-2 border-main-green rounded-xl'
            >
                <label className='text-main-green text-2xl font-manrope text-center mb-4 uppercase font-bold border-b-2 border-main-green'>
                    Cadastro
                </label>
                <div>
                    <label className='text-white'>Email</label>
                    <input
                        {...register("email", { required: true })}
                        className='main-input'
                        type='email'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label className='text-white'>Senha</label>
                    <input
                        {...register("senha", { required: true })}
                        className='main-input'
                        type='password'
                        placeholder='Senha'
                    />
                </div>
                <div>
                    <label className='text-white'>Consfirmar Senha</label>
                    <input
                        {...register("confirmarSenha", { required: true })}
                        className='main-input'
                        type='password'
                        placeholder='Consfirmar senha'
                    />
                </div>
                <Button
                    type='primary'
                    className='primary-button'>
                    Cadastrar
                </Button>
                <Link to='/login' className='text-white w-max'>
                    Ou fazer{" "}
                    <u className='text-main-green cursor-pointer'>Log in</u>
                </Link>
            </form>
        </div>
    );
};

export default RegisterPage;
