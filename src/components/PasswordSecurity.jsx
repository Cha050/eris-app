import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordSecurity = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#e7e9ef] flex flex-col">
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Password and Security</h1>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
      <div className="container mx-auto p-4 mt-16 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-2">Password and Security</h2>
          <p className="text-gray-600">
            Manage your password and security settings. Update your password, enable two-factor authentication, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordSecurity;
