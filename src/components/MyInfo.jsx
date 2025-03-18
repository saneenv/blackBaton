import React, { useEffect, useState } from 'react'
import NavbarMob from './NavbarMob'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';



function MyInfo() {
    const [userData, setUserData] = useState({
        full_name: '',
        email: '',
        password: ''
    });
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addressLoading, setAddressLoading] = useState(true); // Separate loading state for addresses
    const [error, setError] = useState(null);
    const [addressError, setAddressError] = useState(null);
    const navigate = useNavigate()
    const userId = useSelector((state) => state.user.id);
    const LedCode = sessionStorage.getItem('LedCode');
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/user/getCustomerById/BLACKBATON_ERP24/${LedCode || userId}`);
                if (response.data.success) {
                    setUserData(response.data.data);
                } else {
                    setError('User not found');
                }
            } catch (err) {
                setError('Error fetching user data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [LedCode, userId, apiBaseUrl]);

    // Fetch addresses
    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/user/getAddresses/${LedCode || userId}`);
                if (response.data.success) {
                    setAddresses(response.data.data); // Store fetched addresses
                } else {
                    setAddressError('No addresses found');
                }
            } catch (err) {
                setAddressError('Error fetching addresses');
                console.error(err);
            } finally {
                setAddressLoading(false);
            }
        };

        fetchAddresses();
    }, [LedCode, userId, apiBaseUrl]);


    const homePage = () => {
        navigate('/')
    }
    const accountPage = () => {
        navigate('/accountmob')
    }
    const forgotpassword = () => {
        navigate('/forgotpass')
    }

    const addresspage = () => {
        navigate('/address')
    }


    if (loading || addressLoading) {
        return <div>Loading...</div>;
    }

    if (error || addressError) {
        return <div>{error || addressError}</div>;
    }

    return (
        <div className='w-full h-auto flex flex-col gap-4 text-start'>
            <div className='md:hidden flex'>
                <NavbarMob />
            </div>
            <span className='text-3xl font-[700] font-montserrat lg:flex hidden'>My Info</span>
            <span className='text-2xl font-[600] font-montserrat text-[#3C4242] lg:flex hidden'>Contact Details</span>
            <div className='flex flex-col w-full lg:mt-0 mt-[120px] lg:px-0 px-3 '>
                <div className='flex flex-row gap-2 items-center mt-3 md:hidden'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]' onClick={accountPage}>Account</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>My Profile</span>

                </div>
                <div className='flex flex-col gap-3 mt-3 lg:hidden'>
                    <span className='lg:text-3xl text-base font-[700] font-montserrat  '>My Info</span>
                    <span className='lg:text-2xl text-sm font-[600] font-montserrat text-[#3C4242]  '>Contact Details</span>

                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1 lg:mt-0 mt-3'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Your Name</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>{userData.full_name}</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Email Address</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>{userData.email}</span>
                    </div>
                </div>


                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Password</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>{userData.password}</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242] cursor-pointer' onClick={forgotpassword}>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 lg:gap-12 gap-6'>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[700] font-montserrat'>Address</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242] cursor-pointer' onClick={addresspage}>Add New</span>

                    </div>
                    <div className='flex w-full lg:flex-row flex-col items-center h-[300px] gap-4 '>
                        {addresses.map((address, index) => (
                            <div key={index} className='lg:w-1/2 w-full h-full rounded-[12px] bg-[#F6F6F6] p-6 flex flex-col gap-3'>
                                <span className='lg:text-xl text-base font-[600] font-montserrat'>{address.name}</span>
                                <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>{address.mobile}</span>
                                <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>{address.address}, {address.locality}, {address.city}, {address.district} - {address.pincode}</span>
                                <div className='flex flex-row h-[34px] gap-4'>
                                    <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    {address.addressType}
                                    </div>
                                    {address.isActive && (
                                    <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                        Default billing address
                                    </div>
                                     )}
                                </div>
                                <div className='lg:flex hidden'>
                                    <br />

                                </div>
                              
                            </div>
                        ))}
                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyInfo