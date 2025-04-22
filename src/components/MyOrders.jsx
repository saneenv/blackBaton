import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import arrow from '../images/Account/arrow.png';
import NavbarMob from './NavbarMob';
import { useSelector } from 'react-redux';

function MyOrders() {
    const [orders, setOrders] = useState([]); // State to store orders
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to handle errors
    const [productNames, setProductNames] = useState({}); // State to store product names by Itemid
    const [sizes, setSizes] = useState({}); // State to store sizes by UniqueCode
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;

    const userId = useSelector((state) => state.user.id);
    const LedCode = sessionStorage.getItem('LedCode');
    const navigate = useNavigate();

    // Fetch orders from the API
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    `${apiBaseUrl}/order/list/BLACKBATON_2526/${LedCode || userId}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                if (data.success) {
                    setOrders(data.orders); // Store orders in state

                    // Fetch product names and sizes for each order
                    const names = {};
                    const sizeData = {};
                    for (const order of data.orders) {
                        const productName = await fetchProductName(order.Itemid);
                        names[order.Itemid] = productName;

                        const size = await fetchProductSize(order.UniqueCode);
                        sizeData[order.UniqueCode] = size;
                    }
                    setProductNames(names); // Store product names in state
                    setSizes(sizeData); // Store sizes in state
                } else {
                    setOrders([]); // Set empty array if no orders found
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
                setError(error.message); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchOrders();
    }, [apiBaseUrl, LedCode, userId]);

    // Fetch product name by Itemid
    const fetchProductName = async (itemId) => {
        try {
            const response = await fetch(
                `${apiBaseUrl}/getProductById/BLACKBATON_2526?Id=${itemId}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch product name');
            }

            const data = await response.json();
            if (data.length > 0) {
                return data[0].ItemName; // Return the product name
            }
            return 'Unknown Product'; // Default name if product not found
        } catch (error) {
            console.error('Error fetching product name:', error);
            return 'Unknown Product'; // Default name if an error occurs
        }
    };

    // Fetch product size by UniqueCode
    const fetchProductSize = async (uniqueCode) => {
        try {
            const response = await fetch(
                `${apiBaseUrl}/getProductByUniqueCode/BLACKBATON_2526?uniqueCode=${uniqueCode}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch product size');
            }

            const data = await response.json();
            if (data.length > 0) {
                return data[0].Size; // Return the product size
            }
            return 'N/A'; // Default size if product not found
        } catch (error) {
            console.error('Error fetching product size:', error);
            return 'N/A'; // Default size if an error occurs
        }
    };

    // Navigation functions
    const homePage = () => {
        navigate('/');
    };

    const loginPage = () => {
        navigate('/login');
    };

    const accountPage = () => {
        navigate('/accountmob');
    };

    // const orderSummaryPage = () => {
    //     navigate('/ordersummary');
    // };

    // Display loading state
    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <span className="text-lg font-[600] font-montserrat">Loading...</span>
            </div>
        );
    }

    // Display error state
    if (error) {
        return (
            <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
                <span className="text-lg font-[600] font-montserrat text-red-500">No Orders</span>
                {/* <div className='w-auto p-3 h-[40px] bg-[black] text-[white] rounded-md flex justify-center items-center text-sm font-[600] font-montserrat cursor-pointer' onClick={loginPage}>Login First</div> */}
            </div>
        );
    }

    return (
        <div className='w-full h-auto flex flex-col lg:gap-6 gap-4 text-start'>
            <div className='md:hidden flex'>
                <NavbarMob />
            </div>
            <div className='flex flex-col w-full lg:mt-0 mt-[120px] lg:px-0 px-3'>
                <div className='flex flex-row gap-2 items-center mt-3 md:hidden'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]' onClick={accountPage}>Account</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>My Orders</span>
                </div>
                <span className='text-3xl font-[700] font-montserrat lg:flex hidden'>My Orders</span>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                    {orders.length === 0 ? (
                        <div className="w-full flex justify-center items-center">
                            <span className="text-lg font-[600] font-montserrat">No orders found</span>
                        </div>
                    ) : (
                        orders.map((order) => (
                            <div
                                key={order.EntryNo}
                                className='lg:h-[180px] h-[140px] bg-[#F6F6F6] rounded-[8px] lg:p-5 p-2 flex flex-row lg:gap-5 gap-3 items-center cursor-pointer'
                                // onClick={orderSummaryPage}
                            >
                                <div className='lg:w-[117px] w-[87px] lg:h-[130px] h-[80px]'>
                                    <img src={`${apiLocalUrl}/uploads/${order.Itemid}.jpg?v=${Date.now()}`} alt="product" className='w-full h-full' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <span className='lg:text-lg text-base font-[600] font-montserrat text-[#3C4242]'>
                                        {productNames[order.Itemid] || 'Loading...'}
                                    </span>
                                    <span className='lg:text-base text-sm font-[500] font-montserrat'>
                                        Size: {sizes[order.UniqueCode] || 'Loading...'}
                                    </span>
                                    <span className='lg:text-base text-sm font-[500] font-montserrat'>
                                        Ordered on {new Date(order.OrderDate).toLocaleDateString('en-GB')}
                                    </span>
                                </div>
                                {/* <div className='flex justify-end h-full items-end'>
                                    <img src={arrow} alt="arrow" />
                                </div> */}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyOrders;