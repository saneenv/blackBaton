import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import contactimg from '../images/contactus/contactus.png';
import logo from '../images/contactus/logo.png'
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';

function Contact() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiRazorpayUrl = process.env.REACT_APP_API_RAZORPAY_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSendToWhatsApp = async () => {
        const { name, email, mobileNumber, message } = formData;

        // Validate inputs
        if (!name || !email || !mobileNumber || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Prepare data for WhatsApp API
        const to = '919207427150'; // Assuming Indian country code
        const formattedMessage = `Name: ${name}\nNumber: ${mobileNumber}\nEmail: ${email}\nMessage: ${message}`;

        try {
            const response = await fetch(`${apiRazorpayUrl}/send-whatsapp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ to, message: formattedMessage })
            });

            const data = await response.json();
            if (data.success) {
                alert('Message sent successfully to WhatsApp!');
                setFormData({
                    name: '',
                    email: '',
                    mobileNumber: '',
                    message: ''
                });
            } else {
                alert('Message sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    mobileNumber: '',
                    message: ''
                });
            }

        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
            alert('An error occurred while sending the message. Please try again.');
        }
    };

    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full flex flex-row lg:mt-[175px] md:mt-[175px] mt-[120px]'>
                <div className='w-[50%] h-full lg:flex hidden'>
                    <img src={contactimg} alt="contactimg" className='w-full h-full ' />
                </div>
                <div className='lg:w-[50%] w-full h-auto flex justify-center items-center lg:p-0 p-7'>
                    <div className='flex flex-col gap-8  text-left   '>
                        <img src={logo} alt="logo" className='w-[30%] h-[30%]' />
                        <div className='flex flex-col gap-3'>
                            <span className='lg:text-4xl text-2xl font-[700] font-montserrat'>Let’s Get In Touch</span>
                            <span className='text-base font-[400] text-[#989898] font-montserrat'>Or just reach out manually to <span className='lg:text-base text-sm font-[600] text-[black] font-montserrat'>Info.stillsclothing@gmail.com</span></span>
                        </div>
                        <div className='flex flex-col gap-5 w-full '>
                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Full Name</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' name='name' value={formData.name} onChange={handleChange} />
                                </div>

                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Email Address</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' name='email' value={formData.email} onChange={handleChange} />
                                </div>

                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Phone Number</span>
                                    <input type="text" className='rounded-[23px] w-full h-[46px] border-2 border-[#E0E0E0] p-4' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} />
                                </div>

                            </div>

                            <div className='flex flex-row justify-between gap-3'>
                                <div className='flex flex-col gap-2 text-left w-full'>
                                    <span className='text-[#888888] font-[400] font-montserrat text-sm'>Message</span>
                                    <textarea className='rounded-[23px] w-full h-[136px] border-2 border-[#E0E0E0] p-4 text-left align-top' name='message' value={formData.message} onChange={handleChange} />
                                </div>

                            </div>
                        </div>

                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full h-[46px] rounded-[23px] bg-[black] flex justify-center items-center text-[white] text-sm font-[600] font-montserrat cursor-pointer' onClick={handleSendToWhatsApp}>Submit Form</div>
                        </div>

                    </div>
                </div>

            </div>
            {isTab ? <FooterMob /> : <Footer />}
        </div>

    );
}

export default Contact;