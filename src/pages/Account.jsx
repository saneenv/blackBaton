import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';
import line from '../images/Home/line.png'
import orders from '../images/Account/orders.png'
import wishlist from '../images/Account/wishlist.png'
import myinfo from '../images/Account/info.png'
import signout from '../images/Account/signout.png'
import MyInfo from '../components/MyInfo';
import MyOrders from '../components/MyOrders';
import Wishlist from '../components/Wishlist';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/Slices/UserSlice';


function Account() {
    const [activeComponent, setActiveComponent] = useState("orders");
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    const dispatch = useDispatch();
    const LedName = sessionStorage.getItem('loginName');

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const home = () => {
        navigate('/')
    }

    const loginPage = () => {
        sessionStorage.removeItem('loginId');
        sessionStorage.removeItem('loginName');
        sessionStorage.removeItem('loginEmail');
        sessionStorage.removeItem('LedCode');


        dispatch(clearUser());
        navigate('/login');
    }

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] pb-12'>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='lg:text-base text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={home}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='lg:text-base text-xs font-[400] font-montserrat text-[#3C4242]'>Account</span>
                </div>

                <div className='flex flex-row w-full h-auto lg:gap-12 md:gap-4'>
                    <div className='w-[35%] flex flex-col gap-6'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row gap-2'>
                                <img src={line} alt="line" />
                                <span className='text-3xl font-[700] font-montserrat'>Hello {LedName}</span>
                            </div>
                            <span className='text-sm font-[400] text-[#807D7E] font-montserrat text-left'>Welcome to your Account</span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div
                                className={`w-full flex px-6 py-3 flex-row gap-4 items-center cursor-pointer ${activeComponent === "orders"
                                    ? "bg-[#F6F6F6] border-l-4 border-[black]"
                                    : ""
                                    }`}
                                onClick={() => setActiveComponent("orders")}
                            >
                                <img src={orders} alt="orders" />
                                <span
                                    className={`text-lg font-[600] font-montserrat ${activeComponent === "orders" ? "text-[black]" : "text-[#807D7E]"
                                        }`}
                                >
                                    My orders
                                </span>
                            </div>
                            {/* <div className={`w-full flex px-6 py-3 flex-row gap-4  items-center cursor-pointer ${activeComponent === "wishlist"
                                ? "bg-[#F6F6F6] border-l-4 border-[black]"
                                : ""
                                }`}
                                onClick={() => setActiveComponent("wishlist")}
                            >
                                <img src={wishlist} alt="wishlist" />
                                <span className={`text-lg font-[600] font-montserrat ${activeComponent === "wishlist" ? "text-[black]" : "text-[#807D7E]"
                                    }`}
                                >
                                    Wishlist
                                </span>
                            </div> */}
                            <div
                                className={`w-full flex px-6 py-3 flex-row gap-4 items-center cursor-pointer ${activeComponent === "info"
                                    ? "bg-[#F6F6F6] border-l-4 border-[black]"
                                    : ""
                                    }`}
                                onClick={() => setActiveComponent("info")}
                            >
                                <img src={myinfo} alt="myinfo" />
                                <span
                                    className={`text-lg font-[600] font-montserrat ${activeComponent === "info" ? "text-[black]" : "text-[#807D7E]"
                                        }`}
                                >
                                    My Info
                                </span>
                            </div>
                            <div className='w-full flex px-6 py-3 flex-row gap-4  items-center cursor-pointer' onClick={loginPage}>
                                <img src={signout} alt="signout" />
                                <span className='text-lg font-[600] font-montserrat text-[#807D7E]'>Sign out</span>
                            </div>

                        </div>
                    </div>
                    <div className='w-[65%] h-auto lg:pb-12 md:pb-[15%]' >
                        {activeComponent === "orders" && <MyOrders />}
                        {activeComponent === "wishlist" && <Wishlist />}
                        {activeComponent === "info" && <MyInfo />}
                    </div>

                </div>

            </div>
            <div className='pt-12'>
                {isTab ? <FooterMob /> : <Footer />}

            </div>

        </div>
    )
}

export default Account