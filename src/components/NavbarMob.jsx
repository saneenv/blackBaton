import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import contact from '../images/Navbar/contact.png'
import mail from '../images/Navbar/mail.png'
import twitter from '../images/Navbar/twitter.png'
import facebook from '../images/Navbar/facebook.png'
import insta from '../images/Navbar/insta.png'
import dropdown from '../images/Navbar/dropdown.png'
import smallsearch from '../images/Navbar/smallsearch.png'
import cart from '../images/Navbar/cart.png'
import profile from '../images/Navbar/profile.png'
import logo from '../images/Navbar/logomob.png'


function NavbarMob() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
    const password = sessionStorage.getItem('password');
    console.log("pasworddddddd", password);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const accountPage = () => {
        navigate('/accountmob')
    }

    const homePage = () => {
        navigate('/')
        window.location.reload();
    }

    const cartpage = () => {
        navigate('/cart')
    }

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            navigate('/searchpage', { state: { filtered: searchQuery } });
        }
    };

    const mensubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 157, categoryName: "MEN'S" } });
    };

    const womensubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 158, categoryName: "WOMEN'S" } });
    };

    const kidssubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 159, categoryName: "KID'S" } });
    };

    const limitedsalesubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 160, categoryName: "LIMITED SALE" } });
    };

    const bestsellersubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 161, categoryName: "BEST SELLER" } });
    };

    const newarrival = (categoryId, categoryName) => {
        navigate('/subcategoryproducts', { state: { categoryId: 163, categoryName: 'NEW ARRIVAL' } });
    };

    const dashboardpage = () => {
        navigate('/dashboard');
    }

    return (
        <div className='w-full h-auto bg-[black] py-6 px-3 gap-6 flex flex-col fixed top-0 left-0 z-50'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-row gap-1 items-center'>
                    <img src={contact} alt="contact" />
                    <a href="tel:+919995028039">
                        <span className='text-xs font-[400] font-dmSans text-[#CACACA]'>+91 9995028039</span>
                    </a>
                </div>
                {/* <div className='flex flex-row gap-1 items-center'>
                    <img src={mail} alt="mail" />
                    <a href="mailto:Info.stillsclothing@gmail.com">
                    <span className='text-xs font-[400] font-dmSans text-[#CACACA]'>Info.stillsclothing@gmail.com</span>
                    </a>
                </div> */}
                <div className='flex flex-row gap-1'>
                    <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <a
                        href="https://www.instagram.com/black_baton?igsh=MXE0MG43cDV5ZHdrOQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                            <img src={insta} alt="insta" />
                        </div>
                    </a>
                </div>
            </div>


            <div className='flex justify-between items-center'>
                <div className=''>
                    <img src={dropdown} alt="dropdown" onClick={toggleSidebar} />
                </div>
                <img src={logo} alt="logo" onClick={homePage} />
                <div className='h-[41px] w-[60%]  flex flex-row'>
                    <div className='w-[20%] bg-[white] h-full flex justify-center items-center rounded-l-[7px]' onClick={handleSearch}>
                        <img src={smallsearch} alt="smallsearch" />
                    </div>
                    <div className='w-[80%]  h-full border-none '>
                        <input
                            type="text"
                            className='w-full h-full outline-none  px-4 rounded-r-[7px]'
                            placeholder='Search Products...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>

                </div>
                <div className='flex flex-row gap-2'>
                    <img src={cart} alt="cart" onClick={cartpage} />
                    <img src={profile} alt="profile" onClick={accountPage} />

                </div>


            </div>

            {/* Sidebar Component */}
            {isSidebarOpen && (
                <>
                    {/* Background Blur */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[2px] z-40"
                        onClick={toggleSidebar}  // Clicking outside the sidebar will close it
                    ></div>
                    <div className={`fixed top-0 left-0 w-[250px] h-full bg-[white] text-[black] z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <button onClick={toggleSidebar} className="text-white w-full p-2 flex justify-end items-end mt-2">
                            <div className='w-[25px] h-[25px] rounded-lg flex justify-center items-center bg-[red] text-white font-[600] text-lg'>X</div>
                        </button>
                        <ul className='mt-5'>
                            {/* <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left'>All Categories</li> */}
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { mensubcategorypage(); setIsSidebarOpen(false); }}>Men</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { womensubcategorypage(); setIsSidebarOpen(false); }}>Women</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { kidssubcategorypage(); setIsSidebarOpen(false); }}>Kids</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { limitedsalesubcategorypage(); setIsSidebarOpen(false); }}>LIMITED SALE</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { bestsellersubcategorypage(); setIsSidebarOpen(false); }}>BEST SELLER</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={() => { newarrival(); setIsSidebarOpen(false); }}>NEW ARRIVALS</li>
                            {password === "san@123" && (
                                <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-sm font-[600] font-dmSans text-left' onClick={dashboardpage}>DASHBOARD</li>
                            )}
                        </ul>


                    </div>
                </>
            )}
        </div>
    )
}

export default NavbarMob
