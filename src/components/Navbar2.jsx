import React from 'react';
import bars from '../images/Navbar/Bars.png'

function Navbar2() {
    return (
        <div className='w-full h-[55px] bg-[#000000] flex justify-between items-center px-12'>
            <div className='flex flex-row gap-12'>
                <div className='flex flex-row gap-2'>
                    <img src={bars} alt="bars" />
                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>All Categories</span>
                </div>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Men</span>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Women</span>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Kids</span>


            </div>
            <div className='flex flex-row gap-12'>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>LIMITED SALE</span>
                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>Best Seller</span>

                <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer'>New Arrival</span>


            </div>
        </div>
    )
}

export default Navbar2