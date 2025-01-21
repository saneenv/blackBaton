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



function NavbarMob() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate()

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const accountPage = () => {
        navigate('/accountmob')
    }


    return (
        <div className='w-full h-auto bg-[black] py-6 px-3 gap-6 flex flex-col fixed top-0 left-0 z-50'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-row gap-1'>
                    <img src={contact} alt="contact" />
                    <span className='text-xs font-[400] font-dmSans text-[#CACACA]'>1234567890</span>
                </div>
                <div className='flex flex-row gap-1'>
                    <img src={mail} alt="mail" />
                    <span className='text-xs font-[400] font-dmSans text-[#CACACA]'>Blackbatton@gmail.com</span>
                </div>
                <div className='flex flex-row gap-1'>
                    <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className='w-[19px] h-[19px] rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={insta} alt="insta" />
                    </div>
                </div>
            </div>


            <div className='flex justify-between items-center'>
                <div className=''>
                    <img src={dropdown} alt="dropdown" onClick={toggleSidebar} />
                </div>
                <div className='h-[41px] w-[60%]  flex flex-row'>
                    <div className='w-[20%] bg-[white] h-full flex justify-center items-center rounded-l-[7px]'>
                        <img src={smallsearch} alt="smallsearch" />
                    </div>
                    <div className='w-[80%]  h-full border-none '>
                        <input type="text" className='w-full h-full outline-none  px-4 rounded-r-[7px]' placeholder='Search Products...' />
                    </div>

                </div>
                <div className=''>
                    <img src={cart} alt="cart" />
                </div>

                <div className='' onClick={accountPage}>
                    <img src={profile} alt="profile" />
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
                            <div className='border-2 border-[white] px-1 bg-[#E22E37] hover:bg-gray-700'>X</div>
                        </button>
                        <ul className='mt-5'>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >All Categories</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >Men</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >Women</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >Kids</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >LIMITED SALE</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >BEST SELLER</li>
                            <li className='p-4 hover:bg-gray-700 cursor-pointer hover:text-[white] text-base font-[600] font-dmSans text-left' >NEW ARRIVALS</li>

                        </ul>

                    </div>
                </>
            )}
        </div>
    )
}

export default NavbarMob
