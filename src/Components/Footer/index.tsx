import { Button } from "antd";
import invert_logo from "./assets/invert-logo.png";

const Footer = () => {
    return (
        <footer className='bg-gray-100 h-full font-manrope sm:px-24'>
            <section>
                <div className='flex flex-col items-center gap-8 bg-main-blue py-24 rounded-lg mb-24'>
                    <h2 className='text-5xl text-white text-center px-3'>
                        An enterprise template to ramp <br /> up your company
                        website
                    </h2>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <input
                            type='text'
                            placeholder='Your email address'
                            className=' pl-4 pr-10 py-2 rounded-full outline-none'
                        />
                        <Button type='primary' className='primary-button'>
                            Start now
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 text-center sm:justify-between'>
                    <div className='text-gray-500 font-manrope h-52'>
                        <div className='flex flex-col justify-between items-center h-full'>
                            <div>
                                <img src={invert_logo} alt='Inverted Logo' />
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

                    <div className='flex flex-col sm:flex-row w-full justify-between px-24'>
                        <div className='sm:flex flex-col justify-between h-full text-gray-400 font-manrope'>
                            <div className='font-bold text-black text-lg cursor-pointer hover:text-gray-400 duration-200'>
                                Landings
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Home
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Products
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Services
                            </div>
                        </div>
                        <div className='sm:flex flex-col justify-between h-full text-gray-400 font-manrope'>
                            <div className='font-bold text-black text-lg cursor-pointer hover:text-gray-400 duration-200'>
                                Company
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Home
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Careers
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Services
                            </div>
                        </div>
                        <div className='sm:flex flex-col justify-between h-full text-gray-400 font-manrope'>
                            <div className='font-bold text-black text-lg cursor-pointer hover:text-gray-400 duration-200'>
                                Resources
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Blog
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Products
                            </div>
                            <div className='cursor-pointer hover:text-black duration-200'>
                                Services
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
