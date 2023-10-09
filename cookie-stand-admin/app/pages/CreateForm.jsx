'use client';

import 'react';
import { useState } from "react";

function getRandomNumber(minimum, maximum) {
  // Generate a random number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
export default function CreatForm({ createFormData }) {

    const [formData, setFormData] = useState({
        location: '',
        minCustomers: '',
        maxCustomers: '',
        avgCookies: '',
    });

    const [onCreate , setOnCreate] = useState(
        {
            location : '',
            hourly_sales:[],
        }
    );

    const handleHourlySales = (min,max,avg) =>{
        const hourlySalesArray = [];
        
        for (let index = 1; index <= 14; index++) {
            const randomCosutmer = getRandomNumber(min, max);
            const sales = Math.floor(randomCosutmer * avg);

            hourlySalesArray.push(sales);
        }
        return hourlySalesArray;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here if needed
        var hourlySales = handleHourlySales(
          formData.minCustomers,
          formData.maxCustomers,
          formData.avgCookies
        );
        const newData = {
          location: formData.location,
          hourly_sales: hourlySales,
        };
        createFormData(newData);
      };

    return (
        <form className="w-2/3 bg-white p-6 rounded shadow-lg text-black" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold mb-4 text-dark">Create Cookie Stand</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold text-sm mb-2">Location</label>
                <input name='location' type="text" id="location" className="w-full border border-gray-300 p-2 rounded"required
                    placeholder='Location'
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
            </div>
            <div className="flex flex-col mb-4 md:flex-row md:justify-between">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <label htmlFor="minCustomers" className="block text-gray-700 font-bold text-sm mb-2">Minimum Customers Per Hour</label>
                    <input name='minCustomers' type="number" id="minCustomers" className="w-full border border-gray-300 p-2 rounded"
                    required
                    placeholder='Minimum Customers'
                        value={formData.minCustomers}
                        onChange={(e) => setFormData({ ...formData, minCustomers: e.target.value })}

                    />
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0 md:ml-4">
                    <label htmlFor="maxCustomers" className="block text-gray-700 font-bold text-sm mb-2">Maximum Customers Per Hour</label>
                    <input name='maxCustomers' type="number" id="maxCustomers" className="w-full border border-gray-300 p-2 rounded"required
                    placeholder='Maximum Customers'
                        value={formData.maxCustomers}
                        onChange={(e) => setFormData({ ...formData, maxCustomers: e.target.value })}
                    />
                </div>
                <div className="md:w-1/3 md:ml-4">
                    <label htmlFor="avgCookies" className="block text-gray-700 font-bold text-sm mb-2">Average Cookies Per Sale</label>
                    <input name='avgCookies' type="number" id="avgCookies" className="w-full border border-gray-300 p-2 rounded"required
                    placeholder='Average Cookies'
                        value={formData.avgCookies}
                        onChange={(e) => setFormData({ ...formData, avgCookies: e.target.value })}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded">Create</button>
            </div>
        </form>
    );
}