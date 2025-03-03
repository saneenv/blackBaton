import React, { useEffect, useState } from 'react'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import top from '../images/FullImage/top.png'
import down from '../images/FullImage/down.png'
import cart1 from '../images/FullImage/cart.png'
import payment from '../images/FullImage/payment.png'
import line from '../images/Home/line.png'
import product1 from '../images/Home/product2.png'
import heart from '../images/Home/heart.png'
// import cart from '../images/Home/cart.png'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'
import fit from '../images/FullImage/Fit.png'
import shipping from '../images/FullImage/shipping.png'
import returns from '../images/FullImage/Returns.png'


function FullImage() {
    const [similarProducts, setSimilarProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [startIndex, setStartIndex] = useState(0);
    const [productDetails, setProductDetails] = useState([]);
    const [selectedSize, setSelectedSize] = useState(""); // Track selected size
    const [selectedColor, setSelectedColor] = useState("");
    const [loginId, setLoginId] = useState(null);



    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });

    const location = useLocation();
    const { id, itemName } = location.state || {}; // Get the passed state
    console.log(selectedItemName);

    useEffect(() => {
        // Get userId from sessionStorage
        const storedLoginId = sessionStorage.getItem('loginId');
        setLoginId(storedLoginId);
    }, []);

    const LedName = sessionStorage.getItem('loginName')
    const LedEmail = sessionStorage.getItem('loginEmail')


    const userId = useSelector((state) => state.user.id);
    console.log('Logged in User ID:', userId);


    console.log("id", id);
    console.log("itemname", itemName);

    const cutitemId = itemName ? itemName.split(' ')[0] : '';

    console.log("cutitemid", cutitemId);


    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getProductById/BLACKBATON_ERP24?Id=${id}`);
                const data = await response.json();
                if (data.length > 0) {
                    setProduct(data[0]); // Extracting first object from array
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [apiBaseUrl, id]);

    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (product?.ID) {
            setMainImage(`${apiLocalUrl}/uploads/${product.ID}.jpg?v=${Date.now()}`);
        }
    }, [product, apiLocalUrl]);

    const images = [
        `${apiLocalUrl}/uploads1/${product.ID}.jpg?v=${Date.now()}`,
        `${apiLocalUrl}/uploads2/${product.ID}.jpg?v=${Date.now()}`,
        `${apiLocalUrl}/uploads3/${product.ID}.jpg?v=${Date.now()}`,
        `${apiLocalUrl}/uploads4/${product.ID}.jpg?v=${Date.now()}`,
        `${apiLocalUrl}/uploads5/${product.ID}.jpg?v=${Date.now()}`,
        `${apiLocalUrl}/uploads/${product.ID}.jpg?v=${Date.now()}`
    ];



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getProductByFilter/BLACKBATON_ERP24?filter=${encodeURIComponent(cutitemId)}`);
                const data = await response.json();
                setSimilarProducts(data);

                if (data.length > 0) {
                    setSelectedItemName(data[0].ItemName); // Set the selected item name from the first product
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [apiBaseUrl, cutitemId]);

    useEffect(() => {
        if (product?.ID) {
            fetch(`${apiBaseUrl}/getProductDetails/BLACKBATON_ERP24?Id=${encodeURIComponent(product.ID)}`)
                .then(response => response.json())
                .then(data => {
                    setProductDetails(data);

                    // Extract unique sizes
                    const uniqueSizes = [...new Set(data.map((category) => category.Size))];
                    if (uniqueSizes.length > 0) {
                        setSelectedSize(uniqueSizes[0]); // Set first size as default

                        // Find available colors for the default size
                        const colorsForDefaultSize = data
                            .filter((detail) => detail.Size === uniqueSizes[0])
                            .map((detail) => detail.Color);

                        // If there's only one color, auto-select it
                        if (colorsForDefaultSize.length === 1) {
                            setSelectedColor(colorsForDefaultSize[0]);
                        }
                    }
                })
                .catch(error => console.error("Error fetching product details:", error));
        }
    }, [apiBaseUrl, product.ID]);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);

        // Find available colors for the selected size
        const colorsForSelectedSize = productDetails
            .filter((detail) => detail.Size === size)
            .map((detail) => detail.Color);

        // If there's only one color, auto-select it
        if (colorsForSelectedSize.length === 1) {
            setSelectedColor(colorsForSelectedSize[0]);
        } else {
            setSelectedColor(""); // Reset selected color if there are multiple options
        }
    };


    // Extract unique sizes
    const uniqueSizes = [...new Set(productDetails.map((category) => category.Size))];

    // Get available colors for the selected size
    const availableColors = productDetails
        .filter((category) => category.Size === selectedSize)
        .map((category) => category.Color);


    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const home = () => {
        navigate('/')
    }

    const fullimage = (id, itemName) => {
        navigate('/fullimage', { state: { id, itemName } });
        window.scrollTo(0, 0); // Scroll to the top after navigation
    };

    const handleAddToCart = async (event) => {
        event.stopPropagation();

        if (!loginId) {
            alert('Please login to continue.');
            navigate('/login');
            return;
        }

        // Ensure a size and color are selected
        if (!selectedSize || !selectedColor) {
            alert('Please select a size and color.');
            return;
        }

        // Find the uniqueCode for the selected size and color
        const selectedProductDetail = productDetails.find(
            (detail) => detail.Size === selectedSize && detail.Color === selectedColor
        );

        if (!selectedProductDetail) {
            alert('Please select a valid size and color.');
            return;
        }

        const uniqueCode = selectedProductDetail.Uniquecode;

        // Prepare the data to be sent to the API
        const cartData = {
            itemId: product.ID,
            uniqueCode: uniqueCode,
            itemName: product.ItemName,
            itemPrice: product.MRP,
            quantity: 1,
            ledname: LedName,
            ledcode: loginId,
            ledemail: LedEmail,
        };

        try {
            const response = await fetch(`${apiBaseUrl}/cart/add/BLACKBATON_ERP24`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData),
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            const result = await response.json();

            if (result.success) {
                alert('Item added to cart successfully!');
            } else {
                alert('Failed to add item to cart. Please try again.');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('An error occurred while adding the item to the cart. Please try again.');
        }
    }; const imagesPerPage = 3;

    // Show only 3 images at a time
    const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

    // Handlers for navigation
    const handleNext = () => {
        if (startIndex + imagesPerPage < images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}

            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] pb-12'>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='lg:text-base text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={home}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='lg:text-base text-xs font-[400] font-montserrat text-[#3C4242]'>{itemName}</span>
                </div>

                <div className='w-full flex lg:flex-row flex-col lg:h-[589px]  h-auto lg:gap-0 gap-8'>
                    <div className='flex flex-row gap-4 lg:w-[50%] w-full h-full'>
                        <div className='w-[25%] h-full lg:flex hidden flex-col justify-center items-center gap-6'>
                            {visibleImages.map((src, index) => (
                                <div key={index} className="w-[70%] h-[100px] rounded-[10px] bg-[#EEEEEE] flex justify-center items-center cursor-pointer"
                                    onClick={() => setMainImage(src)} // Update the main image when clicked
                                >
                                    <img
                                        src={src}
                                        alt={`sideimg${index + 1}`}
                                        className="w-full h-full"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = product1;
                                        }}
                                    />
                                </div>
                            ))}
                            <div className='flex flex-col gap-2'>
                                <div
                                    className={`w-[35px] h-[35px] rounded-full flex justify-center items-center border-2 border-black cursor-pointer ${startIndex > 0 ? 'bg-black' : 'bg-white'
                                        }`} onClick={handlePrev}
                                    disabled={startIndex === 0}
                                >
                                    <img src={top} alt="top" />
                                </div>
                                <div
                                    className={`w-[35px] h-[35px] rounded-full flex justify-center items-center border-2 border-black cursor-pointer ${startIndex + imagesPerPage >= images.length ? 'bg-white' : 'bg-black'
                                        }`}
                                    onClick={handleNext}
                                    disabled={startIndex + imagesPerPage >= images.length}
                                >
                                    <img src={down} alt="down" />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[75%] w-full h-full'>
                            <img
                                src={mainImage}
                                alt="mainimage"
                                className=' w-full h-full'
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = product1;
                                }}
                            />
                        </div>

                    </div>
                    <div className='flex flex-col lg:gap-10 gap-5 lg:w-[50%] w-full h-full lg:px-[4%] px-0 '>
                        <span className='lg:text-4xl text-xl font-[600] font-montserrat text-left'>{product.ItemName}</span>

                        <div className='lg:hidden flex flex-row gap-3 items-center'>
                            <span className='font-[400] font-montserrat text-sm'>MRP</span>
                            <span className='font-[600] font-montserrat text-base'>₹ {product.MRP}</span>

                        </div>



                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-sm font-[500] text-[#3F4646] text-left'>Select Size</span>
                            <div className='flex flex-row gap-5'>
                                {uniqueSizes.map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => handleSizeSelection(size)} // Use the new handler
                                        className={`w-[38px] h-[38px] rounded-[12px] border-2 flex justify-center items-center text-sm font-[500] font-montserrat text-[#3C4242] cursor-pointer 
                    ${selectedSize === size ? "border-4 border-[#3C4242]" : "border-[#BEBCBD]"}`}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-lg text-sm font-[600] text-[black] text-left'>Colours Available</span>
                            <div className='flex flex-row gap-5'>
                                {availableColors.map((color) => (
                                    <div
                                        key={color}
                                        onClick={() => setSelectedColor(color)} // Allow manual selection if needed
                                        className={`w-[25px] h-[25px] rounded-full cursor-pointer ${selectedColor === color ? "border-2 border-black" : ""
                                            }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-row gap-8'>
                            <div className='lg:w-[35%] w-full h-[46px] bg-[black] rounded-[8px] flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={(e) => handleAddToCart(e)}>
                                <img src={cart1} alt="cart" />
                                <span className='lg:text-lg text-base font-[600] font-montserrat text-[white]'>Add to cart</span>
                            </div>
                            <div className='w-[25%] h-[46px] border-2 border-[black] rounded-[8px] lg:flex hidden items-center justify-center'>
                                <span className='text-lg font-[600] font-montserrat'>₹ {product.MRP}</span>
                            </div>
                        </div>

                        <ul className='border-2 border-[#BEBCBD] mt-3 lg:flex hidden' />

                        <div className='grid grid-cols-2 lg:gap-6 gap-3'>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={payment} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Secure payment</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={fit} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Size & Fit</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={shipping} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Free shipping</span>
                            </div>
                            <div className='flex-row lg:gap-4 gap-2 flex items-center'>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
                                    <img src={returns} alt="payment" />
                                </div>
                                <span className='lg:text-lg text-xs font-[600] font-montserrat text-left'>Free Shipping & Returns</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex flex-row gap-4  items-center'>
                        <img src={line} alt="line" />
                        <span className='lg:text-xl text-base font-[600] font-montserrat'>Product Desciption</span>
                    </div>
                    <span className='lg:text-lg text-sm font-[500] text-left font-montserrat'>Our KD signature apparel collection celebrates the next generation of do-it-all athletes with
                        pieces you can wear anywhere. This relaxed-fit
                        tee is made from soft midweight cotton. The graphics feature the official stamp of approval from Easy Money.</span>
                    <div className='lg:w-1/2 w-full h-[190px] bg-[#F6F6F6]'>
                        <div className='flex flex-col w-full h-full'>
                            <div className='w-full h-1/2 border-b-2 border-[#BEBCBD]'>
                                <div className='grid grid-cols-3 w-full h-full'>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Fabric</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Bio-washed Cotton</span>
                                    </div>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Pattern</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Printed</span>
                                    </div>
                                    <div className=' flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Fit</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Regular-fit</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-1/2'>
                                <div className='grid grid-cols-3 w-full h-full'>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Neck</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Round Neck</span>
                                    </div>
                                    <div className='border-r-2 border-[#BEBCBD] flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Sleeve</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Half-sleeves</span>
                                    </div>
                                    <div className=' flex justify-center  text-left lg:pl-12 pl-3 flex-col gap-2'>
                                        <span className='lg:text-base text-xs font-[400] font-montserrat text-[#807D7E]'>Style</span>
                                        <span className='text-[#3C4242] lg:text-base text-xs font-[500] font-montserrat'>Casual Wear</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-6 lg:pb-12 pb-6'>
                    <div className='flex flex-row  w-full'>
                        <div className='flex flex-row gap-4  items-center'>
                            <img src={line} alt="line" />
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Similar Products</span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full  gap-5 '>
                        {similarProducts.map((product) => (
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
            {isTab ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default FullImage