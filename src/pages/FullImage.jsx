import React,{useEffect} from 'react'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import top from '../images/FullImage/top.png'
import down from '../images/FullImage/down.png'
import sideimage1 from '../images/FullImage/sideimage1.png'
import sideimage2 from '../images/FullImage/sideimage2.png'
import sideimage3 from '../images/FullImage/sideimage3.png'
import mainimage from '../images/FullImage/mainimage.png'
import star from '../images/FullImage/star.png'
import message from '../images/FullImage/message.png'
import cart1 from '../images/FullImage/cart.png'
import payment from '../images/FullImage/payment.png'
import line from '../images/Home/line.png'
import product1 from '../images/Home/product1.png'
import product2 from '../images/Home/product2.png'
import product3 from '../images/Home/product3.png'
import product4 from '../images/Home/product4.png'
import heart from '../images/Home/heart.png'
import cart from '../images/Home/cart.png'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import fit from '../images/FullImage/Fit.png'
import shipping from '../images/FullImage/shipping.png'
import returns from '../images/FullImage/Returns.png'




function FullImage() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const home = () => {
        navigate('/')
    }


    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] pb-12'>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='lg:text-base text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={home}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='lg:text-base text-xs font-[400] font-montserrat text-[#3C4242]'>Stride T-shirt</span>
                </div>

                <div className='w-full flex lg:flex-row flex-col lg:h-[689px] h-auto lg:gap-0 gap-8'>
                    <div className='flex flex-row gap-4 lg:w-[50%] w-full h-full'>
                        <div className='w-[25%] h-full lg:flex hidden flex-col justify-center items-center gap-6'>
                            <div className='w-[70%] h-[100px] rounded-[10px] bg-[#EEEEEE] flex justify-center items-center'>
                                <img src={sideimage1} alt="sideimage1" />
                            </div>
                            <div className='w-[70%] h-[100px] rounded-[10px] bg-[#EEEEEE] flex justify-center items-center'>
                                <img src={sideimage2} alt="sideimage2" />
                            </div>
                            <div className='w-[70%] h-[100px] rounded-[10px] bg-[#EEEEEE] flex justify-center items-center'>
                                <img src={sideimage3} alt="sideimage3" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='w-[35px] h-[35px] rounded-full border-2 border-[black] flex justify-center items-center'>
                                    <img src={top} alt="top" />
                                </div>
                                <div className='w-[35px] h-[35px] rounded-full bg-[black] flex justify-center items-center'>
                                    <img src={down} alt="down" />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[75%] w-full h-full'>
                            <img src={mainimage} alt="mainimage" className='w-full h-full' />
                        </div>

                    </div>
                    <div className='flex flex-col lg:gap-10 gap-5 lg:w-[50%] w-full h-full lg:px-[4%] px-0 '>
                        <span className='lg:text-4xl text-xl font-[600] font-montserrat text-left'>Kevin Durant
                            Men's Basketball T-shirt</span>
                        <div className='flex flex-row gap-6'>
                            <div className='flex flex-row gap-2'>
                                <img src={star} alt="star" />
                                <span className='lg:text-lg text-sm font-[400] font-montserrat text-[#807D7E]'>4.5</span>
                            </div>

                            <div className='lg:flex flex-row gap-2 hidden'>
                                <img src={message} alt="message" />
                                <span className='lg:text-lg text-sm font-[400] font-montserrat text-[#807D7E] text-left'>120 comment</span>

                            </div>
                        </div>
                        <div className='lg:hidden flex flex-row gap-3 items-center'>
                            <span className='font-[400] font-montserrat text-sm'>MRP</span>
                            <span className='font-[600] font-montserrat text-base'>₹ 1,499.00</span>

                        </div>



                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-sm font-[500] text-[#3F4646] text-left'>Select Size</span>
                            <div className='flex flex-row gap-5'>
                                <div className='w-[38px] h-[38px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242]'>
                                    XS
                                </div>
                                <div className='w-[38px] h-[38px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242]'>
                                    X
                                </div>
                                <div className='w-[38px] h-[38px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242]'>
                                    M
                                </div>
                                <div className='w-[38px] h-[38px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242]'>
                                    L
                                </div>
                                <div className='w-[38px] h-[38px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242]'>
                                    XL
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-sm font-[600] text-[black] text-left'>Colours Available </span>
                            <div className='flex flex-row gap-5'>
                                <div className='w-[25px] h-[25px] rounded-full bg-[#3C4242]  '>

                                </div>
                                <div className='w-[25px] h-[25px] rounded-full  bg-[#EDD146]'>

                                </div>
                                <div className='w-[25px] h-[25px] rounded-full  bg-[#EB84B0]'>

                                </div>
                                <div className='w-[25px] h-[25px] rounded-full  bg-[#9C1F35]'>

                                </div>

                            </div>
                        </div>

                        <div className='flex flex-row gap-8'>
                            <div className='lg:w-[35%] w-full h-[46px] bg-[black] rounded-[8px] flex flex-row gap-2 items-center justify-center'>
                                <img src={cart1} alt="cart" />
                                <span className='lg:text-lg text-base font-[600] font-montserrat text-[white]'>Add to cart</span>
                            </div>
                            <div className='w-[25%] h-[46px] border-2 border-[black] rounded-[8px] lg:flex hidden items-center justify-center'>
                                <span className='text-lg font-[600] font-montserrat'>$500</span>
                            </div>
                        </div>

                        <ul className='border-2 border-[#BEBCBD] mt-3 lg:flex hidden' />

                        <div className='grid grid-cols-2 lg:gap-6 gap-3'>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={payment} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Secure payment</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={fit} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Size & Fit</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={shipping} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Free shipping</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={returns} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Free Shipping & Returns</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-row gap-4  items-center'>
                        <img src={line} alt="line" />
                        <span className='lg:text-xl text-base font-[600] font-montserrat'>Product Desciption</span>
                    </div>
                    <span className='lg:text-lg text-sm font-[500] text-left font-montserrat'>Our KD signature apparel collection celebrates the next generation of do-it-all athletes with
                        pieces you can wear anywhere. This relaxed-fit
                        tee is made from soft midweight cotton. The graphics feature the official stamp of approval from Easy Money.</span>
                     <div className='lg:w-1/2 w-full h-[190px] bg-[#F6F6F6]'>
                         <div className='flex flex-col w-full h-full'>
                               <div className='w-full h-1/2 border-b-2 border-[#BEBCBD]'>
                                 <div className='grid grid-cols-3 w-full h-full'>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Fabric</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Bio-washed Cotton</span>
                                    </div>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Pattern</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Printed</span>
                                    </div>
                                    <div className=' flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Fit</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Regular-fit</span>
                                    </div>
                                 </div>
                               </div>
                               <div className='w-full h-1/2'>
                               <div className='grid grid-cols-3 w-full h-full'>
                               <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Neck</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Round Neck</span>
                                    </div>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Sleeve</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Half-sleeves</span>
                                    </div>
                                    <div className=' flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Style</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Casual Wear</span>
                                    </div>
                                 </div>
                               </div>
                         </div>
                     </div>

                </div>

                <div className='flex flex-col gap-6 lg:pb-12 pb-6'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Similar Products</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 w-full  gap-5 '>
                        <div className='flex flex-col gap-2 cursor-pointer'>
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product2} alt="product2" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product2} alt="product2" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
                            <div className='lg:h-[382px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
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
            {isMobile ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default FullImage