import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/dashboard/logo.png'
import calender from '../images/dashboard/Calendar.png'
import bag from '../images/dashboard/bag.png'
import eye from '../images/dashboard/eye.png'
import edit from '../images/dashboard/edit.png'
import deleteimg from '../images/dashboard/delete.png'
import processimg from '../images/dashboard/Process.png'
import verified from '../images/dashboard/Verified.png'
import income from '../images/dashboard/Income.png'

function Dashboard() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [customerNames, setCustomerNames] = useState({});
    const [productNames, setProductNames] = useState({});
    const [productDetails, setProductDetails] = useState({});
    const [customerAddresses, setCustomerAddresses] = useState({});


    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const LedName = sessionStorage.getItem('loginName') || 'unknown';

    const fetchCustomerName = async (ledCode) => {
        try {
            const response = await fetch(`${apiBaseUrl}/user/getAddresses/${ledCode}`);
            if (!response.ok) {
                throw new Error('Failed to fetch customer data');
            }
            const data = await response.json();
            if (data.success && data.data.length > 0) {
                const activeAddress = data.data.find(address => address.isActive) || data.data[0];
                return {
                    name: activeAddress.name,
                    addressData: activeAddress
                };
            }
            return {
                name: 'Unknown Customer',
                addressData: null
            };
        } catch (error) {
            console.error('Error fetching customer name:', error);
            return {
                name: 'Unknown Customer',
                addressData: null
            };
        }
    };

    // Add this function to fetch product name
    const fetchProductName = async (itemId) => {
        try {
            const response = await fetch(`${apiBaseUrl}/getProductById/BLACKBATON_ERP24?Id=${itemId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            return data.length > 0 ? data[0].ItemName : 'Unknown Product';
        } catch (error) {
            console.error('Error fetching product name:', error);
            return 'Unknown Product';
        }
    };

    // Add this function to fetch product details
    const fetchProductDetails = async (uniqueCode) => {
        try {
            const response = await fetch(`${apiBaseUrl}/getProductByUniqueCode/BLACKBATON_ERP24?uniqueCode=${uniqueCode}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };



    // Update your useEffect to also fetch product details
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/allorder/list/BLACKBATON_ERP24`);
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                if (data.success) {
                    setOrders(data.orders);

                    // Fetch names for all unique LedCodes and ItemIds
                    const uniqueLedCodes = [...new Set(data.orders.map(order => order.LedCode))];
                    const uniqueItemIds = [...new Set(data.orders.map(order => order.Itemid))];

                    // Initialize all state containers
                    const customerNames = {};
                    const customerAddresses = {};
                    const productNames = {};
                    const productDetails = {};

                    // Fetch all data in parallel
                    await Promise.all([
                        // Fetch customer data
                        ...uniqueLedCodes.map(async (code) => {
                            const { name, addressData } = await fetchCustomerName(code);
                            customerNames[code] = name;
                            customerAddresses[code] = addressData;
                        }),

                        // Fetch product names
                        ...uniqueItemIds.map(async (id) => {
                            productNames[id] = await fetchProductName(id);
                        }),

                        // Fetch product details
                        ...data.orders.map(async (order) => {
                            const details = await fetchProductDetails(order.UniqueCode);
                            if (details) {
                                productDetails[order.UniqueCode] = details;
                            }
                        })
                    ]);

                    // Update all states at once
                    setCustomerNames(customerNames);
                    setCustomerAddresses(customerAddresses);
                    setProductNames(productNames);
                    setProductDetails(productDetails);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [apiBaseUrl]);

    const homePage = () => {
        navigate('/');
    }

    // Calculate summary statistics
    const totalOrders = orders.length;
    const totalIncome = orders.reduce((sum, order) => sum + order.Total, 0);
    // const processedOrders = orders.filter(order =>
    //     new Date(order.OrderDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    // ).length;

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
    }

    return (
        <div className='flex flex-col w-full gap-8 mb-12'>
            {/* Header Section - unchanged */}
            <div className='w-full px-12 py-5 flex justify-between items-center border-b-2 border-[#D9D9D9]'>
                <img src={logo} alt="logo" className='w-[104px] h-[44px]' />
                <div className='flex flex-row gap-8'>
                    <span
                        className='text-base font-[600] font-montserrat cursor-pointer text-[#7D7D7D] hover:text-black transition-colors duration-200'
                        onClick={homePage}
                    >
                        Home
                    </span>
                    <span className='text-base font-[600] font-montserrat text-black cursor-default'>
                        Orders
                    </span>
                </div>
            </div>

            {/* User Info Section - unchanged */}
            <div className='px-12 w-full flex justify-between items-center'>
                <span className='text-xl font-[600] font-montserrat'>Good Morning, {LedName}</span>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='w-[221px] text-[white] h-[44px] flex flex-row gap-3 justify-center items-center bg-[black] rounded-[8px] text-sm font-[500] font-montserrat'>
                        <img src={calender} alt="calender" />
                        <span>{new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                    <div className='flex flex-row gap-2 h-[50px] items-center p-2'>
                        <div className='w-[50px] h-[50px] rounded-full border-2  flex items-center justify-center bg-blue-800 text-white font-[600]'>
                            {LedName && LedName.split(' ').map(name => name[0]).join('').toUpperCase()}
                        </div>
                        <div className='flex flex-col gap-1 text-left'>
                            <span className='text-sm font-[600] font-montserrat whitespace-nowrap'>{LedName}</span>
                            <span className='font-[500] text-xs font-montserrat'>Admin</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary Cards - now with dynamic data */}
            <div className='grid w-full grid-cols-4 px-12 gap-12 mt-6'>
                {/* Total Orders Card - unchanged */}
                <div className='h-[140px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center p-4'>
                    <div className='flex flex-row gap-3 '>
                        <div className='w-[64px] h-[60px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={bag} alt="bag" />
                        </div>
                        <div className='flex flex-col gap-1 text-left'>
                            <span className='text-xl font-[600] font-montserrat whitespace-nowrap'>{totalOrders}</span>
                            <span className='font-[500] text-base font-montserrat text-[#B2B2B2]'>Total Orders</span>
                        </div>
                    </div>
                </div>

                {/* Orders in Process Card - updated */}
                <div className='h-[140px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center p-4'>
                    <div className='flex flex-row gap-3 '>
                        <div className='w-[64px] h-[60px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={processimg} alt="process" />
                        </div>
                        <div className='flex flex-col gap-1 text-left'>
                            <span className='text-xl font-[600] font-montserrat whitespace-nowrap'>
                                {orders.filter(order => order.isDelivered === false).length}
                            </span>
                            <span className='font-[500] text-base font-montserrat text-[#B2B2B2]'>Order in process</span>
                        </div>
                    </div>
                </div>

                {/* Completed Orders Card - updated */}
                <div className='h-[140px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center p-4'>
                    <div className='flex flex-row gap-3 '>
                        <div className='w-[64px] h-[60px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={verified} alt="verified" />
                        </div>
                        <div className='flex flex-col gap-1 text-left'>
                            <span className='text-xl font-[600] font-montserrat whitespace-nowrap'>
                                {orders.filter(order => order.isDelivered === true).length}
                            </span>
                            <span className='font-[500] text-base font-montserrat text-[#B2B2B2]'>Completed Orders</span>
                        </div>
                    </div>
                </div>

                {/* Total Income Card - unchanged */}
                <div className='h-[140px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center p-4'>
                    <div className='flex flex-row gap-3 '>
                        <div className='w-[64px] h-[60px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={income} alt="income" />
                        </div>
                        <div className='flex flex-col gap-1 text-left'>
                            <span className='text-xl font-[600] font-montserrat whitespace-nowrap'>₹{totalIncome}</span>
                            <span className='font-[500] text-base font-montserrat text-[#B2B2B2]'>Total Income</span>
                        </div>
                    </div>
                </div>
            </div>



            {/* Order List - now with dynamic data */}
            <div className='px-12 w-full mt-6'>
                <div className='border-2 border-[#EFEFEF] rounded-t-[10px] w-full'>
                    <div className='h-[60px] w-full flex items-center px-5 text-xl font-[500] font-montserrat'>
                        Order List
                    </div>
                    <div className='flex flex-row h-[60px] w-full bg-[#F6F6F6]'>
                        <div className='w-[20%] border-r-2 border-[#E7E7E7] flex items-center px-3 flex-row gap-4'>
                            <input type="checkbox" className='w-[20px] h-[20px]' />
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Customer Name</span>
                        </div>
                        <div className='w-[30%] border-r-2 border-[#E7E7E7] flex items-center px-3 '>
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Product</span>
                        </div>
                        <div className='w-[30%] border-r-2 border-[#E7E7E7] flex items-center px-3 '>
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Address</span>
                        </div>
                        {/* <div className='w-[10%] flex items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Action</span>
                        </div> */}
                        <div className='w-[10%] flex border-r-2 border-[#E7E7E7] items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Order ID</span>
                        </div>
                        <div className='w-[10%] flex items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[#454545]'>Status</span>
                        </div>
                    </div>

                    {orders.map((order) => (
                        <div key={order.UniqueCode} className='flex flex-row h-auto py-3 w-full border-b-2 border-[#EFEFEF]'>
                            <div className='w-[20%] flex items-center px-3 flex-row gap-4 border-r-2 border-[#EFEFEF]'>
                                <input type="checkbox" className='w-[20px] h-[20px]' />
                                <div className='flex flex-col text-left min-w-0'> {/* Add min-w-0 to enable text wrapping */}
                                    <span className='text-sm font-[400] font-montserrat'>ID {order.LedCode}</span>
                                    <span className='text-base font-[400] font-montserrat text-[#454545] break-words whitespace-normal overflow-hidden'>
                                        {customerNames[order.LedCode] || 'Loading...'}
                                    </span>
                                </div>
                            </div>
                            <div className='w-[30%] flex items-center px-3 border-r-2 border-[#EFEFEF]'>
                                <div className='flex flex-col text-left gap-2'>

                                    <div className='flex flex-col gap-2'>
                                        <span className='text-sm font-[400] font-montserrat'>
                                            {productNames[order.Itemid] || 'Loading...'}
                                        </span>
                                        <div className='flex flex-row gap-6 items-center'>
                                            {productDetails[order.UniqueCode] ? (
                                                <>
                                                    <span className='text-sm font-[400] font-montserrat'>
                                                        {productDetails[order.UniqueCode].Size || 'N/A'}
                                                    </span>

                                                    <div
                                                        style={{
                                                            display: 'inline-block',
                                                            width: '16px',
                                                            height: '16px',
                                                            borderRadius: '50%',
                                                            backgroundColor: productDetails[order.UniqueCode]?.Color || 'transparent',
                                                            border: productDetails[order.UniqueCode]?.Color ? '1px solid #ccc' : 'none',

                                                            verticalAlign: 'middle',
                                                        }}
                                                    />
                                                    <span className='text-sm font-[400] font-montserrat'>
                                                        Qty - {order.Quantity}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className='text-sm font-[400] font-montserrat'>
                                                    Loading details...
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[30%] flex items-center px-3 border-r-2 border-[#EFEFEF]'>
                                <div className='flex flex-col text-left gap-1'>
                                    <span className='text-sm font-[400] font-montserrat'>
                                        Phone: {order.PhoneNo}
                                    </span>
                                    {customerAddresses[order.LedCode] && (
                                        <>
                                            <span className='text-sm font-[400] font-montserrat'>
                                                {customerAddresses[order.LedCode].name}
                                            </span>
                                            <span className='text-sm font-[400] font-montserrat'>
                                                {customerAddresses[order.LedCode].address}
                                            </span>
                                            <span className='text-sm font-[400] font-montserrat'>
                                                {customerAddresses[order.LedCode].locality}, {customerAddresses[order.LedCode].city}
                                            </span>
                                            <span className='text-sm font-[400] font-montserrat'>
                                                {customerAddresses[order.LedCode].district}, {customerAddresses[order.LedCode].pincode}
                                            </span>
                                            <span className='text-sm font-[400] font-montserrat'>
                                                Address Type: {customerAddresses[order.LedCode].addressType}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='w-[10%] flex  items-center px-3 flex-row gap-3  border-r-2 border-[#EFEFEF]'>
                                <span className='text-sm font-[400] font-montserrat'>{order.EntryNo}</span>
                            </div>
                            <div className='w-[10%] flex justify-center items-center px-3 flex-row gap-3'>
                                {/* <img src={eye} alt="view" className="cursor-pointer" />
                                <img src={edit} alt="edit" className="cursor-pointer" />
                                <img src={deleteimg} alt="delete" className="cursor-pointer" /> */}
                                <span className='text-sm font-[400] font-montserrat'>
                                    {order.isDelivered ? 1 : 0}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard