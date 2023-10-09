'use client';
import React, { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import ReportsTable from './ReportsTable';

function Main({cookieSalmonsLength}) {
  const [formDataList, setFormDataList] = useState([]);
  // const [dataListLength, setDataListLength] = useState(0);
  

  const handleCreateFormData = (data) => {
    // setFormData(data);
    setFormDataList([...formDataList, data]); // Add the new data to the list of objects
    cookieSalmonsLength(formDataList.length + 1);
  };

  // useEffect(()=>{
  //   setDataListLength(formDataList.length);

  // },[formDataList])
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CreateForm createFormData={handleCreateFormData} />
      <div>
       
      {/* {formDataList.length > 0 ? (
          formDataList.map((data, index) => (
            <ReportsTable key={index} hours={data.hourly_sales} reports={data} />
          ))
        ) : (
          <div className='my-6 text-3xl text-white p-4'>No Cookies Available</div>
        )} */}
       {formDataList.length > 0 ? (
          <ReportsTable formDataList={formDataList} />
        ) : (
          <div className='my-6 text-3xl text-white p-4'>No Cookies Available</div>
        )}
      </div>
    </div>
  );
}

export default Main;
