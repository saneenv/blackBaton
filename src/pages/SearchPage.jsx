import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import filter from '../images/Products/filter.png'
import refreshimg from '../images/Products/refresh.png'
import product1 from '../images/Home/product2.png'
import heart from '../images/Home/heart.png'
import filledHeart from '../images/Home/heart2.png';
import forward from '../images/Products/forwardpng.png'
import top from '../images/Products/top.png'
import Filter from '../components/Filter'


function SearchPage() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [loginId, setLoginId] = useState(null);

    useEffect(() => {
        // Get userId from sessionStorage
        const storedLoginId = sessionStorage.getItem('loginId');
        setLoginId(storedLoginId);
    }, []);

    const userId = useSelector((state) => state.user.id);
    console.log('Logged in User ID:', userId);


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
    const [selectedItemName, setSelectedItemName] = useState('');
    console.log(selectedItemName);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [offerPrices, setOfferPrices] = useState({});


    const { filtered } = location.state || {};
    console.log("filtered:", filtered);
    const navigate = useNavigate();

    const [wishlistItems, setWishlistItems] = useState([]);
    const [products, setProducts] = useState([]);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    `${apiBaseUrl}/getProductByFilter/BLACKBATON_2526?filter=${encodeURIComponent(filtered)}`
                );

                // Check if the response is OK (status code 200-299)
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                // Parse the response as JSON
                const data = await response.json();

                // Validate that the response is an array
                if (Array.isArray(data)) {
                    setProducts(data); // Set products if the response is valid
                    if (data.length > 0) {
                        setSelectedItemName(data[0].ItemName); // Set the selected item name
                    }
                } else {
                    console.error("API response is not an array:", data);
                    setProducts([]); // Set products to an empty array if the response is invalid
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Set products to an empty array if an error occurs
            }
        };

        fetchProducts();
    }, [apiBaseUrl, filtered]);



    const addToWishlist = async (product) => {
        const apiUrl = `${apiBaseUrl}/wishlist/add/BLACKBATON_2526`;

        const activeUserId = loginId || userId; // Use loginId if available, otherwise use userId

        if (!activeUserId) {
            console.error("No valid user ID found.");
            alert("User ID is missing.");
            return;
        }

        const payload = {
            ID: product.ID,
            ItemName: product.ItemName,
            MRP: product.MRP,
            ledcode: activeUserId,  // Use the determined user ID
            Qty: product.Qty
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Added to wishlist:", result);
                // Update the local state
                setWishlistItems(prevItems => [...prevItems, product]);
                alert("Item added to wishlist!");
            } else {
                console.error("Failed to add to wishlist");
                alert("Already in Wishlist");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding to wishlist.");
        }
    };

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const activeUserId = loginId || userId; // Use loginId if available, otherwise use userId

                if (!activeUserId) return; // Ensure there's a valid userId before making the API call

                const response = await fetch(`${apiBaseUrl}/wishlist/items/BLACKBATON_2526/${activeUserId}`);
                const data = await response.json();

                if (data.success) {
                    setWishlistItems(data.items);
                }
            } catch (error) {
                console.error("Error fetching wishlist items:", error);
            }
        };

        fetchWishlistItems();
    }, [loginId, apiBaseUrl, userId]);

    const removeFromWishlist = async (productId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/wishlist/delete/BLACKBATON_2526/${productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Update the local state
                setWishlistItems(prevItems => prevItems.filter(item => item.ID !== productId));
                alert('Item removed from wishlist!');
            } else {
                console.error('Failed to remove item from wishlist');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while removing from wishlist.');
        }
    };

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getCategories/BLACKBATON_2526`);
                const data = await response.json();
                setCategories(data); // Set the fetched categories to state
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getSubCategories/BLACKBATON_2526`);
                const data = await response.json();
                setSubCategories(data); // Set the fetched categories to state
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchSubCategories();
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchColorSizeData = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getAllColorSize/BLACKBATON_2526`);
                const data = await response.json();

                // Extract unique colors and sizes
                const uniqueColors = [...new Set(data.map(item => item.Color))];
                const uniqueSizes = [...new Set(data.map(item => item.Size))];

                setColors(uniqueColors);
                setSizes(uniqueSizes);
            } catch (error) {
                console.error('Error fetching color and size data:', error);
            }
        };

        fetchColorSizeData();
    }, [apiBaseUrl]);

    const handleSubCategoryClick = async (subCategoryId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/getProductBySubCategory/BLACKBATON_2526?Id=${subCategoryId}`);
            const data = await response.json();
            setProducts(data); // Update the products state with the fetched data
        } catch (error) {
            console.error('Error fetching products by subcategory:', error);
        }
    };

    const handleCategoryClick = async (categoryId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/getProductByCategory/BLACKBATON_2526?Id=${categoryId}`);
            const data = await response.json();
            setProducts(data); // Update the products state with the fetched data
        } catch (error) {
            console.error('Error fetching products by category:', error);
        }
    };

    const handleColorClick = async (colors) => {
        setSelectedColor(colors); // Update selected color state
        try {
            // Fetch ItemId for the selected colors
            const response = await fetch(`${apiBaseUrl}/getAllColorSize/BLACKBATON_2526`);
            const data = await response.json();
            const filteredItems = data.filter(item => colors.includes(item.Color)); // Filter by selected colors
            const itemIds = filteredItems.map(item => item.ItemId); // Extract ItemIds

            // Fetch products for the filtered ItemIds
            const productPromises = itemIds.map(itemId =>
                fetch(`${apiBaseUrl}/getProductById/BLACKBATON_2526?Id=${itemId}`)
                    .then(res => res.json())
            );
            const products = await Promise.all(productPromises);
            setProducts(products.flat()); // Update products state
        } catch (error) {
            console.error('Error fetching products by color:', error);
        }
    };

    const handleSizeClick = async (sizes) => {
        setSelectedSize(sizes); // Update selected size state
        try {
            // Fetch ItemId for the selected sizes
            const response = await fetch(`${apiBaseUrl}/getAllColorSize/BLACKBATON_2526`);
            const data = await response.json();
            const filteredItems = data.filter(item => sizes.includes(item.Size)); // Filter by selected sizes
            const itemIds = filteredItems.map(item => item.ItemId); // Extract ItemIds

            // Fetch products for the filtered ItemIds
            const productPromises = itemIds.map(itemId =>
                fetch(`${apiBaseUrl}/getProductById/BLACKBATON_2526?Id=${itemId}`)
                    .then(res => res.json())
            );
            const products = await Promise.all(productPromises);
            setProducts(products.flat()); // Update products state
        } catch (error) {
            console.error('Error fetching products by size:', error);
        }
    };

    useEffect(() => {
        const fetchOfferPrices = async () => {
            const prices = {};
            for (const product of filteredProducts) {
                try {
                    const res = await fetch(`${apiBaseUrl}/getOfferByItemId/${product.ID}`);
                    if (res.ok) {
                        const data = await res.json();
                        prices[product.ID] = data.OfferPrice;
                    }
                } catch (err) {
                    console.error(`Error fetching offer for product ${product.ID}`, err);
                }
            }
            setOfferPrices(prices);
        };

        if (filteredProducts.length > 0) {
            fetchOfferPrices();
        }
    }, [filteredProducts]);

    useEffect(() => {
        console.log("Fetched Products:", products);

        if (Array.isArray(products)) {
            let filtered = products.filter(
                (product) => product.MRP >= minPrice && product.MRP <= maxPrice
            );
            setFilteredProducts(filtered); // Update filtered products
            console.log("Filtered Products check:", filtered);
        } else {
            console.error("Products is not an array:", products);
            setFilteredProducts([]); // Set filteredProducts to an empty array if products is invalid
        }
    }, [products, minPrice, maxPrice]);


    useEffect(() => {
        // Initialize filteredProducts with all products when products change
        if (Array.isArray(products)) {
            setFilteredProducts(products);
        } else {
            console.error("Products is not an array:", products);
            setFilteredProducts([]); // Set filteredProducts to an empty array if products is invalid
        }
    }, [products]);


    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 10); // Ensure min < max
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 10); // Ensure max > min
        setMaxPrice(value);
    };
    // Combined handler for both subcategory and price range filters
    const handleApplyFilters = (filters) => {
        if (filters.subCategory) {
            handleSubCategoryClick(filters.subCategory);
        }

        if (filters.category) {
            handleCategoryClick(filters.category);
        }
        if (filters.color) {
            filters.color.forEach(color => handleColorClick(color));
        }
        if (filters.size) {
            filters.size.forEach(size => handleSizeClick(size));
        }

        // Handle price range filter
        if (filters.priceRange) {
            setMinPrice(filters.priceRange.minPrice);
            setMaxPrice(filters.priceRange.maxPrice);
        }

        console.log("Selected Filters:", filters);
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

    const refresh = () => {
       window.location.reload()
    };



    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] pb-12' >
                <div className='flex justify-end items-center'>

                    {!showFilter && (
                        <img src={filter} alt="filter" onClick={toggleFilter} className='cursor-pointer lg:flex hidden' />
                    )}
                    {showFilter && (
                        <div className='h-[30px] w-[10%] rounded-[5px] bg-[black] text-base font-[600] font-montserrat text-[white] flex justify-center items-center cursor-pointer' onClick={refresh}>refresh</div>
                    )}
                    <div className='flex justify-between items-center lg:hidden w-full'>
                    <img src={refreshimg} alt="refreshimg" className='cursor-pointer ' onClick={refresh} />

                    <img src={filter} alt="filter" className='cursor-pointer ' onClick={handleFilterClick} />
                    </div>


                </div>

                <div className='pb-12 flex flex-row gap-5'>
                    {showFilter && (
                        <div className='w-[350px] rounded-[2px] min-h-min max-h-max border-2 border-[#BEBCBD] flex flex-col '>
                            <div className='flex justify-between border-b-2 border-[#BEBCBD] p-5  items-center'>
                                <span className='text-[#807D7E] text-xl font-[400] font-montserrat'>Filter</span>
                                <img src={filter} alt="filter" onClick={closeFilter} className='cursor-pointer' />

                            </div>
                            <div className='flex flex-col border-b-2 border-[#BEBCBD] p-5 items-center gap-2'>
                                {subCategories.map((subCategory) => (
                                    <div
                                        key={subCategory.Id}
                                        className='flex w-full justify-between items-center cursor-pointer text-[#8A8989] hover:bg-[#e0dede] hover:text-[black]'
                                        onClick={() => handleSubCategoryClick(subCategory.Id)} // Add onClick handler
                                    >
                                        <span className=' font-[400] text-base font-montserrat'>{subCategory.Name}</span>
                                        <img src={forward} alt="forward" />
                                    </div>
                                ))}
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
                                        {colors.map((color, index) => (
                                            <div key={index} className='flex flex-col gap-2 items-center cursor-pointer ' onClick={() => handleColorClick(color)}>
                                                <div
                                                    className='w-[37px] h-[37px] rounded-[12px] border-2 border-[#F4F1F1]'
                                                    style={{ backgroundColor: color.toLowerCase() }} // Set background color dynamically
                                                ></div>
                                                <span className='text-[#8A8989] text-sm font-[400] font-montserrat'>{color}</span>
                                            </div>
                                        ))}
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
                                        {sizes.map((size, index) => (
                                            <div key={index} className='flex flex-col gap-2 items-center cursor-pointer' onClick={() => handleSizeClick(size)}>
                                                <div className='w-[61px] h-[32px] rounded-[12px] border-2 border-[#BEBCBD] flex justify-center items-center font-[600] text-sm font-montserrat'>
                                                    {size}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-between border-b-2 border-[#BEBCBD] p-5 items-center cursor-pointer" onClick={toggleDress}>
                                <span className="text-[#807D7E] text-xl font-[600] font-montserrat">Dress Style</span>
                                <img src={top} alt="top" className={`transform transition-transform duration-300 ${isDressExpanded ? 'rotate-180' : ''
                                    }`} />
                            </div>

                            {isDressExpanded && (
                                <div className='flex flex-col p-5 items-center gap-2'>
                                    {categories.map((category) => (
                                        <div
                                            key={category.Id}
                                            className='flex w-full justify-between items-center cursor-pointer text-[#8A8989] hover:bg-[#e0dede] hover:text-[black]'
                                            onClick={() => handleCategoryClick(category.Id)} // Add onClick handler
                                        >
                                            <span className=' font-[400] text-base font-montserrat'>{category.Name}</span>
                                            <img src={forward} alt="forward" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    <div className={`grid w-full gap-5 ${showFilter ? "lg:grid-cols-3 grid-cols-2" : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"}`}>
                        {filteredProducts.map((product) => (
                            <div key={product.ID} className='flex flex-col gap-2 cursor-pointer' onClick={() => fullimage(product.ID, product.ItemName)}>
                                <div className='lg:h-[382px] md:h-[300px] h-[200px] rounded-[12px] bg-[#EEEEEE] flex items-center justify-center relative'>
                                    <img
                                        src={`${apiLocalUrl}/uploads/${product.ID}.jpg?v=${Date.now()}`}
                                        alt={product.ItemName}
                                        onError={(e) => { e.target.onerror = null; e.target.src = product1; }}
                                        className='mix-blend-multiply w-full h-full'
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full lg:p-6 p-2 flex justify-end'>
                                        <div
                                            className='lg:w-[33px] w-[23px] lg:h-[33px] h-[23px] rounded-full bg-[white] flex justify-center items-center cursor-pointer'
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents the main div's click event
                                                if (wishlistItems.some(item => item.ID === product.ID)) {
                                                    // Item is in wishlist, remove it
                                                    removeFromWishlist(product.ID);
                                                } else {
                                                    // Item is not in wishlist, add it
                                                    addToWishlist(product);
                                                }
                                            }}
                                        >
                                            <img
                                                src={wishlistItems.some(item => item.ID === product.ID) ? filledHeart : heart}
                                                alt="heart"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <span className='lg:text-base text-xs font-[600] font-montserrat text-left'>{product.ItemName}</span>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <div className='lg:w-[84px] lg:h-[37px] w-[70px] h-[30px] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center text-sm font-[700] font-montserrat'>
                                            ₹{product.MRP}
                                        </div>
                                        <span className="text-sm font-montserrat lg:flex hidden text-nowrap">
                                            Offer Price:
                                            <span className="line-through text-gray-500 ml-1">₹{product.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹{offerPrices[product.ID] || product.MRP}</span>
                                        </span>
                                        <span className="text-sm font-montserrat lg:hidden flex text-nowrap">
                                            <span className="line-through text-gray-500 ml-1">₹{product.MRP}</span>
                                            <span className="text-red-600 font-bold ml-1">₹{offerPrices[product.ID] || product.MRP}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {showFilterMob && (
                <Filter
                    closeFilterMob={closeFilterMob}
                    onApply={handleApplyFilters} // Pass the handler function
                />
            )}

            {isTab ? <FooterMob /> : <Footer />}
        </div >

    )
}

export default SearchPage