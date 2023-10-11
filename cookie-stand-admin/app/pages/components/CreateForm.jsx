'use client';

import axios from 'axios';
import 'react';
import { useState } from "react";




export default function CreatForm() {

    const [formData, setFormData] = useState({
        location: '',
        description: '',
        minimum_Customers_Per_Hour: '',
        maximum_Customers_Per_Hour: '',
        average_Cookies_Per_Sale: '',
        owner: ''
    });
    const [isCreating, setIsCreating] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here if needed
        const token = localStorage.getItem("token");
        setIsCreating(true);
        // const config ={
        //     method: 'POST',
        //     data: formData,
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //         Authorization: `Bearer ${token}`,
        //     }
        // }

        try {
            // await axios.post('https://cookiesalmonapi.azurewebsites.net/api/CookieStand', config);
            await axios.post('https://cookiesalmonapi.azurewebsites.net/api/CookieStand', formData,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                }
            });
            setFormData({
                location: '',
                description: '',
                minimum_Customers_Per_Hour: '',
                maximum_Customers_Per_Hour: '',
                average_Cookies_Per_Sale: '',
                owner: ''
            });

        }
        catch (error) {
            console.error('Error posting data to the API:', error);
        }
        finally{
            setIsCreating(false);
        }
        // createFormData(newData);
    };

    return (
        <form className="w-2/3 bg-white p-6 rounded shadow-lg text-black" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold mb-4 text-dark">Create Cookie Stand</h1>
            </div>
            <div className="flex flex-col mb-4 md:flex-row justify-around">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <label htmlFor="location" className="block text-gray-700 font-bold text-sm mb-2">Location</label>
                    <input name='location' type="text" id="location" className="w-full border border-gray-300 p-2 rounded" required
                        placeholder='Location'
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <label htmlFor="description" className="block text-gray-700 font-bold text-sm mb-2">Description</label>
                    <input name='description' type="text" id="description" className="w-full border border-gray-300 p-2 rounded" required
                        placeholder='Description'
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex flex-col mb-4 md:flex-row md:justify-between">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <label htmlFor="minimum_Customers_Per_Hour" className="block text-gray-700 font-bold text-sm mb-2">Minimum Customers Per Hour</label>
                    <input name='minimum_Customers_Per_Hour' type="number" id="minimum_Customers_Per_Hour" className="w-full border border-gray-300 p-2 rounded"
                        required
                        placeholder='Minimum Customers'
                        value={formData.minimum_Customers_Per_Hour}
                        onChange={(e) => setFormData({ ...formData, minimum_Customers_Per_Hour: e.target.value })}

                    />
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0 md:ml-4">
                    <label htmlFor="maximum_Customers_Per_Hour" className="block text-gray-700 font-bold text-sm mb-2">Maximum Customers Per Hour</label>
                    <input name='maximum_Customers_Per_Hour' type="number" id="maximum_Customers_Per_Hour" className="w-full border border-gray-300 p-2 rounded" required
                        placeholder='Maximum Customers'
                        value={formData.maximum_Customers_Per_Hour}
                        onChange={(e) => setFormData({ ...formData, maximum_Customers_Per_Hour: e.target.value })}
                    />
                </div>
                <div className="md:w-1/3 md:ml-4">
                    <label htmlFor="average_Cookies_Per_Sale" className="block text-gray-700 font-bold text-sm mb-2">Average Cookies Per Sale</label>
                    <input name='average_Cookies_Per_Sale' type="number" id="average_Cookies_Per_Sale" className="w-full border border-gray-300 p-2 rounded" required
                        placeholder='Average Cookies'
                        value={formData.average_Cookies_Per_Sale}
                        onChange={(e) => setFormData({ ...formData, average_Cookies_Per_Sale: e.target.value })}
                    />
                </div>

                <div className="md:w-1/3 md:ml-4">
                    <label htmlFor="owner" className="block text-gray-700 font-bold text-sm mb-2">Owner</label>
                    <input name='owner' type="text" id="owner" className="w-full border border-gray-300 p-2 rounded"
                        placeholder='Owner'
                        value={formData.owner}
                        onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                    />
                </div>


            </div>
            <div className="flex justify-center">
                <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded" disabled={isCreating}>
                    {isCreating ? 'Creating...' : 'Create'}
                    </button>
            </div>
        </form>
    );
}