import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import product1 from '../images/Home/product2.webp'
import { useSelector } from 'react-redux';
import heart from '../images/Home/delete.png'




function Wishlist() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    const [wishlistItems, setWishlistItems] = useState([]);
    const [offerPrices, setOfferPrices] = useState({});

    const userId = useSelector((state) => state.user.id);
    const LedCode = sessionStorage.getItem('LedCode');

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const ledCodeOrUserId = LedCode || userId;
                console.log("Fetching Cart Items for:", ledCodeOrUserId);
                const response = await axios.get(`${apiBaseUrl}/wishlist/items/BLACKBATON_2526/${ledCodeOrUserId}`);
                if (response.data.success) {
                    setWishlistItems(response.data.items);
                }
            } catch (error) {
                console.error("Error fetching wishlist data:", error);
            }
        };
        fetchWishlist();
    }, [LedCode, apiBaseUrl, userId]);

    const deleteWishlistItem = async (id) => {
        try {
            const response = await axios.delete(`${apiBaseUrl}/wishlist/delete/BLACKBATON_2526/${id}`);
            if (response.data.success) {
                setWishlistItems(prevItems => prevItems.filter(item => item.ID !== id));
            }
        } catch (error) {
            console.error("Error deleting wishlist item:", error);
        }
    };
    
    useEffect(() => {
        const fetchOfferPrices = async () => {
            const prices = {};
            for (const item of wishlistItems) {
                try {
                    const res = await fetch(`${apiBaseUrl}/getOfferByItemId/${item.ID}`);
                    if (res.ok) {
                        const data = await res.json();
                        prices[item.ID] = data.OfferPrice;
                    }
                } catch (err) {
                    console.error(`Error fetching offer for item ${item.ID}`, err);
                }
            }
            setOfferPrices(prices);
        };

        if (wishlistItems.length > 0) {
            fetchOfferPrices();
        }
    }, [wishlistItems]);


    const location = useLocation();


    const { filtered } = location.state || {};
    console.log("filtered:", filtered);
    const navigate = useNavigate();



    const fullimage = (id, itemName) => {
        navigate('/fullimage', { state: { id, itemName } });
    };

    const homePage = () => {
        navigate('/')
    }
    const accountPage = () => {
        navigate('/accountmob')
    }

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] pb-12' >
                <div className='flex justify-start items-center'>
                    <div className='flex flex-row gap-2 items-center mt-3 md:hidden '>
                        <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                        <span className='text-[#828282]'>{">"}</span>
                        <span className='text-xs font-[400] font-montserrat text-[#3C4242]' onClick={accountPage}>Account</span>
                        <span className='text-[#828282]'>{">"}</span>
                        <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>Wishlist</span>

                    </div>

                    <div className='md:flex flex-row gap-2 items-center mt-3 hidden '>

                        <span className='text-3xl font-[800] font-montserrat text-[black]'>Wishlist</span>

                    </div>


                </div>

                <div className='pb-12 flex flex-row gap-5'>

                    <div
                        className='grid w-full gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'
                    >
                        {wishlistItems.map((item) => (
                            <div key={item.ID} className='flex flex-col gap-2 cursor-pointer' onClick={() => fullimage(item.ID, item.ItemName)}>
                                <div className='lg:h-[382px] md:h-[300px] h-[200px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                    <img
                                        src={`${apiLocalUrl}/uploads/${item.ID}.jpg?v=${Date.now()}`}
                                        alt={item.ItemName}
                                        onError={(e) => { e.target.onerror = null; e.target.src = product1; }}
                                        className='mix-blend-multiply w-full h-full'
                                    />

                                    <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-2 flex justify-end'>
                                        <div
                                            className='lg:w-[33px] w-[23px] lg:h-[33px] h-[23px] rounded-full bg-[white] hover:bg-[red] flex justify-center items-center cursor-pointer'
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents full image navigation
                                                deleteWishlistItem(item.ID);
                                            }}
                                        >
                                            <img src={heart} alt="delete" />
                                        </div>
                                    </div>



                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <span className='lg:text-base text-xs font-[600] font-montserrat text-left'>{item.ItemName}</span>


                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <div className='lg:w-[84px] lg:h-[37px] w-[70px] h-[30px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                            ₹{item.MRP}
                                        </div>
                                        <span className="text-sm font-montserrat lg:flex hidden text-nowrap">
                                            Offer Price:
                                            <span className="line-through text-gray-500 ml-1">₹{item.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹{offerPrices[item.ID] || item.MRP}</span>
                                        </span>
                                        <span className="text-sm font-montserrat lg:hidden flex text-nowrap">

                                            <span className="line-through text-gray-500 ml-1">₹{item.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹{offerPrices[item.ID] || item.MRP}</span>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>


            {isTab ? <FooterMob /> : <Footer />}
        </div >

    )
}

export default Wishlist