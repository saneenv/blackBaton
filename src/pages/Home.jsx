import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useMediaQuery } from 'react-responsive';
import banner1 from '../images/Home/banner1.png'
import line from '../images/Home/line.png'
import running from '../images/Home/running.png'
import basketball from '../images/Home/basketball.png'
import football from '../images/Home/football.png'
import cart from '../images/Home/cart.png'
import product1 from '../images/Home/product1.png'
import product2 from '../images/Home/product2.png'
import product3 from '../images/Home/product3.png'
import product4 from '../images/Home/product4.png'
import heart from '../images/Home/heart.png'
import men from '../images/Home/men.png'
import women from '../images/Home/women.png'
import button from '../images/Home/button.png'
import product5 from '../images/Home/product5.png'
import product6 from '../images/Home/product6.png'
import accessories from '../images/Home/accessories.png'
import kids from '../images/Home/kids.png'
import star from '../images/Home/Star.png'
import combined from '../images/Home/combinedimg.png'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob';


function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [startIndex, setStartIndex] = useState(0);
    const [disableNext, setDisableNext] = useState(false); // Disable ">" button
    const [disablePrev, setDisablePrev] = useState(true); // Disable "<" button initially
    const items = [
        <div className='h-[280px] bg-[yellow] relative '>
            <img src={running} alt="running" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Running</div>
            </div>
        </div>,
        <div className='h-[280px] bg-[#3aba84]  relative'>
            <img src={basketball} alt="basketball" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Basketball</div>
            </div>
        </div>,
        <div className='h-[280px] bg-[#8534ee] relative'>
            <img src={football} alt="football" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Football</div>
            </div>
        </div>,
        <div className='h-[280px] bg-[red] relative'>
            <img src={running} alt="running" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Running</div>
            </div>
        </div>,
        <div className='h-[280px] bg-[green] relative'>
            <img src={basketball} alt="basketball" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Basketball</div>
            </div>
        </div>
    ];

    // Function to move to the next set of items
    const nextSlide = () => {
        if (startIndex < items.length - 3) {
            setStartIndex((prevIndex) => prevIndex + 1);
            setDisablePrev(false); // Enable "<" button
            if (startIndex + 1 === items.length - 3) {
                setDisableNext(true); // Disable ">" button if we reach the last set
            }
        }
    };

    // Function to move to the previous set of items
    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
            setDisableNext(false); // Enable ">" button
            if (startIndex - 1 === 0) {
                setDisablePrev(true); // Disable "<" button if we reach the first set
            }
        }
    };


    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='w-full h-[735px] relative mt-[175px]'>
                <img src={banner1} alt="banner1" className='w-full h-full' />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-3 items-center justify-center">
                    <span className="text-white text-6xl font-[800] font-montserrat">
                        ELEVATE YOUR<br /> GAME, STYLE ON!
                    </span>
                    <span className="text-white text-xl font-[500] font-montserrat">
                        Discover cutting-edge apparel and accessories for every sport,
                        crafted for<br /> comfort, style, and unstoppable performance
                    </span>
                </div>
            </div>
            <div className='w-full h-auto px-12 gap-12 pt-12 flex flex-col'>
                <div className='flex flex-col gap-2 mt-3'>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='text-xl font-[600] font-montserrat'>Shop By Sport</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center '>
                            <div
                                className={`w-[41px] h-[41px] bg-[#F5F5F5] rounded-full flex justify-center items-center font-bold cursor-pointer ${disablePrev ? 'opacity-50 cursor-not-allowed text-white' : ''}`} onClick={prevSlide}
                                disabled={disableNext}>
                                {"<"}
                            </div>
                            <div
                                className={`w-[41px] h-[41px] bg-[#F5F5F5] rounded-full flex justify-center items-center font-bold cursor-pointer ${disableNext ? 'opacity-50 cursor-not-allowed text-white' : ''}`} onClick={nextSlide}
                                disabled={disablePrev}>
                                {">"}
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 w-full  gap-2 '>
                        {items.slice(startIndex, startIndex + 3).map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-3'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='text-xl font-[600] font-montserrat'>Popular Products</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-full  gap-5 '>
                        <div className='flex flex-col gap-2'>
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product2} alt="product2" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product2} alt="product2" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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

                <div className='w-full flex flex-row h-[600px] mt-3'>
                    <div className='w-[50%] h-full relative'>
                        <img src={men} alt="men" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center items-center'>
                            <div className='w-auto px-3 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='text-5xl font-[800] font-montserrat text-[white]'>Men 's</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                    <div className='w-[50%] h-full relative'>
                        <img src={women} alt="women" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center items-center'>
                            <div className='w-auto px-3 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='text-5xl font-[800] font-montserrat text-[white]'>women ’s</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                </div>



                <div className='flex flex-col gap-6 mt-3'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='text-xl font-[600] font-montserrat'>Trending Products</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-full  gap-5 '>
                        <div className='flex flex-col gap-2'>
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product5} alt="product5" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product6} alt="product6" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product2} alt="product2" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product3} alt="product3" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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
                            <div className='h-[382px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product4} alt="product4" />
                                <div className='absolute top-0 left-0 w-full h-full px-6 py-6 flex justify-end'>
                                    <div className='w-[33px] h-[33px] rounded-full bg-[white] flex justify-center items-center'>
                                        <img src={heart} alt="heart" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-base font-[600] font-montserrat text-left'>Stride T-shirt</span>
                                    <span className='text-sm font-[500] font-montserrat text-left text-[#807D7E]'>Short-Sleeve Running Top</span>
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



                <div className='w-full flex flex-row h-[600px] mt-3'>
                    <div className='w-[50%] h-full relative'>
                        <img src={accessories} alt="accessories" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center items-center'>
                            <div className='w-auto px-3 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='text-5xl font-[800] font-montserrat text-[white]'>Accessories</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                    <div className='w-[50%] h-full relative'>
                        <img src={kids} alt="kids" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-3 justify-center items-center'>
                            <div className='w-auto px-3 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='text-5xl font-[800] font-montserrat text-[white]'>Kid’s</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                </div>


            </div>


            <div className="w-full h-auto mt-12 flex flex-col pb-12 gap-12">
                <div className="h-[143px] bg-[#1A0136] w-full overflow-hidden relative flex items-center">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap">
                        {/* Repeat the content multiple times for infinite scrolling */}
                        {Array.from({ length: 15 }).map((_, index) => (
                            <React.Fragment key={index}>
                                <img src={star} alt="star" className="inline-block" />
                                <span className="text-[white] text-2xl font-[600] font-montserrat inline-block">
                                    Find your perfect fit for every activity
                                </span>
                                <img src={star} alt="star" className="inline-block" />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className='flex flex-row w-full h-[380px] pb-12'>
                     <div className='w-[50%] bg-[#F6F6F6] px-[10%] flex flex-col gap-3 justify-center  text-left'>
                         <span className='text-3xl font-[600] font-montserrat'>WE ELEVATE YOUR<br /> PERFORMANCE IN STYLE!</span>
                         <span className='text-lg font-[400] font-montserrat'>"Combining cutting-edge design with ultimate<br /> comfort,
                             our sportswear keeps you moving,<br /> looking, and feeling your best—every step of the<br /> way."</span>
                             <span className='w-[168px] h-[46px] bg-[black] flex justify-center items-center text-[white] rounded-[8px] font-[600] text-lg font-montserrat '>Shop Now</span>
                     </div>
                     <div className='w-[50%]  h-full'>
                          <img src={combined} alt="combined" className='w-full h-full' />
                     </div>

                </div>
            </div>

            {isMobile ? <FooterMob /> : <Footer />}
        </div>
    )
}

export default Home
