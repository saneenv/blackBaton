import React, { useState, useRef } from 'react';
import img from '../images/Signup/img.png';
// import google from '../images/Login/google.png'
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function Signup() {
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();
    const loginpage = () => {
        navigate('/login')
    }

    const emailRef = useRef(null);
    const fullNameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async () => {

        // Validation checks
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check for empty fields
        if (!email || !full_name || !password) {
            alert('Please fill in all fields.');
            return; // Stop the function if any field is empty
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop the function if validation fails
        }



        const formData = {

            email,
            full_name,
            password,

        };

        console.log(formData);

        setLoading(true); // Start loading
        try {
            const response = await fetch(`${apiBaseUrl}/user/SignUp/BLACKBATON_ERP24`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration Successful');
                navigate('/verify', { state: { id: data.id } });
                // Clear all input fields
                setEmail('');
                setFullName('');
                setPassword('');

            } else {
                console.log('Response error:', data);
                alert('Already Registered');
            }
        } catch (err) {
            console.error('Request error:', err);
            alert('Error connecting to server');
        }
        finally {
            setLoading(false);
        }
    };

    // Handle Google Signup
    const handleGoogleSignup = async (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const { email, name } = decoded; // Google ID = sub

            const response = await fetch(`${apiBaseUrl}/user/googleSignUp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, full_name: name })
            });

            const data = await response.json();
            if (data.success) {
                alert('Google Sign-Up Successful!');
                navigate('/login');
            } else {
                alert(data.error || 'Failed to register via Google');
            }
        } catch (err) {
            console.error('Google Signup Error:', err);
            alert('Google Sign-Up Failed');
        }
    };

    // Function to handle "Enter" key press and move to the next field
    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            }
        }
    };


    return (
        <GoogleOAuthProvider clientId="308398331997-f9boa84j0a0o0cpsb7odpupeqq6lck6p.apps.googleusercontent.com">

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
                    <div className='lg:w-[430px] w-[350px] h-[48px]  flex flex-row gap-2 justify-center items-center'>
                        {/* <img src={google} alt="google" />
                        <span className='text-base font-[500] font-montserrat'>Sign In with Google</span> */}
                        <div className='w-full h-full'>
                            <GoogleLogin
                                onSuccess={handleGoogleSignup}
                                onError={() => alert('Google Sign-In Failed')}
                            />
                        </div>

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
                                <input
                                    ref={emailRef}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, fullNameRef)}
                                    type="text"
                                    className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]'
                                    placeholder='Enter your email address'
                                />
                            </div>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='text-base font-[500] font-montserrat'>Full Name</span>
                                <input
                                    ref={fullNameRef}
                                    value={full_name}
                                    onChange={(e) => setFullName(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                                    type="text"
                                    className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]'
                                    placeholder='Enter your full name'
                                />
                            </div>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='text-base font-[500] font-montserrat'>Password</span>
                                <input
                                    ref={passwordRef}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="text"
                                    className='lg:w-[430px] w-[350px] h-[48px] rounded-[12px] px-5 bg-[#EDEDED]'
                                    placeholder='Create your password'
                                />

                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>

                            <div
                                className='lg:w-[430px] w-[350px] h-[48px] rounded-[35px] bg-[#007AFF] flex justify-center items-center font-[600] font-montserrat text-base text-[white] cursor-pointer'
                                onClick={!loading ? handleSubmit : null}
                                style={{ opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}
                            >
                                {loading ? <span className="animate-spin">🔄</span> : "Create an account"}
                            </div>

                            <span className='text-sm font-[600] font-montserrat text-[#49475A]'>Already have an account? <span className='text-[#6938EF] underline cursor-pointer' onClick={loginpage}>Login</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>

    );
}

export default Signup;
