import Header from "Components/Header";
import { Outlet } from "react-router";

const DefaultPage = () => {
    return (
        <div className='h-full'>
            <section className='bg-main-blue sm:w-full px-4 sm:py-8 sm:px-24'>
                <Header />
                <Outlet/>
            </section>
        </div>
    );
};

export default DefaultPage;
