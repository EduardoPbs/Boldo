import Button from "Components/Button";
import Hero from "./Hero";
import graphHorizontal from './assets/BarsGraphicHorizontal.png';
import graphVertical from './assets/BarsGraphVertical.png'
import bars from './assets/Bars.png'
import graphContent from './assets/GraphicContent.png'

const MainPage = () => {
    return (
        <section className='flex flex-col items-center lg:flex lg:flex-row lg:justify-between w-full '>
            <div className='sm:w-max mt-24 flex flex-col text-center md:text-left lg:mr-10'>
                <h1 className='text-white text-5xl font-manrope '>
                    Save time by building <br /> fast with Boldo Template
                </h1>

                <p className='text-white text-lg font-light mt-4 font-'>
                    Funding handshake buyer business-to-business metrics iPad
                    partnership. <br />
                    First mover advantage innovator success deployment
                    non-disclosure.
                </p>

                <div className='flex flex-col sm:flex-row jsutify-center md:justify-normal gap-4 mt-6'>
                    <Button primary={true} text='Buy template' />
                    <Button primary={false} text='Explore' />
                </div>
            </div>
            <div className='hidden w-max h-max mt-24 sm:flex sm:flex-col '>
                <Hero>
                    <img className="m-4 w-max" src={graphHorizontal} alt="Horizontal Graphic" />
                </Hero>
                
                <div className="flex gap-4 justify-between">
                    <Hero>
                        <img className="m-4 " src={graphVertical} alt="Vertical Graphic" />
                    </Hero>
                    
                    <Hero>
                        <div className='flex items-center'>
                            <img className="m-4 px-2 pt-3" src={graphContent} alt="Graphic Content" />
                            <img className="m-4 pt-4 w-16 h-w-16" src={bars} alt="Bars" />
                        </div>
                    </Hero>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
