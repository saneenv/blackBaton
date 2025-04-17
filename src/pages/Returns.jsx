import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'

function Returns() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
        const isTab = useMediaQuery({query:  '(max-width: 1024px)' });
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-xl font-[600] font-montserrat'>Returns and Refunds Policy</span>
                <div className='w-full flex flex-col lg:gap-12 gap-6 text-left lg:pb-12 pb-6'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Thank you for shopping with BLACK BATON.
                             We want you to be completely satisfied with your purchase. 
                             If you're not happy with your order for any reason, we're here to help!</span>
                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Returns</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>You have 30 days from the date of delivery to return items for a refund or exchange.
                        To be eligible for a return:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Items must be unused, unworn, and in their original packaging with all tags attached.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Proof of purchase (order confirmation or receipt) is required.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Certain items such as socks, undergarments, or customized gear may not be eligible for return due to hygiene reasons.</span>


                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>How to Return</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Email us at Info.stillsclothing@gmail.com with your order number and the reason for return.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We'll provide a return shipping label and instructions.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Pack your item securely and drop it off at your nearest shipping location.</span>
                        <span className='lg:text-lg text-base font-[600] font-montserrat'> Please note: Return shipping costs may be deducted from your refund unless the item is defective or incorrect.</span>


                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Refunds</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Once your return is received and inspected:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We'll notify you via email regarding the status of your refund.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Approved returns will be refunded to your original payment method within 5-7 business days.</span>



                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Exchanges</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Need a different size or color? We offer free exchanges for the same item if stock is available. Contact us at support Info.stillsclothing@gmail.com and we’ll help you with the process.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Damaged or Incorrect Items</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>If you receive a damaged or incorrect item, please contact us within 7 days of receiving your order. We'll make it right at no extra cost to you.</span>


                    </div>



                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Final Sale Items</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Please note that final sale or clearance items are not eligible for returns or refunds unless defective.</span>


                    </div>


                  


                 


                </div>
            </div>
            {isTab ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default Returns