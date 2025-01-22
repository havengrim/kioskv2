import  { useEffect, useState } from 'react';
import axios from 'axios';

const KioskDashboard = () => {
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=AbBNSAVGssfOpIhNDjVUJrX5fPGT6lrsUtBy6NCo27BnDuQVaX2DL9Cd2UQV7CYFt_Ltp7fTIvV6lHaWr33hbMTF9iZjYkTYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEDVjmHg4lCaBmgvisyYInygQ1mof0uFX8tFiC3RQASATLndWbXSnjq0wA2QMflM6XTsm4j3lNUBgfNm4sWFbHIjT2YMRAHE_g&lib=Ms7Qj1fUp-ODfQtm5OME7yuFTDALK3NO3'; // Your Google Apps Script URL
      
      try {
        const response = await axios.get(url);
        const totalEmployees = response.data.values.length;  // Count rows or process your data
        setEmployeeCount(totalEmployees);
      } catch (error) {
        console.error('Error fetching data from Google Apps Script:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div className="kiosk-dashboard">
      <h1>Employee Check-In</h1>
      <p>Total Employees Checked In: {employeeCount}</p>
    </div>
  );
};

export default KioskDashboard;
