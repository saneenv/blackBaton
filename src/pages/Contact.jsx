import React from 'react';
import contactimg from '../images/contactus/contactus.png';
import logo from '../images/contactus/logo.png'

function Contact() {
    return (
        <div className='w-full flex flex-row h-screen overflow-hidden'>
            <div className='w-[50%] h-full'>
                <img src={contactimg} alt="contactimg" className='w-full h-full ' />
            </div>
            <div className='w-[50%] h-full justify-center items-center px-12'>
                <div className='flex flex-col gap-6  text-left  items-start px-12 py-6'>
                    <img src={logo} alt="logo" />
                    <div className='flex flex-col gap-3'>
                        <span className='text-4xl font-[700] font-montserrat'>Let’s Get In Touch</span>
                        <span className='text-base font-[400] text-[#989898] font-montserrat'>Or just reach out manually to <span className='text-base font-[600] text-[black] font-montserrat'>Blackbatton@gmail.com</span></span>
                    </div>
                    <div className='flex flex-col gap-3 w-full '>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className='flex flex-col gap-2 text-left w-[50%]'>
                                <span className='text-[#888888] font-[400] font-montserrat text-sm'>First Name</span>
                                <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0]' />
                            </div>
                            <div className='flex flex-col gap-2 text-left w-[50%]'>
                                <span className='text-[#888888] font-[400] font-montserrat text-sm'>Last Name</span>
                                <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0]' />
                            </div>
                        </div>

                        <div className='flex flex-row justify-between gap-3'>
                            <div className='flex flex-col gap-2 text-left w-full'>
                                <span className='text-[#888888] font-[400] font-montserrat text-sm'>Email Address</span>
                                <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0]' />
                            </div>
                            
                        </div>

                        <div className='flex flex-row justify-between gap-3'>
                            <div className='flex flex-col gap-2 text-left w-full'>
                                <span className='text-[#888888] font-[400] font-montserrat text-sm'>Phone Number</span>
                                <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0]' />
                            </div>
                            
                        </div>

                        <div className='flex flex-row justify-between gap-3'>
                            <div className='flex flex-col gap-2 text-left w-full'>
                                <span className='text-[#888888] font-[400] font-montserrat text-sm'>Message</span>
                                <input type="text" className='rounded-[23px] w-full h-[136px] border-2 border-[#E0E0E0]' />
                            </div>
                            
                        </div>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <div className='w-full h-[46px] rounded-[23px] bg-[black] flex justify-center items-center text-[white] text-sm font-[600] font-montserrat cursor-pointer'>Submit Form</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;