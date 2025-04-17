import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'

function ShippingPolicy() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-xl font-[600] font-montserrat'>Shipping Policy</span>
                <div className='w-full flex flex-col lg:gap-12 gap-6 text-left lg:pb-12 pb-6'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>At BLACK BATON,
                            we aim to deliver your order as quickly and efficiently as possible.
                            Below you’ll find all the details about our shipping process.</span>
                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Processing Time</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>All orders are processed within 1–2 business days
                            (excluding weekends and holidays). Once your order is shipped,
                            you’ll receive a confirmation email with tracking information.</span>


                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Shipping Rates & Delivery Estimates</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We offer both standard
                            and express shipping options at checkout</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Note: Delivery times may
                            vary depending on your location and external factors (e.g., weather, courier delays).</span>




                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>International Shipping</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We currently ship to select international
                            countries. International shipping rates and delivery
                            times are calculated at checkout based on your location.</span>

                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Customs & Import Duties:
                            Please note that international customers are responsible for
                            any customs duties or taxes charged upon delivery.</span>



                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Tracking Your Order</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Once your order ships,
                            you’ll receive a tracking link via email. You can use this
                            link to monitor the status of your delivery in real time.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Delays & Exceptions</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>While we strive to meet all
                            estimated delivery times, delays can occasionally occur.
                            If your order is delayed or missing, contact us
                            at Info.stillsclothing@gmail.com, and we’ll work with the courier to resolve the issue.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Questions?</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>If you have any
                            questions about shipping or need help with your order,
                            don’t hesitate to contact our support team at Info.stillsclothing@gmail.com</span>


                    </div>


                  

                </div>
            </div>
            {isTab ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default ShippingPolicy