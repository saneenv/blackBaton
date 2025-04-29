import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function SubCategoryAdd() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedItemObj, setSelectedItemObj] = useState(null);
    const [offerPrice, setOfferPrice] = useState('');

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


    useEffect(() => {
        fetch(`${apiBaseUrl}/getCategories/BLACKBATON_2526`)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [apiBaseUrl]);

    useEffect(() => {
        if (selectedCategory) {
            fetch(`${apiBaseUrl}/getProductByCategory/BLACKBATON_2526?Id=${selectedCategory}`)
                .then(response => response.json())
                .then(data => setItems(data.map(item => ({
                    Id: item.ID,
                    ItemName: item.ItemName,
                    MRP: item.MRP,
                }))));
        }
    }, [selectedCategory, apiBaseUrl]);

    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory ? selectedCategory.value : '');
        setSelectedItem('');
        setSelectedImage(null);
    };


    const handleItemChange = (selectedOption) => {
        const itemId = selectedOption ? selectedOption.value : '';
        setSelectedItem(itemId);
        const itemObj = items.find(item => item.Id === itemId);
        setSelectedItemObj(itemObj || null);
        setSelectedImage(null);
    };

    const handleSubmit = async () => {
        if (!selectedItemObj || !offerPrice) {
            alert('Please select an item and enter an offer price.');
            return;
        }
    
        const payload = {
            categoryName: categories.find(cat => cat.Id === selectedCategory)?.Name || '',
            itemId: selectedItemObj.Id,
            itemName: selectedItemObj.ItemName,
            mrp: selectedItemObj.MRP,
            offerPrice: offerPrice
        };
    
        try {
            const response = await fetch(`${apiBaseUrl}/addOffer`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert('Offer added successfully!');
                setSelectedCategory('');
                setSelectedItem('');
                setSelectedItemObj(null);
                setOfferPrice('');
            } else {
                alert(data.error || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error submitting offer:', error);
            alert('Server error.');
        }
    };
    




    return (
        <div className="max-w-2xl mx-auto p-6 bg-[#dcdcdc] shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add to SubCategories</h1>

            <div className="mb-4">
                <label className="block text-gray-600 font-semibold mb-2">Select Category:</label>
                <Select
                    onChange={handleCategoryChange}
                    options={categories.map(category => ({ value: category.Id, label: category.Name }))}
                    className="w-full"
                    classNamePrefix="select"
                    isClearable
                    isSearchable
                />
            </div>

            {selectedCategory && (
                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold mb-2">Select Item:</label>
                    <Select
                        onChange={handleItemChange}
                        options={items.map(item => ({ value: item.Id, label: item.ItemName }))}
                        className="w-full"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                    />

                    {selectedItemObj && (
                        <>
                            <div className="text-gray-700 font-medium mt-2">
                                MRP: ₹{selectedItemObj.MRP}
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-600 font-semibold mb-2">Offer Price:</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                    value={offerPrice}
                                    onChange={(e) => setOfferPrice(e.target.value)}
                                    placeholder="Enter Offer Price"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                            >
                                Submit Offer
                            </button>

                        </>
                    )}

                </div>
            )}



        </div>
    );
}

export default SubCategoryAdd;
