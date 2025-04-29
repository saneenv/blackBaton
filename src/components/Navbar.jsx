import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import contact from '../images/Navbar/contact.png'
import mail from '../images/Navbar/mail.png'
import twitter from '../images/Navbar/twitter.png'
import facebook from '../images/Navbar/facebook.png'
import insta from '../images/Navbar/insta.png'
import search from '../images/Navbar/search.png'
import cart from '../images/Navbar/cart.png'
import profile from '../images/Navbar/profile.png'
import bars from '../images/Navbar/Bars.png'
import logo from '../images/Navbar/logo.png'
import dashboardpageimg from '../images/Navbar/Dashboard.png'


function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [categories, setCategories] = useState([]);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const [searchQuery, setSearchQuery] = useState('');
    const password = sessionStorage.getItem('password');
    console.log("pasworddddddd", password);

    const allowedCategoryIds = [
        4,    // T SHIRT
        5,    // JACKET
        6,    // SHORTS
        7,    // TRACK
        219,  // BOTTLE
        301,  // ACCESSORIES
        358,  // CARGO TRACK
        359,  // CARGO SHORTS
        218,  // FULL SLEEVE
        450,  // BOYS TRACK
        448,  // BOYS SHORTS
        616   // POLO T SHIRT
      ];

 

    // Fetch categories from API
    useEffect(() => {
        fetch(`${apiBaseUrl}/getCategories/BLACKBATON_2526`)
            .then(response => response.json())
            .then(data => {
                // Filter categories to only include allowed ones
                const filteredCategories = data.filter(category =>
                    allowedCategoryIds.includes(category.Id)
                );
                setCategories(filteredCategories);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, [apiBaseUrl]);


    const navigate = useNavigate();
    const cartpage = () => {
        navigate('/cart')
    }

    const accountpage = () => {
        navigate('/account');
    }

    const dashboardpage = () => {
        navigate('/dashboard');
    }

    const homePage = () => {
        navigate('/')
        window.location.reload();
    }

    const productPage = (categoryId, categoryName) => {
        navigate('/products', { state: { categoryId, categoryName } });
    };

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

    return (
        <div className='flex flex-col'>
            <div className='w-full h-[120px] bg-[#000000] border-b-2 border-[#B2B2B2] flex flex-col lg:px-12 px-5 gap-3 fixed top-0 left-0 z-50'>
                <div className='w-full h-[40%]  flex justify-between items-end'>
                    <div className='flex flex-row gap-5 items-center'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={contact} alt="contact" />
                            <a href="tel:+919995028039">
                                <span className='text-[#CACACA] font-[400] font-dmSans text-sm hover:text-[red] cursor-pointer'>
                                    +91 9995028039
                                </span>
                            </a>

                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={mail} alt="mail" />
                            <a href="mailto:Info.stillsclothing@gmail.com">
                                <span className='text-[#CACACA] font-[400] font-dmSans text-sm hover:text-[red] cursor-pointer'>
                                    Info.stillsclothing@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>


                    <div className='flex flex-row gap-2'>
                        <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] hover:bg-[red] flex justify-center items-center cursor-pointer'>
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] hover:bg-[red] flex justify-center items-center cursor-pointer'>
                            <img src={facebook} alt="facebook" />
                        </div>
                        <a
                            href="https://www.instagram.com/black_baton?igsh=MXE0MG43cDV5ZHdrOQ%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='w-[25px] h-[25px] rounded-full bg-[#FFFFFF] hover:bg-[red] flex justify-center items-center cursor-pointer'>
                                <img src={insta} alt="insta" />
                            </div>
                        </a>

                    </div>
                </div>
                <div className='w-full h-[60%]  flex justify-between items-center  '>
                    <img src={logo} alt="logo" className='cursor-pointer' onClick={homePage} />
                    <div className='w-[50%] h-[70%] rounded-[10px] bg-[#FFFFFF] flex flex-row'>
                        {/* <div className='h-full w-[25%]  flex flex-row lg:gap-5 gap-2 justify-center items-center border-r-2 border-[#B2B2B2] cursor-pointer'>
                            <span className='font-[400] text-sm font-dmSans'>All Category</span>
                            <img src={arrow} alt="arrow" />
                        </div> */}
                        <div className='h-full w-[90%]  border-r-2 border-[#B2B2B2]'>
                            <input
                                type="text"
                                className='w-full h-full font-dmSans pl-5 outline-none rounded-l-[10px]'
                                placeholder='Search Products...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                        </div>
                        <div className='h-full w-[10%]  flex justify-center items-center cursor-pointer' onClick={handleSearch}>
                            <img src={search} alt="search" />
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row gap-2 cursor-pointer' onClick={cartpage}>
                            <img src={cart} alt="cart" />
                            <span className='text-sm font-[400] font-dmSans text-[#CACACA] hover:text-[red]'>Cart</span>
                        </div>
                        <div className='flex flex-row border-r-2 border-[#B2B2B2]'>

                        </div>
                        <div className='flex flex-row gap-2 cursor-pointer' onClick={accountpage}>
                            <img src={profile} alt="profile" />
                            <span className='text-sm font-[400] font-dmSans text-[#CACACA] hover:text-[red]'>Account</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full h-[55px] bg-[#000000] flex justify-between items-center lg:px-12 px-5 fixed top-[120px] left-0 z-40'>
                <div className='flex flex-row lg:gap-12 gap-5'>
                    <div
                        className="relative flex flex-row gap-2 cursor-pointer"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <img src={bars} alt="bars" />
                        <span className="font-[400] text-sm font-dmSans text-[white] hover:text-[red]">All Categories</span>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute top-6 left-0 w-[220px] max-h-[350px] overflow-y-auto bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl border border-purple-300 rounded-xl p-2 z-50">
                                <ul className="text-black">
                                    {categories.length > 0 ? (
                                        categories.map(category => (
                                            <li
                                                key={category.Id}
                                                className="p-3 mb-1 rounded-lg bg-white hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                                                onClick={() => productPage(category.Id, category.Name)}
                                            >
                                                {category.Name}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-gray-500">Loading...</li>
                                    )}
                                </ul>
                            </div>
                        )}

                    </div>
                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' onClick={mensubcategorypage}>Men</span>
                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' onClick={womensubcategorypage}>Women</span>

                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' onClick={kidssubcategorypage}>Kids</span>


                </div>
                {/* <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' >Dashboard</span> */}
                {password === "admin@blackbaton" && (
                    <img src={dashboardpageimg} alt="dashboardpageimg" onClick={dashboardpage} className='cursor-pointer' />
                )}
                <div className='flex flex-row lg:gap-12 gap-5'>

                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red] ' onClick={limitedsalesubcategorypage}>LIMITED SALE</span>
                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' onClick={bestsellersubcategorypage}>Best Seller</span>

                    <span className='font-[400] text-sm font-dmSans text-[white] cursor-pointer hover:text-[red]' onClick={newarrival}>New Arrival</span>


                </div>
            </div>
        </div>
    )
}

export default Navbar