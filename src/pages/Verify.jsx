import React, { useState, useEffect } from 'react';
import img from '../images/Signup/verify.png';
// import google from '../images/Login/google.png';

import { useLocation, useNavigate } from 'react-router-dom';


function Verify() {
    const [code, setCode] = useState(new Array(6).fill(''));
    const [countdown, setCountdown] = useState(60); // Initialize countdown to 60 seconds
    const location = useLocation();
    const navigate = useNavigate();
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const { id } = location.state || {}; // Ensure location.state is defined
    console.log("id:", id);

    useEffect(() => {
        // Prevent returning to this page
        if (!id) {
            navigate('/login', { replace: true }); // Redirect if no employeeId in state
            return;
        }

        window.scrollTo(0, 0);

        // Start the countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/signup'); // Navigate if countdown reaches 0
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup timer on unmount
        return () => clearInterval(timer);
    }, [id, navigate]);




    const handleChange = (element, index) => {
        const value = element.value.replace(/\D/, ''); // Only allow numeric input
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to next input
        if (value && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (element, index) => {
        if (element.key === 'Backspace' && !element.target.value && element.target.previousSibling) {
            element.target.previousSibling.focus();
        }
    };


    const handleSubmit = async () => {
        const otp = code.join(''); // Combine the 6 inputs into a single string
        try {
            console.log("Verifying OTP for employeeId:", id, "with OTP:", otp);

            const response = await fetch(`${apiBaseUrl}/user/Verify/BLACKBATON_ERP24`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, otp })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to verify OTP');
            }

            const data = await response.json();

            if (data.success) {
                alert('OTP Verified Successfully!');
                setCode(new Array(6).fill('')); // Clear the input fields
                navigate('/login'); // Navigate to the login page
            } else {
                alert('Invalid OTP. Please check the code and try again.');
            }
        } catch (err) {
            console.error('Error verifying OTP:', err);
            alert(`OTP verification failed`);
        }
    };

    const signuppage = () => {
        navigate('/signup')
    }


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
                <div className='flex flex-col gap-4 lg:px-0 px-3'>
                    <span className='lg:text-5xl text-3xl font-[500] font-notoSerif'>Verify with OTP</span>
                    <span className='lg:text-base text-sm font-[400] font-montserrat text-[#3D3D3D]'>
                        To ensure your security, please enter the One-Time  Password(OTP) <br /> send  to your <span className='font-[700]'>email</span>
                    </span>
                </div>

                <div className='flex flex-col gap-6 lg:px-0 px-3'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='flex flex-row lg:gap-5 gap-1'>
                            {code.map((otp, index) => (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength='1'
                                    value={otp}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className='w-12 h-11 border-2 border-[#D7D7D7] rounded-[5px] text-center text-xl'
                                />
                            ))}
                        </div>
                    </div>


                    {/* Buttons */}
                    <div className='flex flex-col gap-2'>
                        {/* Sign In Button */}
                        <button
                            className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] bg-black flex justify-center items-center font-[600] font-montserrat text-base text-white'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

                        {/* Sign In with Google */}
                        <div className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] border-2 border-[#EDEDED] flex flex-row gap-2 justify-center items-center cursor-pointer' onClick={signuppage}>
                            Cancel
                        </div>
                        <span className='text-base font-[400] font-display text-[#8B8B8B]'>
                            {`Time remaining: ${countdown} sec`}
                        </span>

                        <br />
                        <span className='text-sm font-[400] font-montserrat text-[#49475A]'>
                            Having difficulties with OTP ? &nbsp;
                            <span className='font-[800] cursor-pointer'>
                                Get help
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verify;
