import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';

function Cart() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productDetails, setProductDetails] = useState({}); // To store color and size for each uniqueCode

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    const userId = useSelector((state) => state.user.id);
    const LedCode = sessionStorage.getItem('LedCode');

    // Fetch product details (color and size) by uniqueCode
    const fetchProductDetails = async (uniqueCode) => {
        try {
            const response = await fetch(
                `${apiBaseUrl}/getProductByUniqueCode/BLACKBATON_ERP24?uniqueCode=${uniqueCode}`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            const data = await response.json();
            if (data.length > 0) {
                return data[0]; // Return the first item (color and size)
            }
            return null;
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };

    // Fetch cart items
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!LedCode && !userId) {
            console.log("Skipping fetch: Both LedCode and userId are null");
            return;
        }

        const fetchCartItems = async () => {
            try {
                const ledCodeOrUserId = LedCode || userId;
                console.log("Fetching Cart Items for:", ledCodeOrUserId);

                const response = await fetch(
                    `${apiBaseUrl}/cart/items/BLACKBATON_ERP24/${ledCodeOrUserId}`
                );

                // if (!response.ok) {
                //     alert('no items in cart');
                // }

                const data = await response.json();
                if (data.success && data.items.length > 0) {
                    setCartItems(data.items);

                    // Fetch product details for each item
                    const details = {};
                    for (const item of data.items) {
                        const productInfo = await fetchProductDetails(item.uniqueCode);
                        if (productInfo) {
                            details[item.uniqueCode] = {
                                color: productInfo.Color,
                                size: productInfo.Size,
                            };
                        }
                    }
                    setProductDetails(details); // Store product details in state
                } else {
                    setCartItems([]);
                }
            } catch (error) {
                setError(error.message);
                setCartItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [LedCode, userId, apiBaseUrl]);

    const handleQuantityChange = async (sino, newQuantity) => {
        try {
            // Prevent quantity from going below 1
            if (newQuantity < 1) {
                alert('Quantity cannot be less than 1');
                return;
            }

            // Find the item in the cartItems array
            const itemToUpdate = cartItems.find((item) => item.sino === sino);

            // Calculate the difference between the new quantity and the current quantity
            const quantityDifference = newQuantity - itemToUpdate.quantity;

            // Send API request to update quantity in the backend
            const response = await fetch(`${apiBaseUrl}/cart/add/BLACKBATON_ERP24`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemId: itemToUpdate.itemId,
                    uniqueCode: itemToUpdate.uniqueCode,
                    itemName: itemToUpdate.itemName,
                    itemPrice: itemToUpdate.itemPrice,
                    quantity: quantityDifference, // Send the difference, not the new quantity
                    ledname: itemToUpdate.ledname,
                    ledcode: itemToUpdate.ledcode,
                    ledemail: itemToUpdate.ledemail,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }

            const data = await response.json();
            console.log('Quantity updated successfully:', data);

            // Update the cartItems state only after the API call succeeds
            const updatedCartItems = cartItems.map((item) =>
                item.sino === sino ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error('Error updating quantity:', error);
            alert('Failed to update quantity. Please try again.');
        }
    };

    const addresspage = () => {
        navigate('/address');
    };

    const wishlistpage = () => {
        navigate('/wishlist')
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='h-[56px] bg-[black] justify-center lg:hidden flex items-center fixed bottom-0 left-0 w-full text-base font-[600] font-montserrat text-[white]'>
                Place Order
            </div>
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-lg font-[700] font-montserrat text-left'>Shopping Bag</span>
                <div className='w-full flex lg:flex-row flex-col gap-8 lg:pb-12 pb-6'>
                    <div className='lg:w-[70%] w-full h-auto flex flex-col gap-3'>
                        <div className='rounded-[5px] lg:h-[58px] h-auto border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-row lg:items-center items-start lg:py-0 py-3 lg:px-5 px-1 lg:gap-0 gap-3'>
                            <span className='lg:text-sm text-xs font-[400] font-montserrat text-left'>
                                Deliver to:&nbsp;&nbsp;&nbsp;{cartItems[0]?.ledname || 'No delivery address'}
                            </span>
                            <span
                                className='lg:w-[10%] w-[30%] h-[30px] border-2 border-[black] rounded-[3.51px] flex justify-center items-center lg:text-sm text-xs font-[400] font-montserrat cursor-pointer'
                                onClick={addresspage}
                            >
                                Change
                            </span>
                        </div>

                        <div className='rounded-[5px] lg:h-[58px] h-auto border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-row lg:items-center items-start lg:py-0 py-3 lg:px-5 px-1 lg:gap-0 gap-3'>
                            <span className='lg:text-sm text-xs font-[400] font-montserrat'>Available Offer:&nbsp;&nbsp;&nbsp;</span>
                            <span className='lg:w-[10%] w-[30%] h-[30px] border-2 border-[black] rounded-[3.51px] flex justify-center items-center lg:text-sm text-xs font-[400] font-montserrat cursor-pointer'>
                                Add
                            </span>
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-[300px] bg-gray-100 rounded-md shadow-md p-6">
                                <span className="text-lg font-semibold text-gray-700">Your cart is empty</span>
                                <p className="text-sm text-gray-500">Add items to your cart to see them here.</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.sino} className='rounded-[5px] h-auto lg:px-5 px-1 py-5 border-2 border-[#EAEAEC] justify-between flex lg:flex-row flex-col'>
                                    <div className='flex flex-row h-[115px] gap-5 items-center'>
                                        <div className='h-full w-[90px] bg-[white] rounded-[5px] p-3'>
                                            <img
                                                src={`${apiLocalUrl}/uploads/${item.itemId}.jpg?v=${Date.now()}`}
                                                alt={item.itemName}
                                                style={{ width: '100%', height: '100%', mixBlendMode: 'multiply' }}
                                            />
                                        </div>
                                        <div className='h-full flex flex-col gap-2'>
                                            <span className='lg:text-base text-left text-sm font-[600] font-montserrat'>{item.itemName}</span>
                                            <span className='text-sm font-[400] font-montserrat text-left'>Qty: {item.quantity}</span>
                                            <span className='text-lg font-[600] font-montserrat text-left'>₹{item.itemPrice}</span>
                                            <span className='text-lg font-[600] font-montserrat text-left'>

                                                <div
                                                    style={{
                                                        display: 'inline-block',
                                                        width: '16px',
                                                        height: '16px',
                                                        borderRadius: '50%',
                                                        backgroundColor: productDetails[item.uniqueCode]?.color || 'transparent',
                                                        border: productDetails[item.uniqueCode]?.color ? '1px solid #ccc' : 'none',

                                                        verticalAlign: 'middle',
                                                    }}
                                                />
                                                &nbsp;,  {productDetails[item.uniqueCode]?.size || 'N/A'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3 items-end'>
                                        <span className='text-sm font-[400] font-montserrat'>Delivery by Sat Dec 28</span>
                                        <div className='lg:w-[50%] w-[30%] h-[36px] border-2 border-[#EAEAEC] rounded-[32px] flex flex-row justify-center items-center gap-3 '>
                                            <span
                                                className='font-[500] text-sm font-montserrat cursor-pointer'
                                                onClick={() => handleQuantityChange(item.sino, item.quantity - 1)}
                                            >
                                                -
                                            </span>
                                            <span className='font-[500] text-xl font-montserrat'>{item.quantity}</span>
                                            <span
                                                className='font-[500] text-sm font-montserrat cursor-pointer'
                                                onClick={() => handleQuantityChange(item.sino, item.quantity + 1)}
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] justify-between flex items-center lg:px-5 px-1 cursor-pointer' onClick={wishlistpage}>
                            <span className='text-sm font-[400] font-montserrat'>Add More From Wishlist</span>
                        </div>

                        <div className='rounded-[5px] h-[100px] border-2 border-[#EAEAEC] justify-end lg:flex hidden items-center lg:px-5 px-1'>
                            <div className='h-[50px] w-[30%] bg-[black] rounded-[5px] flex justify-center items-center text-base font-[500] font-montserrat text-[white] cursor-pointer'>
                                Place Order
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[30%] w-full h-[321px] flex flex-col rounded-[2px] border-2 border-[#EAEAEC] lg:mb-0 mb-[25%]'>
                        <div className='w-full h-[18%] border-b-2 border-[#EAEAEC] px-3 flex justify-between items-center text-base font-[600] font-montserrat'>
                            Price Details
                        </div>
                        <div className='w-full h-[82%] flex flex-col px-3 gap-5'>
                            <ul className='border-2 border-black mt-5 text-[#F0F0F0]' />
                            <div className='flex flex-col gap-5 w-full'>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Price ({cartItems.length} items)</span>
                                    <span className='text-base font-[600] font-montserrat'>
                                        ₹{cartItems.reduce((total, item) => total + item.itemPrice * item.quantity, 0)}
                                    </span>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Discount</span>
                                    <span className='text-base font-[600] font-montserrat'></span>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Delivery Charges</span>
                                    <span className='text-base font-[600] font-montserrat'>₹00.00</span>
                                </div>
                            </div>
                            <ul className='border-b-2 border-black border-dashed' />
                            <div className='w-full flex justify-between'>
                                <span className='text-base font-[600] font-montserrat'>Total Amount</span>
                                <span className='text-base font-[600] font-montserrat'>
                                    ₹{cartItems.reduce((total, item) => total + item.itemPrice * item.quantity, 0)}
                                </span>
                            </div>
                            <ul className='border-b-2 border-black border-dashed' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex hidden'>{isMobile ? <FooterMob /> : <Footer />}</div>
        </div>
    );
}

export default Cart;