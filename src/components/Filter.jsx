import React from 'react';

function Filter({ closeFilterMob }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-red-500 flex items-center justify-center z-50'>
            <div className='text-white text-center'>
                <h1 className='text-2xl font-bold mb-4'>Filter</h1>
                <button
                    onClick={closeFilterMob}
                    className='bg-white text-red-500 px-4 py-2 rounded shadow-md'
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Filter;
