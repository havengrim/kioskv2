import { useEffect, useState } from 'react';
import axios from 'axios';

const KioskDashboard = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [error] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      try {
        const response = await axios.get(url);

        // Process the response data
        const fetchedData = response.data;
        if (fetchedData && fetchedData.data) {
          const totalEmployees = fetchedData.data.position25?.filled || 0;


          setEmployeeCount(totalEmployees);
 
        } else {
          console.warn('Unexpected response structure:', fetchedData);
        }
      } catch (err) {
        console.error('Error fetching data from Google Apps Script:', err);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div className="kiosk-dashboard">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          <p className='dark:text-black'>{employeeCount}</p>
        </div>
      )}
    </div>
  );
};

export default KioskDashboard;
