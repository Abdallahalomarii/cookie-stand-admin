import Link from "next/link";

interface CookieStand {
  id: number;
  location: string;
  description: string;
  hourlySales: number[];
  minimum_Customers_Per_Hour: number;
  maximum_Customers_Per_Hour: number;
  average_Cookies_Per_Sale: number;
  owner: string | null;

}
export default async function GetData() {
  const res = await fetch('https://cookiesalmonapi.azurewebsites.net/api/CookieStand');
  const data: CookieStand[] = await res.json();

  return (
    
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <Link href="/">Return to Main page</Link>
      <div className="py-3 w-full max-w-screen-xl mx-auto">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hourly Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Min Customers/Hour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Max Customers/Hour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Cookies/Sale
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-black">
              {data.map((stand) => (
                <tr key={stand.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.hourlySales.join(', ')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.minimum_Customers_Per_Hour}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.maximum_Customers_Per_Hour}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.average_Cookies_Per_Sale}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stand.owner || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}