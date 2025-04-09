import React, { useState } from 'react'
import arrow from '../images/Footer/arrow.png'
import fb from '../images/Footer/fb.png'
import insta from '../images/Footer/insta.png'
import twitter from '../images/Footer/twitter.png'
import { useNavigate } from 'react-router-dom'
import linkedin from '../images/Footer/in.png'
import playstore from '../images/Footer/playstore.png'
import appstore from '../images/Footer/appstore.png'



function FooterMob() {
    const [isNeedHelpExpanded, setIsNeedHelpExpanded] = useState(false);
    const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);
    const [isMoreInfoExpanded, setIsMoreInfoExpanded] = useState(false);
    const [isLocationExpanded, setIsLocationExpanded] = useState(false);
    const navigate = useNavigate();


    // Toggle function for 'Need Help'
    const toggleNeedHelp = () => {
        setIsNeedHelpExpanded(!isNeedHelpExpanded);
    };

    const toggleCompany = () => {
        setIsCompanyExpanded(!isCompanyExpanded);
    };

    const toggleMoreInfo = () => {
        setIsMoreInfoExpanded(!isMoreInfoExpanded);
    };

    const toggleLocation = () => {
        setIsLocationExpanded(!isLocationExpanded);
    };

    const contactPage = () => {
        navigate('/contact')
    }

    const privacyAndPolicyPage = () => {
        navigate('/privacypolicy')
    }

    const termsAndConditionsPage = () => {
        navigate('/termsconditions')
    }

    return (
        <div className='w-full h-auto flex flex-col bg-[black] p-4 gap-6'>
            <div className='flex flex-col'>
                <div className=' border-b-2  border-[#BEBCBD] flex justify-between items-center py-5' onClick={toggleNeedHelp}>
                    <span className='text-base font-[600] font-montserrat text-[#F6F6F6]'>Need Help</span>
                    <img
                        src={arrow}
                        alt="arrow"
                        className={`transform transition-transform duration-300 ${isNeedHelpExpanded ? 'rotate-180' : ''
                            }`}
                    />
                </div>
                {/* Expandable Options */}
                {isNeedHelpExpanded && (
                    <div className='flex flex-col gap-4 mt-4'>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left' onClick={contactPage}>Contact Us</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Track Order</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Returns & Refunds</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>FAQ's</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Career</span>
                    </div>
                )}
                <div className=' border-b-2  border-[#BEBCBD] flex justify-between items-center py-5' onClick={toggleCompany}>
                    <span className='text-base font-[600] font-montserrat text-[#F6F6F6]'>Company</span>
                    <img src={arrow}
                        alt="arrow"
                        className={`transform transition-transform duration-300 ${isCompanyExpanded ? 'rotate-180' : ''
                            }`}
                    />
                </div>
                {/* Expandable Options */}
                {isCompanyExpanded && (
                    <div className='flex flex-col gap-4 mt-4'>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>About Us</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Black Baton Blog</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Black Baton</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Collaboration</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Media</span>
                    </div>
                )}
                <div className=' border-b-2  border-[#BEBCBD] flex justify-between items-center py-5' onClick={toggleMoreInfo}>
                    <span className='text-base font-[600] font-montserrat text-[#F6F6F6]'>More Info</span>
                    <img src={arrow}
                        alt="arrow"
                        className={`transform transition-transform duration-300 ${isMoreInfoExpanded ? 'rotate-180' : ''
                            }`}
                    />
                </div>
                {/* Expandable Options */}
                {isMoreInfoExpanded && (
                    <div className='flex flex-col gap-4 mt-4'>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left' onClick={termsAndConditionsPage}>Terms & Conditions</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left' onClick={privacyAndPolicyPage}>Privacy Policy</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Shipping Policy</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>Sitemap</span>
                    </div>
                )}
                <div className=' border-b-2  border-[#BEBCBD] flex justify-between items-center py-5' onClick={toggleLocation}>
                    <span className='text-base font-[600] font-montserrat text-[#F6F6F6]'>Location</span>
                    <img src={arrow}
                        alt="arrow"
                        className={`transform transition-transform duration-300 ${isLocationExpanded ? 'rotate-180' : ''
                            }`}
                    />
                </div>
                {/* Expandable Options */}
                {isLocationExpanded && (
                    <div className='flex flex-col gap-4 mt-4'>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>STILLS CLOTHING LINK</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'>STILLS TOWER, TOWN HALL ROAD, GANDHI NAGAR, KAKKOOTH,</span>
                        <span className='text-base font-[400] font-montserrat text-[#F6F6F6] text-left'> PERINTHALMANNA P.O, PIN: 679322</span>
                    </div>
                )}
            </div>


            <div className='flex flex-row gap-2'>
                <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                    <img src={fb} alt="fb" />
                </div>
                <a
                    href="https://www.instagram.com/black_baton?igsh=MXE0MG43cDV5ZHdrOQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                        <img src={insta} alt="insta" />
                    </div>
                </a>
                <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                    <img src={twitter} alt="twitter" />
                </div>
                {/* <div className='w-[37px] h-[37px] rounded-[10px] bg-[#F6F6F6] flex justify-center items-center'>
                    <img src={linkedin} alt="in" />
                </div> */}
            </div>

            {/* <div className='flex flex-col gap-5'>
                <span className='text-xl font-[600] font-montserrat text-[#F6F6F6] text-left'>Download The App</span>
                <div className='flex flex-row gap-3'>
                    <div className='w-[50%] p-2 h-[55px] flex flex-row gap-2 bg-[#404040] rounded-[8px] justify-center items-center'>
                        <img src={playstore} alt="playstore" />
                        <div className='flex flex-col '>
                            <span className='text-xs font-[400] font-montserrat text-[white]'>android app on</span>
                            <span className='text-base font-[400] font-montserrat text-[white]'>Google Play</span>
                        </div>
                    </div>
                    <div className='w-[50%] p-2 h-[55px] flex flex-row gap-2 bg-[#404040] rounded-[8px] justify-center items-center'>
                        <img src={appstore} alt="appstore" />
                        <div className='flex flex-col '>
                            <span className='text-xs font-[400] font-montserrat text-[white]'>Available on the</span>
                            <span className='text-base font-[400] font-montserrat text-[white]'>App Store</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <span className='flex justify-center items-center text-[#F6F6F6] font-[400] text-sm font-montserrat'>Copyright © 2025 Shersoft Software Company. All rights reserved.</span>

        </div>
    )
}

export default FooterMob
