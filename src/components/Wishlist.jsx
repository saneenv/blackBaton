import React from 'react'
import { useNavigate } from 'react-router-dom'
import cart from '../images/Home/cart.png'
import product1 from '../images/Home/product1.png'
import product2 from '../images/Home/product2.png'
import product4 from '../images/Home/product4.png'
import heart from '../images/Home/heart.png'
import NavbarMob from './NavbarMob'


function Wishlist() {
    const navigate = useNavigate()
    const homePage = () => {
        navigate('/')
    }
    const accountPage = () => {
        navigate('/accountmob')
    }
    return (
        <div className='w-full h-auto flex flex-col lg:gap-6 gap-4 text-start'>
            <div className='md:hidden flex'>
                <NavbarMob />
            </div>
            <div className='flex flex-col w-full lg:mt-0 mt-[120px] lg:px-0 px-3 lg:pb-0 pb-6'>
            <div className='flex flex-row gap-2 items-center mt-3 md:hidden'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]' onClick={accountPage}>Account</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>Wishlist</span>

                </div>
                <span className='text-3xl font-[700] font-montserrat lg:flex hidden'>Wishlist</span>
                <div className='grid lg:grid-cols-3 grid-cols-2 w-full  gap-5 mt-5'>
                    <div className='flex flex-col gap-2 cursor-pointer'>
                        <div className='lg:h-[382px] md:h-[400px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                            <img src={product1} alt="product1" />
                            <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-3 flex justify-end'>
                                <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                    <img src={heart} alt="heart" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-1'>
                                <span className='lg:text-base text-sm font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                <span className='lg:text-sm text-xs font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
                                <div className='w-[110px] h-[35px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer'>
                                    <img src={cart} alt="cart" />
                                    <span className='text-xs font-[500] font-montserrat'>Add to Cart</span>
                                </div>
                            </div>
                            <div className='w-[84px] h-[37px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                $11.00
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='lg:h-[382px] md:h-[400px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                            <img src={product2} alt="product2" />
                            <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-3 flex justify-end'>
                                <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                    <img src={heart} alt="heart" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-1'>
                                <span className='lg:text-base text-sm font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                <span className='lg:text-sm text-xs font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
                                <div className='w-[110px] h-[35px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer'>
                                    <img src={cart} alt="cart" />
                                    <span className='text-xs font-[500] font-montserrat'>Add to Cart</span>
                                </div>
                            </div>
                            <div className='w-[84px] h-[37px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                $11.00
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='lg:h-[382px] md:h-[400px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                            <img src={product4} alt="product4" />
                            <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-3 flex justify-end'>
                                <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                    <img src={heart} alt="heart" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-1'>
                                <span className='lg:text-base text-sm font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                <span className='lg:text-sm text-xs font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
                                <div className='w-[110px] h-[35px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer'>
                                    <img src={cart} alt="cart" />
                                    <span className='text-xs font-[500] font-montserrat'>Add to Cart</span>
                                </div>
                            </div>
                            <div className='w-[84px] h-[37px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                $11.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wishlist