const Card = () => {
    return (
        <div className='w-max mt-24 bg-white/20 rounded-xl py-3 px-3'>
            <div className='flex gap-2'>
                <div className='w-3 h-3 rounded-full bg-orange-600 cursor-pointer' />
                <div className='w-3 h-3 rounded-full bg-yellow-500 cursor-pointer' />
                <div className='w-3 h-3 rounded-full bg-green-600 cursor-pointer' />
            </div>
            <div className='flex pb-4'>
                <div className=''>
                    <div className='w-16 h-3 mt-6 mr-3 ml-4 bg-white/40 rounded-full' />
                    <div className='w-16 h-3 mt-6 mr-3 ml-4 bg-white/40 rounded-full' />
                    <div className='w-16 h-3 mt-6 mr-3 ml-4 bg-white/40 rounded-full' />
                    <div className='w-16 h-3 mt-6 mr-3 ml-4 bg-white/40 rounded-full' />
                </div>
                <div className=''>
                    <div className='flex'>
                        <div className='w-60 h-3 mt-6 bg-indigo-400 rounded-full cursor-pointer' />
                        <p className='mt-3.5 ml-2 text-center font-light text-white cursor-pointer'>
                            80%
                        </p>
                    </div>

                    <div className='flex'>
                        <div className='w-20 h-3 mt-6 bg-blue-500 rounded-full cursor-pointer' />
                        <p className='mt-3.5 ml-2 text-center font-light text-white cursor-pointer'>
                            30%
                        </p>
                    </div>

                    <div className='flex'>
                        <div className='w-72 h-3 mt-6 bg-white rounded-full cursor-pointer' />
                        <p className='mt-3.5 ml-2 text-center font-light text-white cursor-pointer'>
                            100%
                        </p>
                    </div>

                    <div className='flex'>
                        <div className='w-52 h-3 mt-6 bg-main-green rounded-full cursor-pointer' />
                        <p className='mt-3.5 ml-2 text-center font-light text-white cursor-pointer '>
                            75%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
