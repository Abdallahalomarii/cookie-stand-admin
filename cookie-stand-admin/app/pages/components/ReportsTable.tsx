import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function ReportsTable(TableDataList:any) {
  
  const data = TableDataList.TableDataList;
  
  const calculateRowSum = (row:any) => {
    return row.hourlySales.reduce((acc: any, item: any) => acc + item, 0);
  };

  const calculateColumnSum = (formDataList: any[], columnIndex: number) => {
    return formDataList.reduce((acc, row) => acc + row.hourlySales[columnIndex], 0);
  };

  const totalSum = data.reduce((acc: any, row: any) => acc + calculateRowSum(row), 0);
  const columnSums = Array.from({ length: 14 }, (_, columnIndex) =>
    calculateColumnSum(data, columnIndex)
  );

  const HandleDeleteCookie = async (cookie:any) => {
    
    try{
      await axios.delete(`https://cookiesalmonapi.azurewebsites.net/api/CookieStand/${cookie}`);
    }
    catch(error){
      alert(`Error while trying to delete cookie with this id ${cookie} 
      the error : ${error}`);
    }
    
    
  }
  
  return (
    <div className="mt-4rounded p-5 text-white">
      {data.length > 0 ? (
        <div className="py-3 w-full max-w-screen-xl mx-auto">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    6AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    7AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    8AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    9AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    10AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    11AM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    12PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    1Pm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    2PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    3PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    4PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    5PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    6PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    7PM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-black">
              {data.map((item:any, index:any) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.location} <FontAwesomeIcon icon={faTrash} style={{color:'#aa0000'}}  onClick={()=>{HandleDeleteCookie(item.id)}}/> </td>
                    {item.hourlySales.map((clock:any, subIndex:any) => (
                      <td key={subIndex} className="px-6 py-4 whitespace-nowrap">{clock}</td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {calculateRowSum(item)}
                    </td>
                  </tr>
                ))}
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-bold	">Column Total</td>
                  {columnSums.map((sum, columnIndex) => (
                    <td key={columnIndex} className="px-6 py-4 whitespace-nowrap font-bold	">
                      {sum}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap font-bold	">{totalSum}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>No Cookies Avialabe right now from Report  Table </div>
      )}
    </div>
  );
}