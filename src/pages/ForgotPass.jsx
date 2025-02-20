import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function ForgotPass() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [step, setStep] = useState(1);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const togglePasswordVisibility = (field) => {
        if (field === 'password') setShowPassword(!showPassword);
        if (field === 'confirmPassword') setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSendOTP = async () => {
        try {
            const response = await axios.post(`${apiBaseUrl}/user/sendOTP/BLACKBATON_ERP24`, { email });
            alert(response.data.message);
            setStep(2);
        } catch (error) {
            alert(error.response?.data?.error || 'Error sending OTP');
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
        <div className="min-h-screen flex justify-center items-center flex-col gap-8">
            <h1 className="text-4xl font-semibold">Forgot Password</h1>

            <div className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 border rounded-md"
                    disabled={step === 2}
                />

                {step === 1 && (
                    <button
                        onClick={handleSendOTP}
                        className="p-3 bg-black text-white rounded-md"
                    >
                        Send OTP
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
    );
}

export default ForgotPass;
