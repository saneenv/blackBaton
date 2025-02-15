import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function ImageUpload() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const apiLocalUrl = process.env.REACT_APP_API_LOCAL_URL;


    useEffect(() => {
        fetch(`${apiBaseUrl}/getCategories/BLACKBATON_ERP24`)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [apiBaseUrl]);

    useEffect(() => {
        if (selectedCategory) {
            fetch(`${apiBaseUrl}/getProductByCategory/BLACKBATON_ERP24?Id=${selectedCategory}`)
                .then(response => response.json())
                .then(data => setItems(data.map(item => ({
                    Id: item.ID,
                    ItemName: item.ItemName,
                }))));
        }
    }, [selectedCategory, apiBaseUrl]);

    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory ? selectedCategory.value : '');
        setSelectedItem('');
        setSelectedImage(null);
    };

    const handleItemChange = (selectedItem) => {
        setSelectedItem(selectedItem ? selectedItem.value : '');
        setSelectedImage(null);
    };

    const handleImageUpload = async (event) => {
        const selectedImage = event.target.files[0];
        if (!selectedItem) {
            alert('Please select an item before uploading an image.');
            return;
        }
        setSelectedImage(selectedImage);
        const imageFormat = selectedImage.name.split('.').pop().toLowerCase();
        const formData = new FormData();
        formData.append('image', selectedImage);
        try {
            const response = await fetch(`${apiLocalUrl}/upload-image/${selectedItem}.${imageFormat}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Image uploaded successfully.');
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image uploaded successfully.');
        }
    };

    const handleImageUpload1 = async (event) => {
        const selectedImage = event.target.files[0];
        if (!selectedItem) {
            alert('Please select an item before uploading an image.');
            return;
        }
        setSelectedImage(selectedImage);
        const imageFormat = selectedImage.name.split('.').pop().toLowerCase();
        const formData = new FormData();
        formData.append('image', selectedImage);
        try {
            const response = await fetch(`${apiLocalUrl}/upload-image1/${selectedItem}.${imageFormat}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Image uploaded successfully.');
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image uploaded successfully.');
        }
    };


    const handleImageUpload2 = async (event) => {
        const selectedImage = event.target.files[0];
        if (!selectedItem) {
            alert('Please select an item before uploading an image.');
            return;
        }
        setSelectedImage(selectedImage);
        const imageFormat = selectedImage.name.split('.').pop().toLowerCase();
        const formData = new FormData();
        formData.append('image', selectedImage);
        try {
            const response = await fetch(`${apiLocalUrl}/upload-image2/${selectedItem}.${imageFormat}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Image uploaded successfully.');
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image uploaded successfully.');
        }
    };



    const handleImageUpload3 = async (event) => {
        const selectedImage = event.target.files[0];
        if (!selectedItem) {
            alert('Please select an item before uploading an image.');
            return;
        }
        setSelectedImage(selectedImage);
        const imageFormat = selectedImage.name.split('.').pop().toLowerCase();
        const formData = new FormData();
        formData.append('image', selectedImage);
        try {
            const response = await fetch(`${apiLocalUrl}/upload-image3/${selectedItem}.${imageFormat}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Image uploaded successfully.');
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image uploaded successfully.');
        }
    };


    const handleImageUpload4 = async (event) => {
        const selectedImage = event.target.files[0];
        if (!selectedItem) {
            alert('Please select an item before uploading an image.');
            return;
        }
        setSelectedImage(selectedImage);
        const imageFormat = selectedImage.name.split('.').pop().toLowerCase();
        const formData = new FormData();
        formData.append('image', selectedImage);
        try {
            const response = await fetch(`${apiLocalUrl}/upload-image4/${selectedItem}.${imageFormat}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Image uploaded successfully.');
            } else {
                alert('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Image uploaded successfully.');
        }
    };



    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Image Upload</h1>

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
                </div>
            )}

            {selectedItem && (
                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-2">Upload Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}

            {selectedItem && (
                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-2">Upload extra Image 1:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload1}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}


            {selectedItem && (
                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-2">Upload extra Image 2:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload2}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}

            {selectedItem && (
                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-2">Upload extra Image 3:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload3}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}


            {selectedItem && (
                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-2">Upload extra Image 4:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload4}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}

            {selectedImage && (
                <div className="mt-6 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Preview:</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="mt-3 w-full max-h-64 object-cover rounded-lg shadow-md" />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
