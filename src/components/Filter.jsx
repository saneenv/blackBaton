import React, { useState } from 'react';

function Filter({ closeFilterMob }) {
    const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category

    const contentMap = {
        Related: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Tops</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Printed T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Plain T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Kurti</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Boxers</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Full sleeve T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Joggers</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Payjamas</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Jeans</span>
                </div>
            </div>
        ),
        Price: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 299 and Below</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 300 - Rs. 499</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 500 - Rs. 699</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 700 - Rs. 999</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 1000 - Rs. 1499</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Rs. 1500 and above</span>
                </div>

            </div>
        ),
        Colors: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Purple</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Black</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Red</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Orange</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Navy</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>White</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Broom</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Green</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Yellow</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Gray</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Pink</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Blue</span>
                </div>
            </div>
        ),
        Size: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>XXS</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>XL</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>XS</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>S</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>M</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>L</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>XXL</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>3XL</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>4XL</span>
                </div>
            </div>
        ),
        'Dress Style': (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>

                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Pants</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Shorts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Bermuda Shorts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Gym Wear</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Full Sleeve T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Jackets</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Sleeveless</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Swimming Suits</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Boxers</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Sliders</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Water Bottle and Shaker</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Cut T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Polo T-shirts</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Hoodies</span>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <input type="checkbox" />
                    <span className='text-base font-[500] font-montserrat'>Socks</span>
                </div>
            </div>
        ),
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-[white] flex flex-row z-50'>
            <div className='w-[30%] h-full bg-[#bababa] flex flex-col gap-6'>
                <div className='p-3 flex items-center justify-start'>
                    <span className='text-lg font-[600] font-montserrat'>Filters</span>
                </div>
                {Object.keys(contentMap).map((category) => (
                    <div
                        key={category}
                        className={`p-3 flex items-center justify-start ${selectedCategory === category ? 'bg-[white]' : ''
                            } cursor-pointer`}
                        onClick={() => setSelectedCategory(category)} // Update selected category
                    >
                        <span className='text-base font-[500] font-montserrat'>{category}</span>
                    </div>
                ))}
            </div>
            <div className='w-[70%] h-full relative'>
                {contentMap[selectedCategory] || (
                    <div className='w-full h-full flex items-center justify-center'>
                        <span className='text-lg font-[500] font-montserrat'>Select a filter category</span>
                    </div>
                )}
                <div className='absolute top-0 left-0 flex w-full h-full flex-col '>
                    <div className='w-full h-1/2  flex justify-end items-start p-3'>
                       <div className='w-[25px] h-[25px] rounded-lg flex justify-center items-center bg-[red] text-white font-[600] text-lg' onClick={closeFilterMob}>
                       X
                       </div>
                    </div>
                    <div className='w-full h-1/2  flex items-end justify-center py-2'>
                       <div className='w-[150px] h-[45px] bg-[gray] rounded-[12px] flex justify-center items-center text-white text-lg font-[700] font-montserrat'>
                          Apply
                       </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Filter;
