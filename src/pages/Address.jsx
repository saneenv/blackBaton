import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';
import AddressChange from '../components/AddressChange';
import EditAddress from '../components/EditAddress';

function Address() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [showAddressChange, setShowAddressChange] = useState(false);
    const [loginId, setLoginId] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [activeAddressId, setActiveAddressId] = useState(null);
    const [editingAddressId, setEditingAddressId] = useState(null);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        // Get userId from sessionStorage
        const storedLoginId = sessionStorage.getItem('loginId');
        setLoginId(storedLoginId);
    }, []);

    const userId = useSelector((state) => state.user.id);
    console.log('Logged in User ID:', userId);

    // Determine which ID to pass to AddressChange
    const userIdToPass = loginId || userId;


    useEffect(() => {
        // Fetch addresses when userIdToPass changes
        if (userIdToPass) {
            fetchAddresses(userIdToPass);
        }
    }, [userIdToPass]);

    const fetchAddresses = async (ledcode) => {
        try {
            const response = await fetch(`${apiBaseUrl}/user/getAddresses/${ledcode}`);
            const data = await response.json();
            if (data.success) {
                setAddresses(data.data); // Set fetched addresses to state
            } else {
                console.error('Failed to fetch addresses:', data.error);
            }
        } catch (err) {
            console.error('Error fetching addresses:', err);
        }
    };

    const handleSetActiveAddress = async (addressId) => {
        try {
            // Update the backend
            const response = await fetch(`${apiBaseUrl}/user/setActiveAddress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ addressId, ledcode: userIdToPass }),
            });

            if (response.ok) {
                // Update the frontend state
                setActiveAddressId(addressId);
                // Refetch addresses to ensure the UI is up-to-date
                fetchAddresses(userIdToPass);
            } else {
                console.error('Failed to set active address');
            }
        } catch (err) {
            console.error('Error setting active address:', err);
        }
    };

    useEffect(() => {
        if (addresses.length > 0) {
            const activeAddress = addresses.find((address) => address.isActive);
            if (activeAddress) {
                setActiveAddressId(activeAddress.id);
            }
        }
    }, [addresses]);

    const handleRemoveAddress = async (addressId) => {
        try {
            // Send a request to the backend to delete the address
            const response = await fetch(`${apiBaseUrl}/user/deleteAddress`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ addressId, ledcode: userIdToPass }),
            });

            if (response.ok) {
                // Remove the address from the frontend state
                setAddresses((prevAddresses) => prevAddresses.filter((address) => address.id !== addressId));
            } else {
                console.error('Failed to delete address');
            }
        } catch (err) {
            console.error('Error deleting address:', err);
        }
    };



    const handleAddNewAddressClick = () => {
        setShowAddressChange(true); // Show the AddressChange component
    };

    const handleCloseAddressChange = () => {
        setShowAddressChange(false); // Hide the AddressChange component
        fetchAddresses(userIdToPass); // Refetch addresses
    };

    const handleEditAddressClick = (addressId) => {
        setEditingAddressId(addressId);
    };

    const handleCloseEditAddress = () => {
        setEditingAddressId(null); // Hide the EditAddress component
        fetchAddresses(userIdToPass); // Refetch addresses
    };

    const cartPage = () => {
        navigate('/cart');
    }


    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div onClick={cartPage} className=' h-[56px]  bg-[black] justify-center  lg:hidden flex items-center  fixed bottom-0 left-0 w-full text-base font-[600] font-montserrat text-[white] '>

                Continue
            </div>
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <div className='flex justify-between w-full '>
                    <span className='lg:text-2xl text-lg font-[700] font-montserrat text-left'>Select Delivery Address</span>
                    <div className='w-[150px] h-[34px] rounded-[4px] border-2 border-[black] bg-[black] text-white lg:flex hidden justify-center items-center cursor-pointer text-sm font-[700] font-montserrat ' onClick={cartPage}>
                        Continue
                    </div>

                </div>
                <div className='w-full flex lg:flex-row flex-col gap-8 lg:pb-12 pb-6'>
                    <div className='lg:w-full w-full h-auto flex flex-col gap-3'>
                        {addresses.map((address) => (
                            <div key={address.id} className='rounded-[5px] h-auto lg:px-5 px-1 py-5 border-2 border-[#EAEAEC] justify-between flex flex-col lg:gap-6 gap-3'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-row lg:gap-4 gap-2 items-center'>
                                        <div
                                            className={`w-[20px] h-[20px] rounded-full border-4 ${activeAddressId === address.id ? 'border-[black]' : 'border-[#EAEAEC]'
                                                } cursor-pointer`}
                                            onClick={() => handleSetActiveAddress(address.id)}
                                        ></div>
                                        <span className='text-sm font-[600] font-montserrat'>{address.name}</span>
                                        <div className='w-[57px] h-[23px] rounded-[32px] border-2 border-[black] flex justify-center items-center font-[500] text-xs font-montserrat'>
                                            {address.addressType}
                                        </div>
                                    </div>

                                </div>
                                <span className='text-left text-sm font-[400] font-montserrat text-[#616161] pl-7'>
                                    {address.address}, {address.city}, {address.district}, {address.pincode}
                                </span>
                                <div className='flex flex-row gap-3 pl-7'>
                                    <span className='text-sm font-[400] font-montserrat text-[#616161]'>Mobile Number :</span>
                                    <span className='text-sm font-[700] font-montserrat'>{address.mobile}</span>
                                </div>

                                <div className='flex flex-row gap-6 pl-7'>
                                    <div
                                        className='h-[33px] p-3 flex justify-center items-center border-2 border-[black] text-sm font-[400] font-montserrat cursor-pointer'
                                        onClick={() => handleRemoveAddress(address.id)}
                                    >
                                        Remove
                                    </div>
                                    <div
                                        className='h-[33px] p-3 flex justify-center items-center border-2 border-[black] text-sm font-[400] font-montserrat cursor-pointer'
                                        onClick={() => handleEditAddressClick(address.id)}
                                    >
                                        Edit
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Add New Address Button */}
                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] justify-between lg:flex hidden items-center lg:px-5 px-1 cursor-pointer' onClick={handleAddNewAddressClick}>
                            <span className='text-sm font-[400] font-montserrat'>+ Add New Address</span>
                        </div>
                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] bg-[black] justify-center items-center lg:hidden flex text-sm font-[600] font-montserrat text-[white] lg:px-5 px-1' onClick={handleAddNewAddressClick}>
                            ADD NEW ADDRESS
                        </div>
                        {showAddressChange && <AddressChange onClose={handleCloseAddressChange} userId={userIdToPass} />}{/* Conditionally Render AddressChange Component */}
                        {editingAddressId && (
                            <EditAddress
                                onClose={handleCloseEditAddress} // Use the new handler
                                userId={userIdToPass}
                                addressId={editingAddressId}
                                fetchAddresses={fetchAddresses}
                            />
                        )}

                    </div>


                </div>

            </div>
            <div className='lg:flex hidden'>
                {isMobile ? <FooterMob /> : <Footer />}

            </div>

        </div>
    )
}

export default Address