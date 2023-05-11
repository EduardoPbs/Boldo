import Button from "Components/Button";
import Card from './Card';


const MainPage = () => {
    return (
        <section className='lg:flex justify-between w-full'>
            <div className='sm:w-max mt-24 flex flex-col text-center md:text-left lg:mr-10'>
                <h1 className='text-white text-5xl font-manrope '>
                    Save time by building <br/> fast with Boldo Template 
                </h1>

                <p className='text-white text-lg font-light mt-4 font-'>
                    Funding handshake buyer business-to-business metrics iPad partnership. <br/>
                    First mover advantage innovator success deployment non-disclosure.
                </p>

                <div className='flex flex-col sm:flex-row justify-center md:justify-normal gap-4 mt-6'>
                    <Button primary={true} text='Buy template' />
                    <Button primary={false} text='Explore' />
                </div>
            </div>
            <div className="hidden md:block w-max">
                <Card/>
            </div>
        </section>
    );
};

export default MainPage;
