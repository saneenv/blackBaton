import React,{useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import NavbarMob from '../components/NavbarMob';
import Navbar from '../components/Navbar';
import FooterMob from '../components/FooterMob';
import Footer from '../components/Footer';
import AddressChange from '../components/AddressChange';

function Address() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [showAddressChange, setShowAddressChange] = useState(false);

    const handleAddNewAddressClick = () => {
        setShowAddressChange(true); // Show the AddressChange component
    };

    const handleCloseAddressChange = () => {
        setShowAddressChange(false); // Hide the AddressChange component
    };

    return (
        <div className='min-h-screen flex flex-col '>
            {isMobile ? <NavbarMob /> : <Navbar />}
            <div className=' h-[56px]  bg-[black] justify-center  lg:hidden flex items-center  fixed bottom-0 left-0 w-full text-base font-[600] font-montserrat text-[white] '>

            CONTINUE
            </div>
            <div className='w-full h-auto lg:px-12 px-3 py-6 flex flex-col lg:gap-12 gap-6 lg:mt-[175px] mt-[120px] lg:pb-12 pb-6'>
                <div className='flex justify-between items-center'>
                    <span className='lg:text-2xl text-lg font-[700] font-montserrat text-left'>Select Delivery Address</span>
                    <div className='w-[150px] h-[34px] rounded-[4px] border-2 border-[black] lg:flex hidden justify-center items-center cursor-pointer text-xs font-[400] font-montserrat'>
                        Add New Address
                    </div>
                    <div></div>
                </div>
                <div className='w-full flex lg:flex-row flex-col gap-8 lg:pb-12 pb-6'>
                    <div className='lg:w-[70%] w-full  h-auto flex flex-col gap-3'>
                        {/* <div className='rounded-[5px] h-auto lg:px-5 px-1 py-5 border-2 border-[#EAEAEC] justify-between flex flex-col lg:gap-6 gap-3'>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row lg:gap-4 gap-2 items-center'>
                                    <div className='w-[20px] h-[20px] rounded-full border-4 border-[black]'>

                                    </div>
                                    <span className='text-sm font-[600] font-montserrat'>GOPU RAMESH</span>
                                    <div className='w-[57px] h-[23px] rounded-[32px] border-2 border-[black] flex justify-center items-center font-[500] text-xs font-montserrat'>
                                        Office
                                    </div>
                                </div>

                                <div className='w-[80px] h-[30px] border-2 border-[black] lg:flex hidden justify-center items-center font-[400] text-xs font-montserrat'>
                                    Change
                                </div>
                            </div>
                            <span className='text-left text-sm font-[400] font-montserrat text-[#616161] pl-7'> Shersoft Software Company, Jubilee Road Perinthalmanna, Malappuram, Kerala - 679322</span>
                            <div className='flex flex-row gap-3 pl-7'>
                                <span className='text-sm font-[400] font-montserrat text-[#616161]'>Mobile Number :</span>
                                <span className='text-sm font-[700] font-montserrat'>9874561235</span>
                            </div>
                            <span className='text-sm font-[400] font-montserrat text-[#616161] text-left pl-7'><span className='font-extrabold'>.</span> Pay on Delivery not Available</span>
                            <div className='flex flex-row gap-6 pl-7'>
                                <div className='h-[33px] p-3 flex justify-center items-center border-2 border-[black] text-sm font-[400] font-montserrat'>Remove</div>
                                <div className='h-[33px] p-3 flex justify-center items-center border-2 border-[black] text-sm font-[400] font-montserrat'>Edit</div>

                            </div>
                        </div> */}


                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] justify-between lg:flex hidden items-center lg:px-5 px-1 cursor-pointer' onClick={handleAddNewAddressClick} >
                            <span className='text-sm font-[400] font-montserrat'>+ Add New Address
                            </span>

                        </div>
                        <div className='rounded-[5px] h-[60px] border-2 border-[#EAEAEC] bg-[black] justify-center items-center lg:hidden flex text-sm font-[600] font-montserrat text-[white] lg:px-5 px-1' onClick={handleAddNewAddressClick}>
                            CHANGE OR ADD NEW ADDRESS

                        </div>
                         {/* Conditionally Render AddressChange Component */}
                         {showAddressChange && <AddressChange onClose={handleCloseAddressChange} />}
                    
                    </div>


                    <div className='lg:w-[30%] w-full h-[321px] flex flex-col rounded-[2px] border-2 border-[#EAEAEC] lg:mb-0 mb-[25%]'>
                        <div className='w-full h-[18%] border-b-2 border-[#EAEAEC] px-3 flex justify-between items-center text-base font-[600] font-montserrat'>
                            Price Details
                        </div>

                        <div className='w-full h-[82%]   flex  flex-col px-3 gap-5'>

                            <ul className='border-2 border-black mt-5 text-[#F0F0F0]' />
                            <div className='flex flex-col gap-5 w-full'>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Price (1 item)</span>
                                    <span className='text-base font-[600] font-montserrat'>₹1,999</span>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Discount</span>
                                    <span className='text-base font-[600] font-montserrat'></span>

                                </div>
                                <div className='w-full flex justify-between'>
                                    <span className='text-base font-[400] font-montserrat'>Delivery Charges</span>
                                    <span className='text-base font-[600] font-montserrat'>₹00.00</span>
                                </div>
                            </div>
                            <ul className="border-b-2 border-black border-dashed " />
                            <div className='w-full flex justify-between'>
                                <span className='text-base font-[600] font-montserrat'>Total Amount</span>
                                <span className='text-base font-[600] font-montserrat'>₹9,249</span>
                            </div>
                            <ul className="border-b-2 border-black border-dashed " />

                        </div>


                    </div>

                </div>
                
            </div>
            <div className='lg:flex hidden'>
                {isMobile ? <FooterMob /> : <Footer />}

            </div>
            
        </div>
    )
}

export default Address