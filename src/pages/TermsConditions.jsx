import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'

function TermsConditions() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-xl font-[600] font-montserrat'>Terms & Condition</span>
                <div className='w-full flex flex-col lg:gap-12 gap-6 text-left lg:pb-12 pb-6'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Welcome to Black Batton! These
                            Terms and Conditions outline the rules and regulations
                            for using our website and services. By accessing or using
                            our website, you agree to comply with these Terms and Conditions.
                            If you do not agree, please do not use our website.</span>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>1. Use of the Website</span>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>a. Eligibility:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You must be at
                            least 18 years old or have parental/guardian consent to use this website.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You agree to
                            provide accurate, current, and complete information when creating an account or making a purchase.</span>


                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>b. Prohibited Activities:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>You agree not to:</span>

                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Distribute malware, spam,
                            or any harmful content</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Interfere with the website’s functionality</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Attempt unauthorized access to our systems
                            or other users’ accounts</span>




                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>2. Account Responsibility</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You are responsible
                            for maintaining the confidentiality of your account credentials.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You agree to notify
                            us immediately of any unauthorized use of your account.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We are not liable
                            for any loss or damage arising from unauthorized access to your account.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>3. Product Information and Pricing</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We strive to provide
                            accurate product descriptions, images, and pricing information. However, errors may occur.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We reserve the right
                            to correct any errors, inaccuracies, or omissions and to update information at any time without prior notice.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Prices are subject
                            to change without notice.</span>

                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>

                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>4. Orders and Payment</span>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>a. Order Acceptance:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We reserve the
                            right to refuse or cancel any order for any reason, including product availability or errors in pricing.</span>

                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>b. Payment:</span>

                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; All payments
                            must be made at the time of purchase through the methods provided on the website.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Transactions
                            are secure and encrypted.</span>

                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>c. Taxes:</span>

                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Applicable taxes
                         will be added to your order total.</span>

                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>5. Shipping and Delivery</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Shipping times and costs will be displayed at checkout.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We are not responsible for delays caused by courier services or customs.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Risk of loss passes to you upon delivery of the products.</span>

                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>6. Returns and Refunds</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We accept returns or exchanges within [Insert Return Period, e.g., 30 days] of delivery, subject to our Return Policy.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Items must be unused, in their original condition, and accompanied by proof of purchase.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Refunds will be processed to the original payment method.</span>

                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>7. Intellectual Property</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; All content on this website, including text, images, logos, and graphics, is the property of [Your Sportswear Website Name] and protected by intellectual property laws.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You may not reproduce, distribute, or use our content without explicit permission.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>7. Intellectual Property</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; All content on this website, including text, images, logos, and graphics, is the property of [Your Sportswear Website Name] and protected by intellectual property laws.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You may not reproduce, distribute, or use our content without explicit permission.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>8. Limitation of Liability</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the website or purchase of products.</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Our total liability shall not exceed the amount paid for the products.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>9. Indemnification</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; You agree to indemnify and hold harmless [Your Sportswear Website Name], its affiliates, employees, and partners from any claims, damages, or liabilities arising from your use of the website or breach of these Terms and Conditions.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>10. Changes to These Terms</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We may update these Terms and Conditions at any time without prior notice. Any changes will be posted on this page with the revised effective date. Continued use of the website after changes constitutes acceptance of the updated Terms.</span>


                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>11. Contact Us</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>If you have any questions or concerns about these Terms and Conditions, please contact us:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Email :   </span>&nbsp; demo@gmail.com</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Phone :   </span>&nbsp; +91 1234567890</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Address :  </span>&nbsp; abc tower, xyz district , malappuram</span>


                    </div>


                </div>
            </div>
            {isMobile ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default TermsConditions