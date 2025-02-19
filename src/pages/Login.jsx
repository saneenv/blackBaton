import React, { useState } from 'react';
import img from '../images/Login/img.png';
import google from '../images/Login/google.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    // Navigate to Signup Page
    const signuppage = () => {
        navigate('/signup');
    };

    // Handle Login
    const handleLogin = async () => {
        try {
            if (!email || !password) {
                setError('Please enter both email and password');
                return;
            }

            const apiUrl = `${apiBaseUrl}/user/login/BLACKBATON_ERP24?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

            const response = await axios.get(apiUrl);

            if (response.data.length > 0) {
                // Save user info (optional) and redirect to home
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                navigate('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className="min-h-screen flex flex-row ">
            {/* Left Section */}
            <div className="w-1/2 lg:flex hidden justify-center items-center">
                <div className='h-[680px] w-[80%]'>
                    <img src={img} alt="img" className='w-full h-full' />
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full flex justify-center items-center flex-col lg:gap-8 gap-5">
                <div className='flex flex-col gap-2 lg:px-0 px-3'>
                    <span className='lg:text-5xl text-3xl font-[500] font-notoSerif'>Welcome Back</span>
                    <span className='lg:text-base text-sm font-[400] font-montserrat text-[#3D3D3D]'>
                        Enter your email and password to access your<br /> account
                    </span>
                </div>

                <div className='flex flex-col gap-6 lg:px-0 px-3'>
                    <div className='flex flex-col gap-4'>
                        {/* Email Input */}
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Email</span>
                            <input
                                type="text"
                                className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-3 bg-[#EDEDED]'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Input */}
                        <div className='flex flex-col gap-2 text-left'>
                            <span className='text-base font-[500] font-montserrat'>Password</span>
                            <input
                                type="password"
                                className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-3 bg-[#EDEDED]'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row gap-1 items-center'>
                                    <input type="checkbox" />
                                    <span className='font-[500] font-montserrat text-sm'>Remember me</span>
                                </div>
                                <span className='font-[400] text-sm font-montserrat cursor-pointer'>Forgot Password?</span>
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <div className="text-red-500">{error}</div>}

                    {/* Buttons */}
                    <div className='flex flex-col gap-2'>
                        {/* Sign In Button */}
                        <button
                            className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] bg-black flex justify-center items-center font-[600] font-montserrat text-base text-white'
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>

                        {/* Sign In with Google */}
                        <div className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] border-2 border-[#EDEDED] flex flex-row gap-2 justify-center items-center'>
                            <img src={google} alt="google" />
                            <span className='text-base font-[500] font-montserrat'>Sign In with Google</span>
                        </div>

                        {/* Sign Up Link */}
                        <br />
                        <span className='text-sm font-[600] font-montserrat text-[#49475A]'>
                            Not a Member?{' '}
                            <span className='text-[#6938EF] underline cursor-pointer' onClick={signuppage}>
                                Register Here
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
