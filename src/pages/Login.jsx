import React from 'react';
import img from '../images/Login/img.png';
import google from '../images/Login/google.png'

function Login() {
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-1/2 flex  justify-center items-center">
                 <div className='h-[680px] w-[80%]'>
                    <img src={img} alt="img" className='w-full h-full' />
                 </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2  flex justify-center items-center flex-col gap-8">
                <div className='flex flex-col gap-2'>
                    <span className='text-5xl font-[500] font-notoSerif'>Welcome Back</span>
                    <span className='text-base font-[400] font-montserrat text-[#3D3D3D]'>Enter your email and password to access your<br /> account</span>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Email</span>
                            <input type="text" className='w-[430px] h-[48px] rounded-[12px] px-3 bg-[#EDEDED]' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Password</span>
                            <input type="text" className='w-[430px] h-[48px] rounded-[12px] px-3 bg-[#EDEDED]' placeholder='Enter your password' />
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row gap-1 items-center'>
                                    <input type="checkbox" />
                                    <span className='font-[500] font-montserrat text-sm'>Remember me</span>
                                </div>
                                <span className='font-[400] text-sm font-montserrat'>Forgot Password?</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[430px] h-[48px] rounded-[12px]  bg-[black] flex justify-center items-center font-[600] font-montserrat text-base text-[white]'>
                        Sign In
                        </div>
                        <div className='w-[430px] h-[48px] rounded-[12px]  border-2 border-[#EDEDED] flex flex-row gap-2 justify-center items-center'>
                           <img src={google} alt="google" />
                           <span className='text-base font-[500] font-montserrat'>Sign In with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
