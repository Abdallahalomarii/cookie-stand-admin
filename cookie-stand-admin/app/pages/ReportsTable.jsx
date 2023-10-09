export default function ReportsTable({ formDataList }) {

  const calculateRowSum = (row) => {
    return row.hourly_sales.reduce((acc, item) => acc + item, 0);
  };

  const calculateColumnSum = (formDataList, columnIndex) => {
    return formDataList.reduce((acc, row) => acc + row.hourly_sales[columnIndex], 0);
  };

  const totalSum = formDataList.reduce((acc, row) => acc + calculateRowSum(row), 0);
  const columnSums = Array.from({ length: 14 }, (_, columnIndex) =>
    calculateColumnSum(formDataList, columnIndex)
  );
  
  return (
    <div className="mt-4rounded p-5 text-white">
      {formDataList.length > 0 ? (
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
                {formDataList.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{data.location}</td>
                    {data.hourly_sales.map((clock, subIndex) => (
                      <td key={subIndex} className="px-6 py-4 whitespace-nowrap">{clock}</td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {calculateRowSum(data)}
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
        <div>No Cookies Avialabe right now</div>
      )}
    </div>
  );
}