import React from 'react'
import contact from '../images/Navbar/contact.png'
import mail from '../images/Navbar/mail.png'
import twitter from '../images/Navbar/twitter.png'
import facebook from '../images/Navbar/facebook.png'
import insta from '../images/Navbar/insta.png'
import arrow from '../images/Navbar/arrow.png'
import search from '../images/Navbar/search.png'
import cart from '../images/Navbar/cart.png'
import profile from '../images/Navbar/profile.png'

function Navbar() {
    return (
        <div className='w-full h-[120px] bg-[#000000] border-b-2 border-[#B2B2B2] flex flex-col px-12'>
            <div className='w-full h-[30%]  flex justify-between items-center'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-2'>
                        <img src={contact} alt="contact" />
                        <span className='text-[#CACACA] font-[400] font-dmSans text-sm'>(414) 857 - 0107</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <img src={mail} alt="mail" />
                        <span className='text-[#CACACA] font-[400] font-dmSans text-sm'>Blackbatton@gmail.com</span>
                    </div>
                </div>


                <div className='flex flex-row gap-2'>
                    <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] flex justify-center items-center cursor-pointer'>
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] flex justify-center items-center cursor-pointer'>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] flex justify-center items-center cursor-pointer'>
                        <img src={insta} alt="insta" />
                    </div>
                </div>
            </div>
            <div className='w-full h-[70%]  flex justify-center items-center gap-8'>
                <div className='w-[60%] h-[70%] rounded-[10px] bg-[#FFFFFF] flex flex-row'>
                    <div className='h-full w-[25%]  flex flex-row gap-5 justify-center items-center border-r-2 border-[#B2B2B2] cursor-pointer'>
                        <span className='font-[400] text-sm font-dmSans'>All Category</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className='h-full w-[65%]  border-r-2 border-[#B2B2B2]'>
                        <input type="text" className='w-full h-full font-dmSans pl-5 outline-none' placeholder='Search Products...' />
                    </div>
                    <div className='h-full w-[10%]  flex justify-center items-center cursor-pointer'>
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    <div className='flex flex-row gap-2 cursor-pointer'>
                        <img src={cart} alt="cart" />
                        <span className='text-sm font-[400] font-dmSans text-[#CACACA]'>Cart</span>
                    </div>
                    <div className='flex flex-row border-r-2 border-[#B2B2B2]'>
                       
                    </div>
                    <div className='flex flex-row gap-2 cursor-pointer'>
                        <img src={profile} alt="profile" />
                        <span className='text-sm font-[400] font-dmSans text-[#CACACA]'>Account</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar