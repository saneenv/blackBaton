import React from 'react';
import img from '../images/Signup/img.png';
import google from '../images/Login/google.png'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate= useNavigate();
    const loginpage = () => {
        navigate('/login')
    }
    return (
        <div className="min-h-screen flex flex-row ">
            {/* Left Section */}
            <div className="w-1/2 lg:flex hidden  justify-center items-center ">
                <div className='h-[680px] w-[80%]'>
                    <img src={img} alt="img" className='w-full h-full' />
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full  flex justify-center items-center flex-col  lg:gap-8 gap-5 ">
                <div className='flex flex-col gap-2 lg:px-0 px-3'>
                    <span className='lg:text-3xl text-2xl font-[600] font-montserrat'>Create an account</span>
                </div>
                <div className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px]  border-2 border-[#EDEDED] flex flex-row gap-2 justify-center items-center'>
                    <img src={google} alt="google" />
                    <span className='text-base font-[500] font-montserrat'>Sign In with Google</span>
                </div>
                <div className='flex flex-row items-center gap-3 w-[40%]'>
                    <div className='flex-1 border-t-2 border-[#CBCAD7]'></div>
                    <span className='text-lg font-[500] text-[#686677] font-montserrat'>or</span>
                    <div className='flex-1 border-t-2 border-[#CBCAD7]'></div>
                </div>

                <div className='flex flex-col gap-6 lg:px-0 px-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Email Address</span>
                            <input type="text" className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]' placeholder='Enter your email address' />
                        </div>
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Full Name</span>
                            <input type="text" className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]' placeholder='Enter your full name' />
                        </div>
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Password</span>
                            <input type="text" className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]' placeholder='Create your password' />

                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='lg:w-[430px] w-[350px] h-[48px] rounded-[35px]  bg-[#007AFF] flex justify-center items-center font-[600] font-montserrat text-base text-[white]'>
                        Create an account
                        </div>
                        <span className='text-sm font-[600] font-montserrat text-[#49475A]'>Already have an account? <span className='text-[#6938EF] underline cursor-pointer' onClick={loginpage}>Login</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
