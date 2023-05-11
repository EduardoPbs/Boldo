const Hero = ({children}) => {
    return (
        <div className='w-max my-3 bg-white/20 rounded-xl py-3 px-3'>
            <div className='flex gap-2'>
                <div className='w-3 h-3 rounded-full bg-orange-600 cursor-pointer' />
                <div className='w-3 h-3 rounded-full bg-yellow-500 cursor-pointer' />
                <div className='w-3 h-3 rounded-full bg-green-600 cursor-pointer' />
            </div>
            {children}
        </div>
    );
};

export default Hero;
