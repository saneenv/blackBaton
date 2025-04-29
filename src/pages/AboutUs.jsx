import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';
import contactusbanner from '../images/contactus/contactbanner.png'
import contactusimg from '../images/contactus/contactimg.png'


function AboutUs() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1024px)' });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen flex flex-col'>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className='w-full flex flex-col lg:gap-12 gap-6 lg:py-12 py-6 lg:mt-[175px] md:mt-[175px] mt-[120px]'>
                <div className=' relative flex w-full h-[300px] '>
                    <img src={contactusbanner} alt="contactusbanner" className='w-[100%] h-[100%]' />
                    <div className='absolute flex w-full h-full justify-center items-center'>
                        <span className='text-white lg:text-5xl text-2xl font-[700] font-montserrat'>About Us</span>
                    </div>
                </div>
                <div className='flex flex-col lg:px-12 px-3 lg:gap-12 gap-6'>
                    <div className='flex flex-row gap-6 h-auto items-center'>
                        <div className='flex flex-col text-left lg:w-[50%] w-full lg:gap-6 gap-3'>
                            <span className='lg:text-2xl text-lg font-[600] font-montserrat'>GENESIS AND ESTABLISHMENT</span>
                            <span className='font-[600] lg:text-4xl text-2xl font-montserrat'>We’re hyper-focused<br /> on what we do best</span>
                            <span className='lg:text-xl text-base font-[400] font-montserrat ' style={{ lineHeight: '2.5' }}>Black Baton Sportswear began its journey in Tirupur in 2016, inclined by the founder's experience in the textile industry for about 26 years, which has gained by manufacturing and selling their products in STILLS CLOTHING LINK. Some brands other than Black Baton are manufacturing under STILLS CLOTHING LINK. This experience aided them in fabricating unique products using various materials that are beneficial for manufacturing sportswear products and acknowledging the significance of product sizing comfortable for people. Black baton was created for conceding the need of customers based on unique styling and measurement.</span>
                        </div>
                        <div className='lg:flex hidden w-[50%]'>
                            <img src={contactusimg} alt="contactusimg" className='w-full h-full' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:px-12 px-3 lg:gap-12 gap-6 text-left'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>INSTALLATION AND EXTENSION</span>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>In 2017, Black Baton was officially started and attained rapid recognition as an honored sportswear brand. Implementation of recently trending products and attentiveness to the needs of customers leaded to the growth of the brand. Lately, Black Baton has come up with a wide range of over 500 products across 30 categories, including sportswear, activewear, accessories, and the latest trending editions. The brand has quickly gained the attention of consumers, enabling Black Baton to institute a great market value in a short period. Black baton became a competitive player in the sportswear industry, due to its brand recognition among people and latest fashion items.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>DIVERSIFICATION AND ADMINISTRATION</span>
                        <span className='lg:text-xl text-basel font-[400] font-montserrat'>Black Baton's value has grown because of its extensive administration and network, which covers India and GCC countries. Over the past 7 years, the brand has gained remarkable success because of its distinguishing quality and economically friendly products, reasonable price, and extensive customer demand. Black Baton is endlessly taking a look at opportunities to diversify the market by making its availability in various e-commerce platforms and other countries.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>MODERNIZATION AND FUTURE ANTICIPATION</span>
                        <span className='lg:text-xl text-basel font-[400] font-montserrat'>Black Baton has brought forth a wide range of products and exhibited its position in the sportswear market with its product quality and reasonable price. The brand has been trying to provide new innovations as well as trying to make it an international brand. Black Baton focuses on its growth and its availability all over the world with affordable prices and recent trending items.</span>


                    </div>
                </div>

            </div>
            {isTab ? <FooterMob /> : <Footer />}
        </div>

    );
}

export default AboutUs;