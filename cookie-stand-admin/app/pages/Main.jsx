"use client";
import 'react';
import { useState } from 'react';
import DisplayData from './DisplayData';
function Main() {

  const [formData, setFormData] = useState({
    location: '',
    minCustomers: '',
    maxCustomers: '',
    avgCookies: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to track if the form has been submitted

  const handleSubmit = (e) => {
    e.preventDefault();
      
      const location = e.target.location.value;
      const minCustomers = e.target.minCustomers.value;
      const maxCustomers = e.target.maxCustomers.value;
      const avgCookies = e.target.avgCookies.value;
    setFormData({
      location,
      minCustomers,
      maxCustomers,
      avgCookies
  });
    setSubmitted(true); // Set submitted to true when the form is submitted
    // Handle form submission here if needed
  };
  
  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <form className="w-2/3 bg-white p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold mb-4 text-dark">Create Cookie Stand</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold text-sm mb-2">Location</label>
          <input name='location' type="text" id="location" className="w-full border border-gray-300 p-2 rounded" 
        
          />
        </div>
        <div className="flex flex-col mb-4 md:flex-row md:justify-between">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <label htmlFor="minCustomers" className="block text-gray-700 font-bold text-sm mb-2">Minimum Customers Per Hour</label>
            <input name='minCustomers' type="number" id="minCustomers" className="w-full border border-gray-300 p-2 rounded"
            
             />
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0 md:ml-4">
            <label htmlFor="maxCustomers" className="block text-gray-700 font-bold text-sm mb-2">Maximum Customers Per Hour</label>
            <input name='maxCustomers' type="number" id="maxCustomers" className="w-full border border-gray-300 p-2 rounded" 
           
            />
          </div>
          <div className="md:w-1/3 md:ml-4">
            <label htmlFor="avgCookies" className="block text-gray-700 font-bold text-sm mb-2">Average Cookies Per Sale</label>
            <input name='avgCookies' type="number" id="avgCookies" className="w-full border border-gray-300 p-2 rounded" 
          
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded">Create</button>
        </div>
      </form>
      <div>
      {submitted && ( <DisplayData formData={formData} /> )}
      </div>
    </div>
    
  );
}

export default Main;

