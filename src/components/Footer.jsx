import React from 'react'
import fb from '../images/Footer/fb.png'
import insta from '../images/Footer/insta.png'
import twitter from '../images/Footer/twitter.png'
import linkedin from '../images/Footer/in.png'
import playstore from '../images/Footer/playstore.png' 
import appstore from '../images/Footer/appstore.png'
import arrow from '../images/Footer/arrow.png'

function Footer() {
    return (
        <div className='w-full h-auto p-12 bg-[black] flex flex-col gap-8'>
            <div className='flex flex-row gap-[8%]'>
                <div className='flex flex-col gap-8'>
                    <span className='text-2xl font-[600] font-montserrat  text-left text-[#F6F6F6]'>Need Help</span>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Contact Us</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Track Order</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Returns & Refunds</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>FAQ's</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Career</span>

                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <span className='text-2xl font-[600] font-montserrat text-[#F6F6F6] text-left'>Company</span>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>About Us</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Black Baton Blog</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Black Baton</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Collaboration</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Media</span>

                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <span className='text-2xl font-[600] font-montserrat text-[#F6F6F6] text-left'>More Info</span>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Term and Conditions</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Privacy Policy</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Shipping Policy</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Sitemap</span>

                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <span className='text-2xl font-[600] font-montserrat text-[#F6F6F6] text-left'>Location</span>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>support@Black Baton.in</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>Jubilee Junction pattambi Main Road</span>
                        <span className='text-lg font-[400] font-montserrat text-[#F6F6F6] text-left'>(NH 8- Near Shersoft Software) Malappuram, Kerala- 313002</span>
                    </div>
                </div>
            </div>

            <div className='flex  justify-between items-end'>
                <div className='flex flex-row gap-2'>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                        <img src={fb} alt="fb" />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                        <img src={insta} alt="insta" />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                        <img src={linkedin} alt="in" />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-2xl font-[700] font-montserrat text-[#F6F6F6]'>Download The App</span>
                    <div className='flex flex-row gap-3'>
                        <div className='w-auto p-5 h-[51px] flex flex-row gap-2 bg-[#404040] rounded-[8px] justify-center items-center'>
                            <img src={playstore} alt="playstore" />
                            <div className='flex flex-col '>
                                <span className='text-xs font-[400] font-montserrat text-[white]'>android app on</span>
                                <span className='text-lg font-[400] font-montserrat text-[white]'>Google Play</span>
                            </div>
                        </div>
                        <div className='w-auto p-5 h-[51px] flex flex-row gap-2 bg-[#404040] rounded-[8px] justify-center items-center'>
                            <img src={appstore} alt="appstore" />
                            <div className='flex flex-col '>
                                <span className='text-xs font-[400] font-montserrat text-[white]'>Available on the</span>
                                <span className='text-lg font-[400] font-montserrat text-[white]'>App Store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[80px]  border-t-2 border-b-2 border-[#BEBCBD] flex justify-between items-center'>
                 <span className='text-2xl font-[700] font-montserrat text-[#F6F6F6]'>Popular Categories</span>
                 <img src={arrow} alt="arrow" />
            </div>

            <span className='flex justify-center items-center text-[#F6F6F6] font-[400] text-lg font-montserrat'>Copyright © 2025 Shersoft Software Company. All rights reserved.</span>
        </div>
    )
}

export default Footer
