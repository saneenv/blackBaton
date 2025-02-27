import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import filter from '../images/Products/filter.png'
import product1 from '../images/Home/product2.png'
import heart from '../images/Home/heart.png'
// import cart from '../images/Home/cart.png'
import forward from '../images/Products/forwardpng.png'
import top from '../images/Products/top.png'
import Filter from '../components/Filter'


function SubCatProducts() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });

    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [minPrice, setMinPrice] = useState(70); // Minimum price
    const [maxPrice, setMaxPrice] = useState(600); // Maximum price
    const [showFilter, setShowFilter] = useState(false);
    const [isPriceExpanded, setPriceExpanded] = useState(true);
    const [isColorsExpanded, setIsColorsExpanded] = useState(true);
    const [isSizeExpanded, setIsSizeExpanded] = useState(true);
    const [isDressExpanded, setIsDressExpanded] = useState(true);
    const [showFilterMob, setShowFilterMob] = useState(false);
    const location = useLocation();
    const { categoryId, categoryName } = location.state || {};
    console.log("ID", categoryId);

    const [products, setProducts] = useState([]);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;


    // Fetch product data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/getProductBySubCategory/BLACKBATON_ERP24?Id=${categoryId}`);
                setProducts(response.data); // Set the fetched products to state
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [apiBaseUrl, categoryId]);


    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 10); // Ensure min < max
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 10); // Ensure max > min
        setMaxPrice(value);
    };


    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const closeFilter = () => {
        setShowFilter(!showFilter);
    };


    // Toggle function for 'Need Help'
    const togglePrice = () => {
        setPriceExpanded(!isPriceExpanded);
    };

    const toggleColors = () => {
        setIsColorsExpanded(!isColorsExpanded);
    };

    const toggleSize = () => {
        setIsSizeExpanded(!isSizeExpanded);
    };

    const toggleDress = () => {
        setIsDressExpanded(!isDressExpanded);
    };


    const handleFilterClick = () => {
        setShowFilterMob(true);
    };

    const closeFilterMob = () => {
        setShowFilterMob(false);
    };

    const fullimage = (id, itemName) => {
        navigate('/fullimage', { state: { id, itemName } });
    };

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] pb-12' >
                <div className='flex justify-between items-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='lg:text-base text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={home}>Home</span>
                        <span className='text-[#828282]'>{">"}</span>
                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#3C4242]'>{categoryName}</span>
                    </div>

                    {!showFilter && (
                        <img src={filter} alt="filter" onClick={toggleFilter} className='cursor-pointer lg:flex hidden' />
                    )}
                    <img src={filter} alt="filter" className='cursor-pointer lg:hidden flex' onClick={handleFilterClick} />

                </div>

                <div className='pb-12 flex flex-row gap-5'>
                    {showFilter && (
                        <div className='w-[350px] rounded-[2px] min-h-min max-h-max border-2 border-[#BEBCBD] flex flex-col '>
                            <div className='flex justify-between border-b-2 border-[#BEBCBD] p-5  items-center'>
                                <span className='text-[#807D7E] text-xl font-[400] font-montserrat'>Filter</span>
                                <img src={filter} alt="filter" onClick={closeFilter} className='cursor-pointer' />

                            </div>
                            <div className='flex flex-col border-b-2 border-[#BEBCBD] p-5  items-center gap-2'>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Tops</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Printed T-shirts</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Plain T-shirts</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Kurti</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Boxers</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Full sleeve T-shirts</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Joggers</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Payjamas</span>
                                    <img src={forward} alt="forward" />
                                </div>
                                <div className='flex w-full justify-between items-center'>
                                    <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Jeans</span>
                                    <img src={forward} alt="forward" />
                                </div>
                            </div>

                            <div className="flex justify-between border-b-2 border-[#BEBCBD] p-5 items-center cursor-pointer" onClick={togglePrice}>
                                <span className="text-[#807D7E] text-xl font-[600] font-montserrat">Price</span>
                                <img src={top} alt="top" className={`transform transition-transform duration-300 ${isPriceExpanded ? 'rotate-180' : ''
                                    }`} />
                            </div>

                            {isPriceExpanded && (
                                < div className="flex flex-col border-b-2 border-[#BEBCBD] px-5 py-8 items-center gap-8 w-full">
                                    <div className="w-full relative flex items-center ">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="10"
                                            value={minPrice}
                                            onChange={handleMinChange}
                                            className="absolute z-20 appearance-none w-full h-2 bg-transparent pointer-events-auto"
                                            style={{
                                                accentColor: "black",
                                            }}
                                        />

                                        {/* Range Slider for Max */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            step="10"
                                            value={maxPrice}
                                            onChange={handleMaxChange}
                                            className="absolute z-20 appearance-none w-full h-2 bg-transparent pointer-events-auto"
                                            style={{
                                                accentColor: "black",
                                            }}
                                        />

                                        {/* Track */}
                                        <div className="w-full h-1 bg-gray-300  relative">
                                            <div
                                                className="absolute h-1 bg-black "
                                                style={{
                                                    left: `${(minPrice / 1000) * 100}%`,
                                                    right: `${100 - (maxPrice / 1000) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Price Labels */}
                                    <div className="flex justify-between w-full">
                                        <div className="w-[97px] h-[32px]  rounded-[8px] border-2 border-[#BEBCBD] flex justify-center items-center text-lg font-[400] font-montserrat">
                                            ₹{minPrice}
                                        </div>
                                        <div className="w-[97px] h-[32px] rounded-[8px] border-2 border-[#BEBCBD] flex justify-center items-center text-lg font-[400] font-montserrat">
                                            ₹{maxPrice}
                                        </div>
                                    </div>
                                </div>

                            )}


                            <div className="flex justify-between border-b-2 border-[#BEBCBD] p-5 items-center cursor-pointer" onClick={toggleColors}>
                                <span className="text-[#807D7E] text-xl font-[600] font-montserrat">Colors</span>
                                <img src={top} alt="top" className={`transform transition-transform duration-300 ${isColorsExpanded ? 'rotate-180' : ''
                                    }`} />
                            </div>

                            {isColorsExpanded && (
                                <div className="flex flex-col items-center border-b-2 border-[#BEBCBD] px-5 py-8 gap-4">
                                    <div className='grid grid-cols-4 gap-4'>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[#8434E1] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Purple</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[black] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Black</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[red] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Red</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[orange] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Orange</span>
                                        </div>


                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[navy] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Navy</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[white] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>White</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[#D67E3B] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Broom</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[green] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Green</span>
                                        </div>


                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[yellow] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Yellow</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[gray] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Gray</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[pink] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Pink</span>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[37px] h-[37px] rounded-[12px] bg-[blue] border-2 border-[#F4F1F1]'></div>
                                            <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>Blue</span>
                                        </div>


                                    </div>
                                </div>
                            )}



                            <div className="flex justify-between border-b-2 border-[#BEBCBD] p-5 items-center cursor-pointer" onClick={toggleSize}>
                                <span className="text-[#807D7E] text-xl font-[600] font-montserrat">Size</span>
                                <img src={top} alt="top" className={`transform transition-transform duration-300 ${isSizeExpanded ? 'rotate-180' : ''
                                    }`} />
                            </div>

                            {isSizeExpanded && (
                                <div className="flex flex-col items-center border-b-2 border-[#BEBCBD] px-5 py-8 gap-4">
                                    <div className='grid grid-cols-3 gap-4'>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                XXS
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                XL
                                            </div>                                    </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                XS
                                            </div>                                    </div>



                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                S
                                            </div>                                    </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                M
                                            </div>                                    </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                L
                                            </div>                                    </div>


                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                XXL
                                            </div>                                    </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                3XL
                                            </div>                                    </div>
                                        <div className='flex flex-col gap-2 items-center'>
                                            <div className='w-[61px] h-[32px] rounded-[12px]  border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                4XL
                                            </div>                                    </div>



                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between border-b-2 border-[#BEBCBD] p-5 items-center cursor-pointer" onClick={toggleDress}>
                                <span className="text-[#807D7E] text-xl font-[600] font-montserrat">Dress Style</span>
                                <img src={top} alt="top" className={`transform transition-transform duration-300 ${isDressExpanded ? 'rotate-180' : ''
                                    }`} />
                            </div>

                            {isDressExpanded && (
                                <div className='flex flex-col  p-5  items-center gap-2'>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>T-shirts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Pants</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Shorts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Bermuda Shorts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Gym Wear</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Full sleeve T-shirts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Jackets</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Sleeveless</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Swimming Suits</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Boxers</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Sliders</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Water Bottle & Shaker</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Cut T-shirts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Polo T-shirts</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Hoodies</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                    <div className='flex w-full justify-between items-center'>
                                        <span className='text-[#8A8989] font-[400] text-base font-montserrat'>Socks</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div
                        className={`grid w-full gap-5 ${showFilter ? "lg:grid-cols-3 grid-cols-2" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
                            }`}
                    >
                        {products.map((product) => (
                            <div key={product.ID} className='flex flex-col gap-2 cursor-pointer' onClick={() => fullimage(product.ID, product.ItemName)}>
                                <div className='lg:h-[382px] md:h-[300px] h-[200px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                    <img
                                        src={`${apiLocalUrl}/uploads/${product.ID}.jpg?v=${Date.now()}`}
                                        alt={product.ItemName}
                                        onError={(e) => { e.target.onerror = null; e.target.src = product1; }}
                                        className='mix-blend-multiply w-full h-full'
                                    />

                                    <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-2 flex justify-end'>
                                        <div className='lg:w-[33px] w-[23px] lg:h-[33px] h-[23px] rounded-full bg-[white] flex justify-center items-center'>
                                            <img src={heart} alt="heart" />
                                        </div>
                                    </div>

                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <span className='lg:text-base text-xs font-[600] font-montserrat text-left'>{product.ItemName}</span>
                                        {/* <div className='lg:w-[110px] lg:h-[35px] w-full h-[30px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer'>
                                            <img src={cart} alt="cart" />
                                            <span className='text-xs font-[500] font-montserrat'>Add to Cart</span>
                                        </div> */}

                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <div className='lg:w-[84px] lg:h-[37px] w-[70px] h-[30px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                            ₹{product.MRP}
                                        </div>
                                        <span className="text-sm font-montserrat lg:flex hidden text-nowrap">
                                            Offer Price:
                                            <span className="line-through text-gray-500 ml-1">₹{product.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹0</span>
                                        </span>
                                        <span className="text-sm font-montserrat lg:hidden flex text-nowrap">

                                            <span className="line-through text-gray-500 ml-1">₹{product.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹0</span>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>


            {showFilterMob && <Filter closeFilterMob={closeFilterMob} />}
            {isTab ? <FooterMob /> : <Footer />}
        </div >

    )
}

export default SubCatProducts