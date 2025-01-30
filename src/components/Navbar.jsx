import React from 'react'
import { useNavigate } from 'react-router-dom'
import contact from '../images/Navbar/contact.png'
import mail from '../images/Navbar/mail.png'
import twitter from '../images/Navbar/twitter.png'
import facebook from '../images/Navbar/facebook.png'
import insta from '../images/Navbar/insta.png'
import arrow from '../images/Navbar/arrow.png'
import search from '../images/Navbar/search.png'
import cart from '../images/Navbar/cart.png'
import profile from '../images/Navbar/profile.png'
import bars from '../images/Navbar/Bars.png'
import logo from '../images/Navbar/logo.png'


function Navbar() {
    const navigate = useNavigate();
    const cartpage = () => {
        navigate('/cart')
    }

    const accountpage = () =>{
        navigate('/account');
    }

    const homePage = () =>{
          navigate('/')
          window.location.reload();
    }
    return (
        <div className='flex flex-col'>
        <div className='w-full h-[120px] bg-[#000000] border-b-2 border-[#B2B2B2] flex flex-col lg:px-12 px-5 gap-3 fixed top-0 left-0 z-50'>
            <div className='w-full h-[40%]  flex justify-between items-end'>
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
            <div className='w-full h-[60%]  flex justify-center items-center gap-8'>
                <img src={logo} alt="logo" className='cursor-pointer' onClick={homePage} />
                <div className='w-[60%] h-[70%] rounded-[10px] bg-[#FFFFFF] flex flex-row'>
                    <div className='h-full w-[25%]  flex flex-row lg:gap-5 gap-2 justify-center items-center border-r-2 border-[#B2B2B2] cursor-pointer'>
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
                    <div className='flex flex-row gap-2 cursor-pointer' onClick={cartpage}>
                        <img src={cart} alt="cart" />
                        <span className='text-sm font-[400] font-dmSans text-[#CACACA]'>Cart</span>
                    </div>
                    <div className='flex flex-row border-r-2 border-[#B2B2B2]'>
                       
                    </div>
                    <div className='flex flex-row gap-2 cursor-pointer' onClick={accountpage}>
                        <img src={profile} alt="profile" />
                        <span className='text-sm font-[400] font-dmSans text-[#CACACA]'>Account</span>
                    </div>
                </div>
            </div>
        </div>
         

        <div className='w-full h-[55px] bg-[#000000] flex justify-between items-center lg:px-12 px-5 fixed top-[120px] left-0 z-40'>
            <div className='flex flex-row lg:gap-12 gap-5'>
                <div className='flex flex-row gap-2'>
                    <img src={bars} alt="bars" />
                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>All Categories</span>
                </div>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Men</span>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Women</span>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Kids</span>


            </div>
            <div className='flex flex-row lg:gap-12 gap-5'>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>LIMITED SALE</span>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Best Seller</span>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>New Arrival</span>


            </div>
        </div>
        </div>
    )
}

export default Navbar