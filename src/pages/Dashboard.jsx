import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/dashboard/logo.png'
import calender from '../images/dashboard/Calendar.png'
import bag from '../images/dashboard/bag.png'
// import eye from '../images/dashboard/eye.png'
// import edit from '../images/dashboard/edit.png'
// import deleteimg from '../images/dashboard/delete.png'
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
            const response = await fetch(`${apiBaseUrl}/getProductById/BLACKBATON_2526?Id=${itemId}`);
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
            const response = await fetch(`${apiBaseUrl}/getProductByUniqueCode/BLACKBATON_2526?uniqueCode=${uniqueCode}`);
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
                const response = await fetch(`${apiBaseUrl}/allorder/list/BLACKBATON_2526`);
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


    // Add this function inside your Dashboard component
    const handleMarkAsDelivered = async (entryNo) => {
        try {
            const response = await fetch(`${apiBaseUrl}/order/update-delivery/BLACKBATON_2526/${entryNo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to update delivery status');
            }

            const data = await response.json();

            if (data.success) {
                // Update the orders state to reflect the change
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order.EntryNo === entryNo ? { ...order, isDelivered: true } : order
                    )
                );
            }
        } catch (error) {
            console.error('Error updating delivery status:', error);
            // You might want to show an error message to the user here
        }
    };

    const homePage = () => {
        navigate('/');
    }

    const imageuploadpage = () => {
        navigate('/imageupload');
    }

    const offerUpdatepage = () => {
        navigate('/offerupdate');
    }
    // Calculate summary statistics
    const totalOrders = orders.length;
    const totalIncome = orders.reduce((sum, order) => sum + order.Total, 0);
    // const processedOrders = orders.filter(order =>
    //     new Date(order.OrderDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    // ).length;

    // Function to format date to dd/mm/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
        const year = date.getFullYear(); // Get full year
        return `${day}/${month}/${year}`; // Return formatted date
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
    }

    return (
        <div className='flex flex-col w-full lg:gap-8 gap-4 mb-12'>
            {/* Header Section - unchanged */}
            <div className='w-full lg:px-12 px-3 lg:py-5 py-2 flex lg:justify-between justify-center items-center border-b-2 border-[#D9D9D9]'>
                <img src={logo} alt="logo" className='w-[104px] h-[44px] cursor-pointer lg:flex hidden' onClick={homePage} />

                <div className='flex flex-row lg:gap-8 gap-4'>
                    <span className='lg:text-base text-sm font-[600] font-montserrat text-black cursor-default'>
                        Orders
                    </span>
                    <span
                        className='lg:text-base text-sm font-[600] font-montserrat cursor-pointer text-[#7D7D7D] hover:text-black transition-colors duration-200'
                        onClick={homePage}
                    >
                        Home
                    </span>

                    <span
                        className='lg:text-base text-sm font-[600] font-montserrat cursor-pointer text-[#7D7D7D] hover:text-black transition-colors duration-200'
                        onClick={imageuploadpage}
                    >
                        Image Upload
                    </span>
                    <span
                        className='lg:text-base text-sm font-[600] font-montserrat cursor-pointer text-[#7D7D7D] hover:text-black transition-colors duration-200'
                        onClick={offerUpdatepage}
                    >
                       Add Offer 
                    </span>
                </div>
            </div>

            {/* User Info Section - unchanged */}
            <div className='lg:px-12 px-3 w-full flex justify-between items-center'>
                <span className='lg:text-xl text-base font-[600] font-montserrat lg:flex hidden'>Good Morning, {LedName}</span>
                <div className='flex flex-row lg:gap-4 gap-10 items-center'>
                    <div className='lg:w-[221px] w-[170px] text-[white] h-[44px] flex flex-row gap-3 justify-center items-center bg-[black] rounded-[8px] text-sm font-[500] font-montserrat'>
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
            <div className='grid w-full lg:grid-cols-4 grid-cols-2 lg:px-12 px-3 lg:gap-12 gap-2 lg:mt-6 mt-3'>
                {/* Total Orders Card - unchanged */}
                <div className='lg:h-[140px] h-[120px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center lg:p-4 p-2'>
                    <div className='flex lg:flex-row flex-col gap-3 '>
                        <div className='lg:w-[64px] lg:h-[60px] w-[54px] h-[50px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={bag} alt="bag" />
                        </div>
                        <div className='flex lg:flex-col flex-row lg:gap-1 gap-2 text-left'>
                            <span className='lg:text-xl text-base font-[600] font-montserrat whitespace-nowrap'>{totalOrders}</span>
                            <span className='font-[500] lg:text-base text-sm font-montserrat text-[#B2B2B2]'>Total Orders</span>
                        </div>
                    </div>
                </div>

                {/* Orders in Process Card - updated */}
                <div className='lg:h-[140px] h-[120px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center lg:p-4 p-2'>
                    <div className='flex lg:flex-row flex-col gap-3 '>
                        <div className='lg:w-[64px] lg:h-[60px] w-[54px] h-[50px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={processimg} alt="process" />
                        </div>
                        <div className='flex lg:flex-col flex-row lg:gap-1 gap-2 text-left'>
                            <span className='lg:text-xl text-base font-[600] font-montserrat whitespace-nowrap'>
                                {orders.filter(order => order.isDelivered === false).length}
                            </span>
                            <span className='font-[500] lg:text-base text-sm font-montserrat text-[#B2B2B2]'>Order in process</span>
                        </div>
                    </div>
                </div>

                {/* Completed Orders Card - updated */}
                <div className='lg:h-[140px] h-[120px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center lg:p-4 p-2'>
                    <div className='flex lg:flex-row flex-col gap-3 '>
                        <div className='lg:w-[64px] lg:h-[60px] w-[54px] h-[50px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={verified} alt="verified" />
                        </div>
                        <div className='flex lg:flex-col flex-row lg:gap-1 gap-2 text-left'>
                            <span className='lg:text-xl text-base font-[600] font-montserrat whitespace-nowrap'>
                                {orders.filter(order => order.isDelivered === true).length}
                            </span>
                            <span className='font-[500] lg:text-base text-sm font-montserrat text-[#B2B2B2]'>Completed Orders</span>
                        </div>
                    </div>
                </div>

                {/* Total Income Card - unchanged */}
                <div className='lg:h-[140px] h-[120px] border-2 border-[#EFEFEF] rounded-[20px] flex items-center lg:p-4 p-2'>
                    <div className='flex lg:flex-row flex-col gap-3 '>
                        <div className='lg:w-[64px] lg:h-[60px] w-[54px] h-[50px] rounded-[20px] bg-[black] flex justify-center items-center'>
                            <img src={income} alt="income" />
                        </div>
                        <div className='flex lg:flex-col flex-row lg:gap-1 gap-2 text-left'>
                            <span className='lg:text-xl text-base font-[600] font-montserrat whitespace-nowrap'>₹{totalIncome}</span>
                            <span className='font-[500] lg:text-base text-sm font-montserrat text-[#B2B2B2]'>Total Income</span>
                        </div>
                    </div>
                </div>
            </div>



            {/* Order List - now with dynamic data */}
            <div className='lg:px-12 px-3 w-full lg:mt-6 mt-3'>
                <div className='border-2 border-[#EFEFEF] rounded-t-[10px] w-full lg:block hidden'>
                    <div className='h-[60px] w-full flex items-center px-5 lg:text-xl text-lg font-[500] font-montserrat'>
                        Order List
                    </div>
                    <div className='flex flex-row h-[60px] w-full bg-[black]'>
                        <div className='w-[20%] border-r-2 border-[#E7E7E7] flex items-center px-3 flex-row gap-4'>
                            {/* <input type="checkbox" className='w-[20px] h-[20px]' /> */}
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Customer Name</span>
                        </div>
                        <div className='w-[30%] border-r-2 border-[#E7E7E7] flex items-center px-3 '>
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Product</span>
                        </div>
                        <div className='w-[30%] border-r-2 border-[#E7E7E7] flex items-center px-3 '>
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Address</span>
                        </div>
                        {/* <div className='w-[10%] flex items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Action</span>
                        </div> */}
                        <div className='w-[10%] flex border-r-2 border-[#E7E7E7] items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Order ID</span>
                        </div>
                        <div className='w-[10%] flex items-center px-3'>
                            <span className='text-lg font-[500] font-montserrat text-[white]'>Status</span>
                        </div>
                    </div>

                    {orders.map((order, index) => (
                        <div
                            key={order.UniqueCode}
                            className={`flex flex-row h-auto py-3 w-full border-b-2 border-[#EFEFEF] ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                        >
                            <div className='w-[20%] flex items-center px-3 flex-row gap-4 border-r-2 border-[#EFEFEF]'>
                                {/* <input type="checkbox" className='w-[20px] h-[20px]' /> */}
                                <div className='flex flex-col text-left min-w-0'> {/* Add min-w-0 to enable text wrapping */}
                                    <span className='text-sm font-[400] font-montserrat'>ID {order.LedCode}</span>
                                    <span className='text-base font-[400] font-montserrat text-[#454545] break-words whitespace-normal overflow-hidden'>
                                        {customerNames[order.LedCode] || 'Loading...'}
                                    </span>
                                    <span className='text-sm font-[400] font-montserrat'>{formatDate(order.OrderDate)}</span>

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
                            <div className='w-[10%] flex items-center px-3 flex-row gap-3 border-r-2 border-[#EFEFEF]'>
                                <span className='text-sm font-[400] font-montserrat'>{order.EntryNo}</span>
                            </div>
                            <div className='w-[10%] flex items-start justify-center px-3 flex-col gap-3'>
                                <span
                                    className={`text-sm font-[700] font-montserrat ${order.isDelivered ? "text-green-500" : "text-red-500"}`}
                                >
                                    {order.isDelivered ? "Success" : "Pending"}
                                </span>

                                {!order.isDelivered && (
                                    <div
                                        className='w-[90%] h-[25px] rounded-[10px] bg-[black] text-[white] cursor-pointer flex items-center justify-center'
                                        onClick={() => handleMarkAsDelivered(order.EntryNo)}
                                    >
                                        Done
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

                <div className='lg:hidden overflow-x-auto'>
                    {orders.map((order, index) => (
                        <div
                            key={order.UniqueCode}
                            className={`flex flex-row h-[200px] w-[1300px] border-b-2 border-[#EFEFEF] ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                        >
                            <div className=' w-[200px] flex items-center px-1 flex-row  gap-2 border-r-2 border-[#EFEFEF]'>
                                <input type="checkbox" className='lg:w-[20px] lg:h-[20px] w-[10px] h-[10px]' />
                                <div className='flex flex-col text-left min-w-0'>
                                    <span className='lg:text-sm text-xs font-[400] font-montserrat'>ID {order.LedCode}</span>
                                    <span className='lg:text-base text-sm font-[400] font-montserrat text-[#454545] break-words whitespace-normal overflow-hidden'>
                                        {customerNames[order.LedCode] || 'Loading...'}
                                    </span>
                                    <span className='lg:text-sm text-xs font-[400] font-montserrat'>{formatDate(order.OrderDate)}</span>
                                </div>
                            </div>
                            <div className='w-[250px] flex items-center px-1 border-r-2 border-[#EFEFEF]'>
                                <div className='flex flex-col text-left gap-1'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-xs font-[400] font-montserrat'>
                                            {productNames[order.Itemid] || 'Loading...'}
                                        </span>
                                        <div className='flex flex-row gap-2 items-center'>
                                            {productDetails[order.UniqueCode] ? (
                                                <>
                                                    <span className='text-xs font-[400] font-montserrat'>
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
                                                    <span className='text-xs font-[400] font-montserrat'>
                                                        Qty - {order.Quantity}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className='text-xs font-[400] font-montserrat'>
                                                    Loading details...
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[650px] flex items-center px-3 border-r-2 border-[#EFEFEF]'>
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
                            <div className='w-[100px] flex items-center px-3 flex-row gap-3 border-r-2 border-[#EFEFEF]'>
                                <span className='text-sm font-[400] font-montserrat'>{order.EntryNo}</span>
                            </div>
                            <div className='w-[100px]  flex items-start justify-center px-3 flex-col gap-3'>
                                <span
                                    className={`text-sm font-[700] font-montserrat ${order.isDelivered ? "text-green-500" : "text-red-500"}`}
                                >
                                    {order.isDelivered ? "Success" : "Pending"}
                                </span>

                                {!order.isDelivered && (
                                    <div
                                        className='w-[90%] h-[25px] rounded-[10px] bg-[black] text-[white] cursor-pointer flex items-center justify-center'
                                        onClick={() => handleMarkAsDelivered(order.EntryNo)}
                                    >
                                        Done
                                    </div>
                                )}

                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard