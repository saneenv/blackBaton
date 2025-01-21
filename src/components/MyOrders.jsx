import React from 'react'
import { useNavigate } from 'react-router-dom'
import product from '../images/Account/product.png'
import arrow from '../images/Account/arrow.png'
import NavbarMob from './NavbarMob'
function MyOrders() {

    const navigate = useNavigate()
    const homePage = () => {
        navigate('/')
    }
    const accountPage = () => {
        navigate('/accountmob')
    }

    return (
        <div className='w-full h-auto flex flex-col lg:gap-6 gap-4 text-start'>
            <div className='lg:hidden flex'>
                <NavbarMob />
            </div>
            <div className='flex flex-col w-full lg:mt-0 mt-[120px] lg:px-0 px-3'>
            <div className='flex flex-row gap-2 items-center mt-3 lg:hidden'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]' onClick={accountPage}>Account</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>My Orders</span>

                </div>
                <span className='text-3xl font-[700] font-montserrat lg:flex hidden'>My Orders</span>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4  mt-5'>
                    <div className='lg:h-[180px] h-[140px] bg-[#F6F6F6] rounded-[8px] lg:p-5 p-2 flex flex-row lg:gap-5 gap-3 items-center'>
                        <div className='lg:w-[97px] w-[87px] lg:h-[120px] h-[80px]'>
                            <img src={product} alt="product" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-base font-[600] font-montserrat text-[#3C4242]'>Kevin Durant Men's Basketball T-shirt</span>
                            <span className='lg:text-base text-sm font-[500] font-montserrat'>Size : M</span>
                            <span className='lg:text-base text-sm font-[500] font-montserrat'>Delivered on 6 Sunday 2025</span>

                        </div>
                        <div className='flex justify-end h-full items-end'>
                            <img src={arrow} alt="arrow" />
                        </div>

                    </div>
                    <div className='lg:h-[180px] h-[140px] bg-[#F6F6F6] rounded-[8px] lg:p-5 p-2 flex flex-row lg:gap-5 gap-3 items-center'>
                        <div className='lg:w-[97px] w-[87px] lg:h-[120px] h-[80px] '>
                            <img src={product} alt="product" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-base font-[600] font-montserrat text-[#3C4242]'>Kevin Durant Men's Basketball T-shirt</span>
                            <span className='lg:text-base text-sm font-[500] font-montserrat'>Size : M</span>
                            <span className='lg:text-base text-sm font-[500] font-montserrat'>Delivered on 6 Sunday 2025</span>

                        </div>
                        <div className='flex justify-end h-full items-end'>
                            <img src={arrow} alt="arrow" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyOrders