import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob'
import Navbar from '../components/Navbar'
import FooterMob from '../components/FooterMob'
import Footer from '../components/Footer'

function PrivacyPolicy() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
        const isTab = useMediaQuery({query:  '(max-width: 1024px)' });
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] md:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <span className='lg:text-2xl text-xl font-[600] font-montserrat'>Privacy Policy</span>
                <div className='w-full flex flex-col lg:gap-12 gap-6 text-left lg:pb-12 pb-6'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>Privacy Policy for Blackbaton</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>At Black Baton, your privacy is a top priority.
                            This Privacy Policy outlines how we collect, use,
                            and protect your personal information when you
                            interact with our website [Insert Website URL].
                            By using our website, you agree to the practices
                            described in this Privacy Policy.</span>
                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>1. Information We Collect</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We may collect the following types of information:</span>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>a. Personal Information:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Name</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Email address</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Phone number</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Shipping and billing addresses</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Payment information</span>


                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>b. Non-Personal Information:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; IP address</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Browser type and version</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Device information</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; Website usage data</span>


                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>c. Cookies and Tracking Technologies:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; We use cookies,
                            web beacons, and similar
                            technologies to enhance your browsing experience and collect usage data.</span>



                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>2. How We Use Your Information</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We use the information we collect for the following purposes:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; To process and fulfill your orders</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; To personalize your shopping experience</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; To improve our website, products, and services</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp;  To send order confirmations and updates</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp; To communicate promotional offers, news, and updates (with your consent)</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='lg:font-extrabold font-semibold text-2xl'>.</span>&nbsp;  To prevent fraudulent transactions and ensure website security</span>


                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>3. How We Protect Your Information</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We implement robust security measures to safeguard your personal information, including:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Service Providers: </span>&nbsp; To process payments, manage shipping, or provide customer support</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Legal Obligations: </span>&nbsp; To comply with applicable laws, regulations, or legal proceedings</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Business Transfers: </span>&nbsp; In the event of a merger, acquisition, or sale of assets</span>


                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>4. Your Rights</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>You have the following rights regarding your personal information:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Access and Update:  </span>&nbsp; Review or update your personal data</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Opt-Out:  </span>&nbsp; Unsubscribe from promotional communications</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Delete:  </span>&nbsp; Request deletion of your personal data, subject to legal requirements</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>5. Third-Party Links</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>Our website may contain links
                            to third-party websites. We are not responsible for the privacy practices or content
                            of these external sites. Please review their privacy policies before providing
                            any personal information.</span>


                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>6. Changes to This Privacy Policy</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>We may update this Privacy Policy from
                            time to time. Any changes will be posted on this page with the revised effective date.
                            We encourage you to review this page periodically.</span>


                    </div>


                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-xl text-lg font-[600] font-montserrat'>7. Contact Us</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'>If you have any questions or concerns about this Privacy Policy, please contact us:</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Email :   </span>&nbsp; Info.stillsclothing@gmail.com</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Phone :   </span>&nbsp; +91 9995028039</span>
                        <span className='lg:text-lg text-base font-[400] font-montserrat'><span className='font-[500] lg:text-lg text-base font-montserrat'>Address :  </span>&nbsp; STILLS CLOTHING LINK, STILLS TOWER, TOWN HALL ROAD, GANDHI NAGAR, KAKKOOTH, PERINTHALMANNA P.O, PIN: 679322</span>


                    </div>


                </div>
            </div>
            {isTab ? <FooterMob /> : <Footer />}

        </div>
    )
}

export default PrivacyPolicy