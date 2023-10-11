"use client";
import React, { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import ReportsTable from './ReportsTable';
import useSWR from 'swr'; // Import SWR
import axios from 'axios';
import { useRouter } from "next/navigation";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Main( {cookieSalmonsLength} ) {

  const [formDataList, setFormDataList] = useState([]);
  // const { data, error } = useSWR('https://cookiesalmonapi.azurewebsites.net/api/CookieStand', fetcher);

  // const handleCreateFormData = (formData) => {
  //   setFormDataList([...formDataList, formData]);
    
  // };
  const router = useRouter();
  const token = localStorage.getItem("token");

  const config ={
    headers:{
      Authorization: `Bearer ${token}`,
    }
  };
  useEffect(() => {
    axios.get("https://cookiesalmonapi.azurewebsites.net/api/CookieStand", config)
      .then((res) => {
        console.log(res);
        setFormDataList(res.data); // Set the state with response data
        cookieSalmonsLength(res.data.length)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CreateForm/>
      <div>
        {formDataList.length > 0  ? (
          <ReportsTable TableDataList={formDataList} />
          ) : (
            <div className='my-6 text-3xl text-white p-4'>No Cookies Available</div>
            )}
      </div>
    </div>
  );
}
