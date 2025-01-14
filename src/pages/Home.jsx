import React, { useState } from 'react'
import Navbar from '../components/Navbar'
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


function Home() {
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
            <div className='w-full h-auto px-12 gap-12 py-12 flex flex-col'>
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-6'>
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


            </div>
        </div>
    )
}

export default Home
