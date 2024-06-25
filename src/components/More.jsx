import React from 'react';
import { useNavigate } from 'react-router-dom';

const More = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  const navigateToPage = (page) => {
    navigate(`/more/${page}`);
  };

  return (
    <div className="min-h-screen bg-[#e7e9ef] flex flex-col">
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">More</h1>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
      <div className="container mx-auto p-4 mt-16 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <button onClick={() => navigateToPage('personal-details')} className="text-sm text-left">
                <h2 className="text-lg font-bold mb-2">Personal Details</h2>
                <p className="text-gray-600">Update your personal information.</p>
              </button>
            </li>
            <li className="py-4">
              <button onClick={() => navigateToPage('password-security')} className="text-sm text-left">
                <h2 className="text-lg font-bold mb-2">Password and Security</h2>
                <p className="text-gray-600">Manage your password and security settings.</p>
              </button>
            </li>
            <li className="py-4">
              <button onClick={() => navigateToPage('help-support')} className="text-sm text-left">
                <h2 className="text-lg font-bold mb-2">Help and Support</h2>
                <p className="text-gray-600">Get help and support for any issues.</p>
              </button>
            </li>
            <li className="py-4">
              <button onClick={() => navigateToPage('privacy-policy')} className="text-sm text-left">
                <h2 className="text-lg font-bold mb-2">Privacy Policy</h2>
                <p className="text-gray-600">Review our privacy policy.</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default More;
