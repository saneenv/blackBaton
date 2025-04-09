import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import contactimg from '../images/contactus/contactus.png';
import logo from '../images/contactus/logo.png'
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';

function Contact() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full flex flex-row lg:mt-[175px] md:mt-[175px] mt-[120px]'>
                <div className='w-[50%] h-full lg:flex hidden'>
                    <img src={contactimg} alt="contactimg" className='w-full h-full ' />
                </div>
                <div className='lg:w-[50%] w-full h-auto flex justify-center items-center lg:p-0 p-7'>
                    <div className='flex flex-col gap-8  text-left   '>
                        <img src={logo} alt="logo" className='w-[30%] h-[30%]' />
                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-4xl text-2xl font-[700] font-montserrat'>Let’s Get In Touch</span>
                            <span className='text-base font-[400] text-[#989898] font-montserrat'>Or just reach out manually to <span className='lg:text-base text-sm font-[600] text-[black] font-montserrat'>Info.stillsclothing@gmail.com</span></span>
                        </div>
                        <div className='flex flex-col gap-5 w-full '>
                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-[50%]'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>First Name</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' />
                                </div>
                                <div className='flex flex-col gap-2 text-left w-[50%]'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Last Name</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' />
                                </div>
                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Email Address</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' />
                                </div>

                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Phone Number</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' />
                                </div>

                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Message</span>
                                    <textarea className='rounded-[23px] w-full h-[136px] border-2 border-[#E0E0E0] p-4 text-left align-top' />
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full h-[46px] rounded-[23px] bg-[black] flex justify-center items-center text-[white] text-sm font-[600] font-montserrat cursor-pointer'>Submit Form</div>
                        </div>

                    </div>
                </div>

            </div>
            {isTab ? <FooterMob /> : <Footer />}
        </div>

    );
}

export default Contact;