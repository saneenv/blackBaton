import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarMob from '../components/NavbarMob'
import profilepic from '../images/Account/profilepic.png'
import profile from '../images/Account/profile.png'
import forward from '../images/Account/forward.png'
import settings from '../images/Account/settings.png'
import terms from '../images/Account/terms.png'
import privacy from '../images/Account/Privacy.png'
import orders from '../images/Account/ordersmob.png'
import wishlist from '../images/Account/wishlistmob.png'
import signout from '../images/Account/signoutmob.png'

function AccountMob() {
    const navigate = useNavigate()

    const homePage = () => {
        navigate('/')
    }

    const profilePage = () => {
        navigate('/myinfo')
    }

    const orderPage = () => {
        navigate('/myorders')
    }

    const wishList = () => {
        navigate('/wishlist')
    }

    const logout = () => {
        navigate('/login')
    }

    const privacyAndPolicyPage = () => {
        navigate('/privacypolicy')
    }

    const termsAndConditionsPage = () => {
        navigate('/termsconditions')
    }
    
    return ( 
        <div className='min-h-screen flex flex-col gap-6'>
            <NavbarMob />
            <div className='w-full h-auto px-3 py-6 flex flex-col  gap-6  mt-[120px] pb-6'>
                <div className='flex flex-row gap-2 items-center'>
                    <span className='text-xs font-[500] font-montserrat text-[#828282] cursor-pointer' onClick={homePage}>Home</span>
                    <span className='text-[#828282]'>{">"}</span>
                    <span className='text-xs font-[400] font-montserrat text-[#3C4242]'>Account</span>
                </div>

                <div className='w-full gap-3 flex flex-col items-center justify-center'>
                    <div className='w-[92px] h-[94px] rounded-full'>
                        <img src={profilepic} alt="profilepic" className='w-full h-full' />
                    </div>
                    <span className='text-lg font-[500] font-montserrat'>John Doe</span>
                    <div className='h-[50px] w-full bg-[black] text-white rounded-[10px] flex justify-center items-center text-base font-[400] font-montserrat'>
                        Edit Profile
                    </div>
                </div>

                <div className='w-full flex flex-col pb-6'>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={profilePage}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={profile} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>My Profile</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center'>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={settings} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>Settings</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={termsAndConditionsPage}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={terms} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>Terms & Condition</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={privacyAndPolicyPage}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={privacy} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>Privacy Policy</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={orderPage}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={orders} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>My Orders</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={wishList}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={wishlist} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat'>Wish List</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                    <div className='w-full py-4 border-b-2 border-[#F2F2F2] flex justify-between items-center' onClick={logout}>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className='w-[39px] h-[39px] rounded-full bg-[#F7F7F8] flex justify-center items-center'>
                                <img src={signout} alt="profile" />
                            </div>
                            <span className='text-base font-[500] font-montserrat text-[#F41B1B]'>Log Out</span>
                        </div>
                        <img src={forward} alt="forward" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AccountMob