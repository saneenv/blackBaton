import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";
import banner1 from '../images/Home/banner1.png'
import bannermob from '../images/Home/bannermob.png'
import line from '../images/Home/line.png'
// import cart from '../images/Home/cart.png'
import product1 from '../images/Home/product2.png'
import heart from '../images/Home/heart.png'
import filledHeart from '../images/Home/heart2.png';
import men from '../images/Home/men.png'
import women from '../images/Home/women.png'
import button from '../images/Home/button.png'
import accessories from '../images/Home/accessories.png'
import kids from '../images/Home/kids.png'
import star from '../images/Home/Star.png'
import starmob from '../images/Home/startmob.png'
import combined from '../images/Home/combinedimg.png'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob';
import NavbarMob from '../components/NavbarMob';


function Home() {
    const categoryImages = useSelector((state) => state.category.images);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    const [categories, setCategories] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [disableNext, setDisableNext] = useState(false); // Disable ">" button
    const [disablePrev, setDisablePrev] = useState(true); // Disable "<" button initially
    const [loginId, setLoginId] = useState(null);
    const [wishlistItems, setWishlistItems] = useState([]);

    console.log(loginId);


    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    const userId = useSelector((state) => state.user.id);
    console.log('Logged in User ID:', userId);

    useEffect(() => {
        // Get userId from sessionStorage
        const storedLoginId = sessionStorage.getItem('loginId');
        setLoginId(storedLoginId);
    }, []);



    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch(`${apiBaseUrl}/getCategories/BLACKBATON_ERP24`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setDisableNext(data.length <= 3);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getProductBySubCategory/BLACKBATON_ERP24?Id=163`);
                const data = await response.json();
                setNewArrivals(data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getProductByFilter/BLACKBATON_ERP24?filter=`);
                const data = await response.json();
                setAllProducts(data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [apiBaseUrl]);

    const addToWishlist = async (product) => {
        const apiUrl = `${apiBaseUrl}/wishlist/add/BLACKBATON_ERP24`;
    
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

                const response = await fetch(`${apiBaseUrl}/wishlist/items/BLACKBATON_ERP24/${activeUserId}`);
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
            const response = await fetch(`${apiBaseUrl}/wishlist/delete/BLACKBATON_ERP24/${productId}`, {
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

    const nextSlide = () => {
        if (startIndex < categories.length - 3) {
            setStartIndex(prevIndex => prevIndex + 1);
            setDisablePrev(false);
            if (startIndex + 1 >= categories.length - 3) {
                setDisableNext(true);
            }
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(prevIndex => prevIndex - 1);
            setDisableNext(false);
            if (startIndex - 1 === 0) {
                setDisablePrev(true);
            }
        }
    };


    const fullimage = (id, itemName) => {
        navigate('/fullimage', { state: { id, itemName } });
    };


    const productPage = (categoryId, categoryName) => {
        navigate('/products', { state: { categoryId, categoryName } });
    };

    const newarrival = (categoryId, categoryName) => {
        navigate('/subcategoryproducts', { state: { categoryId: 163, categoryName: 'NEW ARRIVAL' } });
    };


    const searchpage = async () => {
        navigate('/searchpage', { state: { filtered: '' } });
    };


    const mensubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 157, categoryName: "MEN'S" } });
    };

    const womensubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 158, categoryName: "WOMEN'S" } });
    };

    const accessoriessubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 162, categoryName: "ACCESSORIES" } });
    };

    const kidssubcategorypage = (categoryId) => {
        navigate('/subcategoryproducts', { state: { categoryId: 159, categoryName: "KID'S" } });
    };



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
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Shop By Category</span>
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
                    <div className='grid-cols-3 w-full gap-2 md:grid hidden'>
                        {categories.slice(startIndex, startIndex + 3).map((category) => (
                            <div key={category.Id} className="lg:h-[280px] h-[250px] relative">
                                <img
                                    src={categoryImages[category.Id] || "/images/CategoryImage/commonCategory.jpg"} // Use image from Redux
                                    alt={category.Name}
                                    className="w-full h-full"
                                />
                                <div className="absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end">
                                    <div
                                        className="w-auto h-[35px] bg-[white] hover:bg-[red] hover:text-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat cursor-pointer"
                                        onClick={() => productPage(category.Id, category.Name)}
                                    >
                                        {category.Name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 w-full gap-2 md:hidden'>
                        {categories.slice(startIndex, startIndex + 1).map((category) => (
                            <div key={category.Id} className="lg:h-[280px] h-[250px] relative">
                                <img
                                    src={categoryImages[category.Id] || "/images/CategoryImage/commonCategory.jpg"} // Use image from Redux
                                    alt={category.Name}
                                    className="w-full h-full"
                                />
                                <div className="absolute top-0 left-0 w-full h-full px-12 py-12 flex items-end">
                                    <div
                                        className="w-auto h-[35px] bg-[white] hover:bg-[red] hover:text-[white] rounded-2xl px-5 flex justify-center items-center text-base font-[600] font-montserrat cursor-pointer"
                                        onClick={() => productPage(category.Id, category.Name)}
                                    >
                                        {category.Name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-3'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>New Arrivals</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full  gap-5 '>
                        {newArrivals.map((product) => (
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
                                        {/* <div className='lg:w-[110px] lg:h-[35px] w-full h-[30px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer' onClick={(e) => handleAddToCart(e)}>
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
                    <div className='w-full flex items-end justify-end'>
                        <span className='text-right underline cursor-pointer hover:text-[red] text-base font-[500] font-montserrat' onClick={() => newarrival(691, 'NEW ARRIVAL', 'HOME')}>See All</span>
                    </div>
                </div>

                <div className='w-full flex md:flex-row flex-col lg:gap-0 gap-3 lg:h-[600px] h-auto mt-3'>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={men} alt="men" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Men 's</span>
                            </div>
                            <img src={button} alt="button" className='cursor-pointer' onClick={mensubcategorypage} />
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={women} alt="women" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>women ’s</span>
                            </div>
                            <img src={button} alt="button" className='cursor-pointer' onClick={womensubcategorypage} />
                        </div>
                    </div>
                </div>



                <div className='flex flex-col gap-6 mt-3'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>ALL PRODUCTS</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full  gap-5 '>
                        {allProducts.map((product) => (
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
                                        {/* <div className='lg:w-[110px] lg:h-[35px] w-full h-[30px] rounded-[24px] border-2 border-[black] flex flex-row gap-1 justify-center items-center cursor-pointer' onClick={(e) => handleAddToCart(e)}>
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
                    <div className='w-full flex items-end justify-end'>
                        <span className='text-right underline cursor-pointer hover:text-[red] text-base font-[500] font-montserrat' onClick={searchpage}>See All</span>
                    </div>
                </div>



                <div className='w-full flex md:flex-row flex-col lg:gap-0 gap-3 lg:h-[600px] h-auto mt-3'>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={accessories} alt="accessories" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Accessories</span>
                            </div>
                            <img src={button} alt="button" className='cursor-pointer' onClick={accessoriessubcategorypage} />
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full lg:h-full md:h-[450px] h-[284px] relative'>
                        <img src={kids} alt="kids" className='w-full h-full' />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col lg:gap-3 gap-2 justify-center items-center'>
                            <div className='w-auto lg:px-3 px-2 h-[57px] bg-[black] flex justify-center items-center'>
                                <span className='lg:text-5xl text-2xl font-[800] font-montserrat text-[white]'>Kid’s</span>
                            </div>
                            <img src={button} alt="button" className='cursor-pointer' onClick={kidssubcategorypage} />
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
