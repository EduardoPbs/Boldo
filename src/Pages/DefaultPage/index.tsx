import { Outlet } from "react-router";

const DefaultPage = () => {
    return (
        <div className='h-full'>
            <section className='sm:w-full bg-gray-100'>

                <Outlet />
                
            </section>
        </div>
    );
};

export default DefaultPage;
