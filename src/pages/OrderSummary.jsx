import React from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import ordersummary from '../images/OrderSummary/product.png'
import confirm from '../images/OrderSummary/confirm.png'
import top from '../images/OrderSummary/top.png'

function OrderSummary() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
        const isTab = useMediaQuery({query:  '(max-width: 1024px)' });
    
    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full h-auto lg:px-12 px-3 lg:gap-6 gap-3 lg:pt-12 pt-6 flex lg:flex-row flex-col lg:mt-[175px] md:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <div className='flex flex-row gap-2 items-center  md:hidden'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' >Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]' >Account</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>My Orders</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>Orders Summary</span>

                </div>
                <div className='lg:w-[60%] w-full h-full flex flex-col gap-2 lg:mt-0 mt-6'>
                    <div className='flex bg-[#F6F6F6] rounded-[8px] lg:p-5 p-3'>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-3 text-left'>
                                    <span className='lg:text-base text-xs font-[500] font-montserrat'>ORDER NUMBER</span>
                                    <span className='lg:text-base text-xs font-[700] font-montserrat'>TB-124363987-93875588</span>
                                </div>
                                <div className='flex flex-col gap-3 text-left'>
                                    <span className='lg:text-base text-xs font-[500] font-montserrat'>ORDER PLACED</span>
                                    <span className='lg:text-base text-xs font-[700] font-montserrat'>24 May , 2025</span>
                                </div>
                            </div>


                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-3 text-end'>
                                    <span className='lg:text-base text-xs font-[500] font-montserrat'>TOTAL</span>
                                    <span className='lg:text-base text-xs font-[700] font-montserrat'>₹ 1,499.00</span>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='flex bg-[#F6F6F6] rounded-[8px] lg:p-5 p-3'>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-3 text-left'>
                                    <span className='lg:text-base text-xs font-[500] font-montserrat'>SHIPPING ADDRESS</span>
                                </div>
                                <div className='flex flex-col gap-2 text-left'>
                                    <span className='lg:text-base text-sm font-[600] font-montserrat'>Gopu Ramesh</span>
                                    <span className='text-[#807D7E] lg:text-sm text-xs font-[500] font-montserrat'>9874563217</span>
                                    <span className='text-[#807D7E] lg:text-sm text-xs font-[500] font-montserrat'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex bg-[#F6F6F6] rounded-[8px] lg:p-5 p-3'>
                        <div className='flex flex-row gap-5 w-full items-center'>
                            <div className='w-[67px] h-[91px] bg-[yellow]'>
                                <img src={ordersummary} alt="ordersummary" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='lg:text-base text-sm font-[600] font-montserrat'>Kevin Durant Men's Basketball T-shirt</span>
                                <span className='lg:text-sm text-xs font-[500] font-montserrat'>Size : M</span>
                                <span className='lg:text-sm text-xs font-[700] font-montserrat'>₹ 1,499.00</span>
                            </div>

                        </div>
                    </div>


                    <div className='flex bg-[#F6F6F6] rounded-[8px] lg:p-5 p-3'>
                        <div className='flex justify-between w-full '>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-3'>
                                    <span className='text-left lg:text-sm text-xs font-[700] font-montserrat'>1 Item Delivered</span>
                                    <span className='text-left lg:text-sm text-xs font-[500] font-montserrat'>Package Delivered on 28th May , 2025</span>
                                </div>

                                <div className='flex flex-row gap-3 items-center'>
                                    <img src={confirm} alt="confirm" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='lg:text-sm text-xs font-[700] font-montserrat'>Order Confirmed</span>
                                        <span className='lg:text-sm text-xs font-[400] font-montserrat'>24 May , 2025</span>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-3 items-center'>
                                    <img src={confirm} alt="confirm" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='lg:text-sm text-xs font-[700] font-montserrat'>Order Confirmed</span>
                                        <span className='lg:text-sm text-xs font-[400] font-montserrat'>24 May , 2025</span>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-3 items-center'>
                                    <img src={confirm} alt="confirm" />
                                    <div className='flex flex-col gap-1 text-left'>
                                        <span className='lg:text-sm text-xs font-[700] font-montserrat'>Order Confirmed</span>
                                        <span className='lg:text-sm text-xs font-[400] font-montserrat'>24 May , 2025</span>
                                    </div>
                                </div>
                            </div>


                            <div className='flex items-start'>
                                <img src={top} alt="top" />
                            </div>


                        </div>
                    </div>
                </div>
                <div className='lg:w-[40%] w-full h-full flex flex-col gap-2'>
                    <div className='flex flex-col '>
                        <div className='p-3 rounded-[1px] text-left w-full bg-[#F6F6F6] border-b-2 border-[white]'>
                            <span className='lg:text-xl text-sm font-[600] font-montserrat'>Price Details</span>
                        </div>
                        <div className='flex flex-col gap-6 p-3 bg-[#F6F6F6]'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between w-full '>
                                    <span className='font-[400] lg:text-base text-sm font-montserrat'>Price (1 item)</span>
                                    <span className='font-[600] lg:text-base text-sm font-montserrat'>₹ 1,999</span>
                                </div>
                                <div className='flex justify-between w-full '>
                                    <span className='font-[400] lg:text-base text-sm font-montserrat'>Discount</span>
                                    <span className='font-[600] lg:text-base text-sm font-montserrat'>₹ 0.00</span>
                                </div>
                                <div className='flex justify-between w-full '>
                                    <span className='font-[400] lg:text-base text-sm font-montserrat'>Delivery Charges</span>
                                    <span className='font-[600] lg:text-base text-sm font-montserrat'>₹ 40</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full '>
                                <span className='font-[600] lg:text-xl text-base font-montserrat'>Total Amount</span>
                                <span className='font-[600] lg:text-xl text-base font-montserrat'>₹ 9,249</span>
                            </div>

                        </div>
                    </div>
                    <div className='flex p-3 min-w-min max-w-max bg-[#F6F6F6] justify-center items-center lg:text-sm text-xs font-[600] font-montserrat'>
                        DOWNLOAD INVOICE
                    </div>
                </div>
            </div>
            <div className='lg:pt-12 pt-6'>
                {isTab ? <FooterMob /> : <Footer />}

            </div>
        </div>
    )
}

export default OrderSummary