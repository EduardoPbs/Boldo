const Input = ({ text, type = "text", placeholder }) => {
    return (
        <div>
            <label className='text-white font-semibold'>{text}</label>
            <input
                className='
                    w-full 
                    bg-white/10 
                    text-white border-2 
                    border-white 
                    rounded-lg 
                    p-2 
                    focus:outline-none 
                    focus:border-main-green 
                    focus:border-3 
                    duration-300 
                    font-semibold'
                autoComplete='text'
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
