import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from '../images/Login/img.png';

function ForgotPass() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const togglePasswordVisibility = (field) => {
        if (field === 'password') setShowPassword(!showPassword);
        if (field === 'confirmPassword') setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSendOTP = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${apiBaseUrl}/user/sendOTP/BLACKBATON_ERP24`, { email });
            alert(response.data.message);
            setStep(2);
        } catch (error) {
            alert(error.response?.data?.error || 'Error sending OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdatePassword = async () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post(`${apiBaseUrl}/user/updatePassword/BLACKBATON_ERP24`, {
                email,
                otp,
                newPassword,
            });
            alert(response.data.message);
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.error || 'Error updating password');
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
                    <span className='lg:text-5xl text-3xl font-[500] font-montserrat'>Forgot Password</span>
                    <span className='lg:text-base text-sm font-[400] font-montserrat text-[#3D3D3D]'>
                        Change your password by verifying Email
                    </span>
                </div>

                <div className='flex flex-col gap-6 lg:px-0 px-3'>

                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 border rounded-md w-[340px]"
                            disabled={step === 2}
                        />

                        {step === 1 && (
                            <button
                                onClick={handleSendOTP}
                                className="p-3 bg-black text-white rounded-md flex justify-center items-center"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send OTP'}   
                            </button>
                        )}

                        {step === 2 && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="p-3 border rounded-md"
                                />

                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="p-3 border rounded-md w-full"
                                    />
                                    <span
                                        className="absolute right-3 top-4 cursor-pointer"
                                        onClick={() => togglePasswordVisibility('password')}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="p-3 border rounded-md w-full"
                                    />
                                    <span
                                        className="absolute right-3 top-4 cursor-pointer"
                                        onClick={() => togglePasswordVisibility('confirmPassword')}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <button
                                    onClick={handleUpdatePassword}
                                    className="p-3 bg-black text-white rounded-md"
                                >
                                    Change Password
                                </button>
                            </>
                        )}
                    </div>

                    <p>
                        Back to{' '}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;
