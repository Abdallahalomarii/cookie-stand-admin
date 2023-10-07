export default function DisplayData({ formData }) {
    return (
      <div className="mt-4rounded p-5 text-white">
      {formData ? (
        <>
          {/* Display form data */}
          <h2 className="text-xl font-bold mb-4">Form Data:</h2>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Minimum Customers Per Hour:</strong> {formData.minCustomers}</p>
          <p><strong>Maximum Customers Per Hour:</strong> {formData.maxCustomers}</p>
          <p><strong>Average Cookies Per Sale:</strong> {formData.avgCookies}</p>
        </>
      ) : (
        <></>
      )}
    </div>
    );
  }