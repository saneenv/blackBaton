import React,{useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom';
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import product from '../images/Cart/product.png'
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';

function Cart() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    const addresspage = () => {
        navigate('/address')
    }
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className=' h-[56px]  bg-[black] justify-center  lg:hidden flex items-center  fixed bottom-0 left-0 w-full text-base font-[600] font-montserrat text-[white] '>

                Place Order
            </div>
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-lg font-[700] font-montserrat text-left'>Shopping Bag</span>
                <div className='w-full flex lg:flex-row flex-col gap-8 lg:pb-12 pb-6'>
                    <div className='lg:w-[70%] w-full  h-auto flex flex-col gap-3'>
                        <div className='rounded-[5px] lg:h-[58px] h-auto border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-row lg:items-center items-start lg:py-0 py-3 lg:px-5 px-1 lg:gap-0 gap-3'>
                            <span className='lg:text-sm text-xs font-[400] font-montserrat text-left'>Deliver to :&nbsp;&nbsp;&nbsp;Gopu Ramesh Shersoft Software Company
                            </span>
                            <span className='lg:w-[10%] w-[30%] h-[30px] border-2 border-[black] rounded-[3.51px] flex justify-center items-center  lg:text-sm text-xs font-[400] font-montserrat cursor-pointer' onClick={addresspage}>
                                Change
                            </span>
                        </div>

                        <div className='rounded-[5px] lg:h-[58px] h-auto border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-row lg:items-center items-start lg:py-0 py-3 lg:px-5 px-1 lg:gap-0 gap-3'>
                            <span className='lg:text-sm text-xs font-[400] font-montserrat'>Available Offer :&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='lg:w-[10%] w-[30%] h-[30px] border-2 border-[black] rounded-[3.51px] flex justify-center items-center  lg:text-sm text-xs font-[400] font-montserrat cursor-pointer'>
                                Add
                            </span>
                        </div>


                        <div className='rounded-[5px] h-auto lg:px-5 px-1 py-5 border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-col   '>
                            <div className='flex flex-row  h-[115px]  gap-5 items-center'>
                                <div className='h-full w-[90px] bg-[white] rounded-[5px] p-3'>
                                    <img src={product} alt='product' style={{ width: '100%', height: '100%', mixBlendMode: 'multiply' }} />

                                </div>
                                <div className='h-full flex flex-col gap-2'>
                                    <span className='lg:text-base text-left text-sm font-[600] font-montserrat'>Kevin Durant Men's Basketball T-shirt
                                    </span>
                                    <span className='text-sm font-[400] font-montserrat text-left'>Qty: 1</span>
                                    <span className='text-lg font-[600] font-montserrat text-left'>₹1,999</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 items-end'>
                                <span className='text-sm font-[400] font-montserrat'>Delivery by Sat Dec 28</span>
                                <div className='lg:w-[50%] w-[30%] h-[36px] border-2 border-[#EAEAEC] rounded-[32px] flex flex-row justify-center items-center gap-3 '>
                                    <span className='font-[500] text-sm font-montserrat cursor-pointer'>-</span>
                                    <span className='font-[500] text-xl font-montserrat'>1</span>
                                    <span className='font-[500] text-sm font-montserrat cursor-pointer'>+</span>
                                </div>

                            </div>
                        </div>


                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] justify-between flex items-center lg:px-5 px-1'>
                            <span className='text-sm font-[400] font-montserrat'>Add More From Wishlist
                            </span>

                        </div>


                        <div className='rounded-[5px] h-[100px] border-2 border-[#EAEAEC] justify-end lg:flex hidden items-center lg:px-5 px-1 '>

                            <div className='h-[50px] w-[30%] bg-[black] rounded-[5px] flex justify-center items-center text-base font-[500] font-montserrat text-[white] cursor-pointer' >
                                Place Order
                            </div>
                        </div>
                    </div>


                    <div className='lg:w-[30%] w-full h-[321px] flex flex-col rounded-[2px] border-2 border-[#EAEAEC] lg:mb-0 mb-[25%]'>
                        <div className='w-full h-[18%] border-b-2 border-[#EAEAEC] px-3 flex justify-between items-center text-base font-[600] font-montserrat'>
                            Price Details
                        </div>

                        <div className='w-full h-[82%]   flex  flex-col px-3 gap-5'>

                            <ul className='border-2 border-black mt-5 text-[#F0F0F0]' />
                            <div className='flex flex-col gap-5 w-full'>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Price (1 item)</span>
                                    <span className='text-base font-[600] font-montserrat'>₹1,999</span>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Discount</span>
                                    <span className='text-base font-[600] font-montserrat'></span>

                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Delivery Charges</span>
                                    <span className='text-base font-[600] font-montserrat'>₹00.00</span>
                                </div>
                            </div>
                            <ul className="border-b-2 border-black border-dashed " />
                            <div className='w-full flex justify-between'>
                                <span className='text-base font-[600] font-montserrat'>Total Amount</span>
                                <span className='text-base font-[600] font-montserrat'>₹9,249</span>
                            </div>
                            <ul className="border-b-2 border-black border-dashed " />

                        </div>


                    </div>

                </div>
            </div>
            <div className='lg:flex hidden'>
                {isMobile ? <FooterMob /> : <Footer />}

            </div>
        </div>
    )
}

export default Cart