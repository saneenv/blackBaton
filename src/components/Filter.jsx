import React, { useState, useEffect } from 'react';

function Filter({ closeFilterMob, onApply }) {
    const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);



    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getCategories/BLACKBATON_2526`);
                const data = await response.json();
                setCategories(data); // Set the fetched categories to state
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getSubCategories/BLACKBATON_2526`);
                const data = await response.json();
                setSubCategories(data); // Set the fetched categories to state
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchSubCategories();
    }, [apiBaseUrl]);

    useEffect(() => {
        const fetchColorSizeData = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/getAllColorSize/BLACKBATON_2526`);
                const data = await response.json();

                // Extract unique colors and sizes
                const uniqueColors = [...new Set(data.map(item => item.Color))];
                const uniqueSizes = [...new Set(data.map(item => item.Size))];

                setColors(uniqueColors);
                setSizes(uniqueSizes);
            } catch (error) {
                console.error('Error fetching color and size data:', error);
            }
        };

        fetchColorSizeData();
    }, [apiBaseUrl]);

    // Handle checkbox change for subcategories
    const handleSubCategoryChange = (subCategoryId) => {
        setSelectedSubCategories((prevSelected) =>
            prevSelected === subCategoryId ? null : subCategoryId // Toggle selection
        );
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories((prevSelected) =>
            prevSelected === categoryId ? null : categoryId // Toggle selection
        );
    };

    // Handle checkbox change for price ranges
    const handlePriceRangeChange = (priceRange) => {
        setSelectedPriceRange(priceRange); // Set the selected price range
    };

    const handleColorChange = (color) => {
        setSelectedColors((prevSelected) =>
            prevSelected.includes(color)
                ? [] // Deselect if already selected
                : [color] // Select only this color
        );
    };
    
    const handleSizeChange = (size) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(size)
                ? [] // Deselect if already selected
                : [size] // Select only this size
        );
    };

    const handleApply = () => {
        const filters = {
            subCategory: selectedSubCategories,
            priceRange: selectedPriceRange ? { 
                minPrice: selectedPriceRange.minPrice, 
                maxPrice: selectedPriceRange.maxPrice 
            } : null,
            category: selectedCategories,
            size: selectedSizes,
            color: selectedColors,
        };
        onApply(filters); // Pass filters to the parent component
        closeFilterMob(); // Close the filter modal
    };


    const contentMap = {
        Related: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                {subCategories.map((subCategory) => (
                    <div key={subCategory.Id} className='flex flex-row gap-3 items-center'>
                        <input
                            type="checkbox"
                            checked={selectedSubCategories === subCategory.Id} // Check if this subcategory is selected
                            onChange={() => handleSubCategoryChange(subCategory.Id)}
                        />
                        <span className='text-base font-[500] font-montserrat'>{subCategory.Name}</span>
                    </div>
                ))}

            </div>
        ),
        Price: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                {[
                    { label: 'Rs. 299 and Below', minPrice: 0, maxPrice: 299 },
                    { label: 'Rs. 300 - Rs. 499', minPrice: 300, maxPrice: 499 },
                    { label: 'Rs. 500 - Rs. 699', minPrice: 500, maxPrice: 699 },
                    { label: 'Rs. 700 - Rs. 999', minPrice: 700, maxPrice: 999 },
                    { label: 'Rs. 1000 - Rs. 1499', minPrice: 1000, maxPrice: 1499 },
                    { label: 'Rs. 1500 and above', minPrice: 1500, maxPrice: 5000 },
                ].map((range, index) => (
                    <div key={index} className='flex flex-row gap-3 items-center'>
                        <input
                            type="checkbox"
                            checked={selectedPriceRange?.label === range.label} // Check if this price range is selected
                            onChange={() => handlePriceRangeChange(range)}
                        />
                        <span className='text-base font-[500] font-montserrat'>{range.label}</span>
                    </div>
                ))}
            </div>
        ),
        Colors: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                {colors.map((color, index) => (
                    <div key={index} className='flex flex-row gap-3 items-center'>
                        <input
                            type="checkbox"
                            checked={selectedColors.includes(color)} // Check if color is selected
                            onChange={() => handleColorChange(color)}
                        />
                        <span className='text-base font-[500] font-montserrat'>{color}</span>
                    </div>
                ))}
            </div>
        ),
        Size: (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                {sizes.map((size, index) => (
                    <div key={index} className='flex flex-row gap-3 items-center'>
                        <input
                            type="checkbox"
                            checked={selectedSizes.includes(size)} // Check if size is selected
                            onChange={() => handleSizeChange(size)}
                        />
                        <span className='text-base font-[500] font-montserrat'>{size}</span>
                    </div>
                ))}
            </div>
        ),
        'Dress Style': (
            <div className='w-full h-full flex flex-col gap-4 justify-start items-start p-5 '>
                {categories.map((category) => (
                    <div key={category.Id} className='flex flex-row gap-3 items-center' >
                        <input type="checkbox"
                            checked={selectedCategories === category.Id} // Check if this subcategory is selected
                            onChange={() => handleCategoryChange(category.Id)}
                        />
                        <span className='text-base font-[500] font-montserrat'>{category.Name}</span>
                    </div>
                ))}



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
            <div className='w-[70%] h-full flex flex-col'>
                {/* Close Button */}
                <div className='w-full flex justify-end p-3'>
                    <div
                        className='w-[25px] h-[25px] rounded-lg flex justify-center items-center bg-[red] text-white font-[600] text-lg cursor-pointer'
                        onClick={closeFilterMob}
                    >
                        X
                    </div>
                </div>

                {/* Filter Content */}
                <div className='flex-1 overflow-y-auto'>
                    {contentMap[selectedCategory] || (
                        <div className='w-full h-full flex items-center justify-center'>
                            <span className='text-lg font-[500] font-montserrat'>Select a filter category</span>
                        </div>
                    )}
                </div>

                {/* Apply Button */}
                <div className='w-full flex justify-center py-2'>
                    <div className='w-[150px] h-[45px] bg-[gray] rounded-[12px] flex justify-center items-center text-white text-lg font-[700] font-montserrat cursor-pointer' onClick={handleApply}>
                        Apply
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
