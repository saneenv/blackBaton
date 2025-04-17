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
                <div className=' relative flex w-full h-[400px] '>
                    <img src={contactusbanner} alt="contactusbanner" className='w-[100%] h-[100%]' />
                    <div className='absolute flex w-full h-full justify-center items-center'>
                        <span className='text-white lg:text-5xl text-2xl font-[700] font-montserrat'>About Us</span>
                    </div>
                </div>
                <div className='flex flex-col lg:px-12 px-3 lg:gap-12 gap-6'>
                    <div className='flex flex-row gap-6 h-auto items-center'>
                        <div className='flex flex-col text-left lg:w-[50%] w-full lg:gap-6 gap-3'>
                            <span className='lg:text-2xl text-lg font-[600] font-montserrat'>KNOW  US BETTER</span>
                            <span className='font-[600] lg:text-4xl text-2xl font-montserrat'>We’re hyper-focused<br /> on what we do best</span>
                            <span className='lg:text-xl text-base font-[400] font-montserrat ' style={{ lineHeight: '2.8' }}>At BLACK BATON, we believe sportswear
                                should do more than just fit well—it should fuel
                                your performance and match your lifestyle. Whether
                                you're training hard, hitting the streets, or simply staying active,
                                our gear is built to move with you.Every piece is crafted with precision,
                                blending high-performance materials with modern design. At BLACK BATON,
                                we don’t just make sportswear—we create gear that empowers
                                you to push limits and stay unstoppable.</span>
                        </div>
                        <div className='lg:flex hidden w-[50%]'>
                            <img src={contactusimg} alt="contactusimg" className='w-full h-full' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:px-12 px-3 lg:gap-12 gap-6 text-left'>
                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>Who We Are</span>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>We’re a team of athletes, creators,
                            and everyday movers who saw a gap
                            in the market: high-performance activewear that’s functional
                            and stylish. So we set out to build a brand that delivers both—without compromise.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>Our Mission</span>
                        <span className='lg:text-xl text-basel font-[400] font-montserrat'>To empower movement
                            through innovative, comfortable, and sustainable sportswear
                            that supports all bodies and all levels of activity.</span>

                    </div>

                    <div className='flex flex-col lg:gap-6 gap-3'>
                        <span className='lg:text-2xl text-lg font-[600] font-montserrat'>What We Offer</span>
                        <div className='flex flex-col gap-3'></div>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>
                            <span className='font-[800]'>.</span>&nbsp;Premium performance fabrics
                        </span>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>
                            <span className='font-[800]'>.</span>&nbsp;Functional fits and thoughtful details
                        </span>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>
                            <span className='font-[800]'>.</span>&nbsp;Inclusive sizing for real bodies
                        </span>
                        <span className='lg:text-xl text-base font-[400] font-montserrat'>
                            <span className='font-[800]'>.</span>&nbsp;A commitment to sustainability and responsible production
                        </span>

                    </div>
                </div>

            </div>
            {isTab ? <FooterMob /> : <Footer />}
        </div>

    );
}

export default AboutUs;