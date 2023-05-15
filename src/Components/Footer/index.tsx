import Button from "Components/Button";
import invert_logo from "./assets/invert-logo.png";

const Footer = () => {
    return (
        <footer className='bg-white h-full font-manrope px-24'>
            <section>
                <div className='flex flex-col items-center gap-8 bg-main-blue py-24 rounded-lg mb-24'>
                    <h2 className='text-5xl text-white text-center'>
                        An enterprise template to ramp <br /> up your company
                        website
                    </h2>
                    <div className='flex gap-3'>
                        <input
                            type='text'
                            placeholder='Your email address'
                            className=' pl-4 pr-10 py-3 rounded-full outline-none'
                        />
                        <Button primary={true} text='Start now' />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='text-gray-400 font-manrope h-52'>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <img src={invert_logo} alt='' />
                            </div>
                            <p>
                                Social media validation business model canvas{" "}
                                <br />
                                graphical user interface launch party creative{" "}
                                <br />
                                facebook iPad twitter.
                            </p>
                            <p>All rights reserved.</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between h-ful text-gray-400 font-manrope h-52'>
                        <div className='font-bold text-black cursor-pointer'>Landings</div>
                        <div className='cursor-pointer'>Home</div>
                        <div className='cursor-pointer'>Products</div>
                        <div className='cursor-pointer'>Services</div>
                    </div>

                    <div className='flex flex-col justify-between h-ful text-gray-400 font-manrope h-52'>
                        <div className='font-bold text-black text-lg cursor-pointer'>Company</div>
                        <div className='cursor-pointer'>Home</div>
                        <div className='cursor-pointer'>Careers</div>
                        <div className='cursor-pointer'>Services</div>
                    </div>

                    <div className='flex flex-col justify-between h-ful text-gray-400 font-manrope h-52'>
                        <div className='font-bold text-black cursor-pointer'>Resources</div>
                        <div className='cursor-pointer'>Blog</div>
                        <div className='cursor-pointer'>Products</div>
                        <div className='cursor-pointer'>Services</div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
