import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import banner1 from '../images/Home/banner1.png'
import bannermob from '../images/Home/bannermob.png'
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
import starmob from '../images/Home/startmob.png'
import combined from '../images/Home/combinedimg.png'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob';
import NavbarMob from '../components/NavbarMob';


function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({query:  '(max-width: 1024px)' });
    const [startIndex, setStartIndex] = useState(0);
    const [disableNext, setDisableNext] = useState(false); // Disable ">" button
    const [disablePrev, setDisablePrev] = useState(true); // Disable "<" button initially
    const navigate = useNavigate();
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    const items = [
        <div className='lg:h-[280px] h-[250px]  relative '>
            <img src={running} alt="running" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Running</div>
            </div>
        </div>,
        <div className='lg:h-[280px] h-[250px] relative'>
            <img src={basketball} alt="basketball" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Basketball</div>
            </div>
        </div>,
        <div className='lg:h-[280px] h-[250px]  relative'>
            <img src={football} alt="football" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Football</div>
            </div>
        </div>,
        <div className='lg:h-[280px] h-[250px]  relative'>
            <img src={running} alt="running" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end '>
                <div className='w-auto h-[35px] bg-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat'>Running</div>
            </div>
        </div>,
        <div className='h-[280px]  relative'>
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

    const fullimage = () =>{
        navigate('/fullimage');
    } 

    const productPage = () => {
        navigate('/products')
    }



    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full lg:h-[735px] md:h-[600px]  h-[565px] relative lg:mt-[175px] md:mt-[175px] mt-[120px]'>
                <img src={banner1} alt="banner1" className='w-full h-full md:block hidden' />
                <img src={bannermob} alt="bannermob" className='w-full h-full md:hidden' />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-3 items-center justify-center">
                    <span className="text-white lg:text-6xl text-3xl font-[800] font-montserrat">
                        ELEVATE YOUR<br /> GAME, STYLE ON!
                    </span>
                    <span className="text-white text-xl font-[500] font-montserrat lg:block hidden">
                        Discover cutting-edge apparel and accessories for every sport,
                        crafted for<br /> comfort, style, and unstoppable performance
                    </span>
                    <span className="text-white text-sm font-[500] font-montserrat lg:hidden">
                        Discover cutting-edge apparel and accessories for<br /> every sport,
                        crafted for comfort, style,<br /> and unstoppable performance
                    </span>
                </div>
            </div>
            <div className='w-full h-auto lg:px-12 px-3 lg:gap-12 gap-6 lg:pt-12 pt-6 flex flex-col'>
                <div className='flex flex-col gap-2 mt-3'>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Shop By Sport</span>
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
                    <div className=' grid-cols-3 w-full  gap-2 md:grid hidden'>
                        {items.slice(startIndex, startIndex + 3).map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className=' grid-cols-1 w-full  gap-2 md:hidden'>
                        {items.slice(startIndex, startIndex + 1).map((item, index) => (
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
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Popular Products</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full  gap-5 '>
                        <div className='flex flex-col gap-2 cursor-pointer' onClick={fullimage}>
                            <div className='lg:h-[382px] md:h-[400px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product1} alt="product1" />
                                <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-3  flex justify-end'>
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
                                <img src={product3} alt="product3" />
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


                        <div className='flex flex-col gap-2'>
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
                                <img src={product3} alt="product3" />
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

                <div className='w-full flex md:flex-row flex-col lg:gap-0 gap-3 lg:h-[600px] h-auto mt-3'>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={men} alt="men" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Men 's</span>
                            </div>
                            <img src={button} alt="button" className='cursor-pointer' onClick={productPage} />
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={women} alt="women" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>women ’s</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                </div>



                <div className='flex flex-col gap-6 mt-3'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Trending Products</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full  gap-5 '>
                        <div className='flex flex-col gap-2'>
                            <div className='lg:h-[382px] md:h-[400px] h-[330px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                <img src={product5} alt="product5" />
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
                                <img src={product6} alt="product6" />
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
                                <img src={product3} alt="product3" />
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


                        <div className='flex flex-col gap-2'>
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
                                <img src={product3} alt="product3" />
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



                <div className='w-full flex md:flex-row flex-col lg:gap-0 gap-3 lg:h-[600px] h-auto mt-3'>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={accessories} alt="accessories" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Accessories</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={kids} alt="kids" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Kid’s</span>
                            </div>
                            <img src={button} alt="button" />
                        </div>
                    </div>
                </div>


            </div>


            <div className="w-full h-auto lg:mt-12 mt-6 flex flex-col pb-12 gap-12">
                <div className="lg:h-[143px] h-[72px] bg-[#1A0136] w-full overflow-hidden relative flex items-center">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap items-center">
                        {/* Repeat the content multiple times for infinite scrolling */}
                        {Array.from({ length: 15 }).map((_, index) => (
                            <React.Fragment key={index}>
                                <img src={star} alt="star" className="md:inline-block hidden" />
                                <img src={starmob} alt="starmob" className='inline-block md:hidden' />
                                <span className="text-[white] lg:text-2xl md:text-xl text-sm font-[600] font-montserrat inline-block">
                                    Find your perfect fit for every activity
                                </span>
                                <img src={starmob} alt="starmob" className='inline-block md:hidden' />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col bg-[#F6F6F6] w-full lg:h-[380px] h-auto lg:gap-0 gap-3 lg:pb-12 pb-6'>
                    <div className='lg:w-[50%] w-full  lg:px-[10%] px-3 flex flex-col gap-3 justify-center  text-left lg:py-0 py-5'>
                        <span className='lg:text-3xl text-2xl font-[600] font-montserrat'>WE ELEVATE YOUR<br /> PERFORMANCE IN STYLE!</span>
                        <span className='lg:text-lg text-xs font-[400] font-montserrat'>"Combining cutting-edge design with ultimate<br /> comfort,
                            our sportswear keeps you moving,<br /> looking, and feeling your best—every step of the<br /> way."</span>
                        <span className='lg:w-[168px] w-[93px] lg:h-[46px] h-[30px] bg-[black] flex justify-center items-center text-[white] rounded-[8px] font-[600] lg:text-lg text-xs font-montserrat '>Shop Now</span>
                    </div>
                    <div className='lg:w-[50%] w-full  h-full lg:px-0 px-3'>
                        <img src={combined} alt="combined" className='w-full h-full' />
                    </div>

                </div>
            </div>

            {isTab ? <FooterMob /> : <Footer />}
        </div>
    )
}

export default Home
