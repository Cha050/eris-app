import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [notificationDetails, setNotificationDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Sample notification details
    const sampleDetails = {
      title: 'Your account was created',
      message: 'You can now use Bagtas: ERIS app and see important news and updates of our baranggay. You can also send emergency alert when necessary. Thank you!'
    };
    // Set the sample details to the state
    setNotificationDetails(sampleDetails);
  }, []);

  const handleBack = () => {
    // Navigate to the Footer component when the back button is clicked
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#e7e9ef]">
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Notification</h1>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
      <div className="container mx-auto p-4 mt-16">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-2 text-gray-700">{notificationDetails.title}</h2>
          <p className="text-gray-600 italic">{notificationDetails.message}</p>
          <p className="text-gray-500 text-sm">Date: June 1, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
