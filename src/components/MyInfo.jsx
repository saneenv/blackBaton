import React from 'react'
import NavbarMob from './NavbarMob'
import { useNavigate } from 'react-router-dom'

function MyInfo() {
    const navigate = useNavigate()
    const homePage = () => {
        navigate('/')
    }
    const accountPage = () => {
        navigate('/accountmob')
    }
    return (
        <div className='w-full h-auto flex flex-col gap-4 text-start'>
            <div className='lg:hidden flex'>
                <NavbarMob />
            </div>
            <span className='text-3xl font-[700] font-montserrat lg:flex hidden'>My Info</span>
            <span className='text-2xl font-[600] font-montserrat text-[#3C4242] lg:flex hidden'>Contact Details</span>
            <div className='flex flex-col w-full lg:mt-0 mt-[120px] lg:px-0 px-3 '>
                <div className='flex flex-row gap-2 items-center mt-3 lg:hidden'>
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
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>Gopu Ramesh</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Email Address</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>Gopuramesh@gmail.com</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Phone Number</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>9874561237</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='lg:text-lg text-sm font-[700] font-montserrat'>Password</span>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[400] font-montserrat'>......</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 lg:gap-12 gap-6'>
                    <div className='flex justify-between items-center'>
                        <span className='lg:text-lg text-sm font-[700] font-montserrat'>Address</span>
                        <span className='lg:text-lg text-sm font-[600] font-montserrat text-[#3C4242]'>Add New</span>

                    </div>
                    <div className='flex w-full lg:flex-row flex-col items-center h-[270px] gap-4 '>
                        <div className='lg:w-1/2 w-full h-full rounded-[12px] bg-[#F6F6F6] p-6 flex flex-col gap-3'>
                            <span className='lg:text-xl text-base font-[600] font-montserrat'>Gopu Ramesh</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>9874563217</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                            <div className='flex flex-row h-[34px] gap-4'>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Home
                                </div>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Default billing address
                                </div>
                            </div>
                            <div className='lg:flex hidden'>
                            <br />

                            </div>
                            <div className='flex flex-row '>
                                <div className='h-full w-auto pr-2 flex  border-r-2 border-[#909090] text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Remove
                                </div>
                                <div className='h-full w-auto pl-2 flex  text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Edit
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full h-full rounded-[12px] bg-[#F6F6F6] p-6 flex flex-col gap-3'>
                            <span className='text-xl font-[600] font-montserrat'>Gopu Ramesh</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>9874563217</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                            <div className='flex flex-row h-[34px] gap-4'>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Home
                                </div>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Default billing address
                                </div>
                            </div>
                            <div className='lg:flex hidden'>
                            <br />

                            </div>
                            <div className='flex flex-row '>
                                <div className='h-full w-auto pr-2 flex  border-r-2 border-[#909090] text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Remove
                                </div>
                                <div className='h-full w-auto pl-2 flex  text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Edit
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyInfo