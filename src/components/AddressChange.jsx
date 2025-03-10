import React, { useState } from 'react';
import axios from 'axios';

function AddressChange({ onClose, userId }) {
    console.log(userId);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        district: '',
        addressType: 'Home',
        ledcode: userId
    });

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${apiBaseUrl}/user/addAddress`, formData);
            alert(response.data.message);
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.error('Error saving address:', error);
            alert('Failed to save address');
        }
    };


    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='lg:w-1/2  w-[full] h-auto bg-white rounded-lg p-6 relative'>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center'
                >
                    &times;
                </button>

                {/* Content */}
                <div className='flex flex-col justify-start items-start h-full gap-3'>
                    <div className='flex flex-col gap-1 w-full justify-start items-start'>
                        <span className='font-[600] text-base font-montserrat'>ADD NEW ADDRESS</span>
                        <ul className='border-2 border-[#EFEFEF] w-full'></ul>
                    </div>
                    <span className='font-[600] text-base font-montserrat'>CONTACT DETAILS</span>
                    <div className='flex flex-col gap-3 w-full justify-start items-start'>
                        <span className='font-[400] text-base font-montserrat text-[#898989]'>Name</span>
                        <input type="text"  name="name" value={formData.name} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                    </div>
                    <div className='flex flex-col gap-3 w-full justify-start items-start'>
                        <span className='font-[400] text-base font-montserrat text-[#898989]'>Mobile No</span>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                    </div>

                    <span className='font-[600] text-base font-montserrat'>ADDRESS</span>

                    <div className='flex flex-row gap-3 w-full'>
                        <div className='flex flex-col gap-3 w-1/2 justify-start items-start'>
                            <span className='font-[400] text-base font-montserrat text-[#898989]'>Pincode</span>
                            <input type="text" name='pincode' value={formData.pincode} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                        </div>
                        <div className='flex flex-col gap-3 w-1/2 justify-start items-start'>
                            <span className='font-[400] text-base font-montserrat text-[#898989]'>Locality/Town</span>
                            <input type="text" name='locality' value={formData.locality} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full justify-start items-start'>
                        <span className='font-[400] text-base font-montserrat text-[#898989]'>Address</span>
                        <input type="text" name='address' value={formData.address} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                    </div>
                    <div className='flex flex-row gap-3 w-full'>
                        <div className='flex flex-col gap-3 w-1/2 justify-start items-start'>
                            <span className='font-[400] text-base font-montserrat text-[#898989]'>City</span>
                            <input type="text" name='city' value={formData.city} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                        </div>
                        <div className='flex flex-col gap-3 w-1/2 justify-start items-start'>
                            <span className='font-[400] text-base font-montserrat text-[#898989]'>District</span>
                            <input type="text" name='district' value={formData.district} onChange={handleChange} className='w-full h-[30px] border-2 border-[#EAEAEC] rounded-[4px] px-3' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-3 w-full'>
                        <div className='flex flex-row gap-1  justify-start items-center'>
                            <input type="radio" name="addressType" value="Home" checked={formData.addressType === 'Home'} onChange={handleChange} className='w-[20px] h-[20px] rounded-full border-2 border-[#EAEAEC]' />
                            <span className='font-[400] text-[#898989] text-sm font-montserrat'>Home</span>
                        </div>
                        <div className='flex flex-row gap-1  justify-start items-center'>
                            <input type="radio" name="addressType" value="Office" checked={formData.addressType === 'Office'} onChange={handleChange} className='w-[20px] h-[20px] rounded-full border-2 border-[#EAEAEC]' />

                            <span className='font-[400] text-[#898989] text-sm font-montserrat'>Office</span>
                        </div>
                    </div>

                    <div className='flex flex-row gap-3 w-full'>

                        <div className='w-[150px] h-[43px] rounded-[4px] bg-[#000000] flex justify-center items-center text-[white] cursor-pointer' onClick={handleSubmit}>
                            Submit
                        </div>

                        <div className='w-[150px] h-[43px] rounded-[4px] border-2 border-[#898989] flex justify-center items-center cursor-pointer' onClick={onClose}>
                            Cancel
                        </div>

                        <div></div>

                    </div>



                </div>
            </div>
        </div>
    );
}

export default AddressChange;