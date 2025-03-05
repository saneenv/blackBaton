import React from 'react';

function AddressChange({ onClose }) {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='w-1/2 h-1/2 bg-white rounded-lg p-6 relative'>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center'
                >
                    &times;
                </button>

                {/* Content */}
                <div className='flex justify-center items-center h-full'>
                    <h2 className='text-xl font-bold'>Address Change Form</h2>
                    {/* Add your form or other content here */}
                </div>
            </div>
        </div>
    );
}

export default AddressChange;