import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  // Sample history data (replace with actual data)
  const historyData = [
    { date: '2024-02-23', emergencyType: 'Robbery', location: 'Lumina Homes Phase 1, Bagtas, Tanza, Cavite' },
    { date: '2024-04-12', emergencyType: 'First Aid', location: 'Carissa, Bagtas, Tanza, Cavite' },
    { date: '2024-05-01', emergencyType: 'Fire', location: 'Pabahay, Phase 2, Bagtas, Tanza, Cavite' },
    { date: '2024-09-21', emergencyType: 'EMS', location: 'Pabahay, Phase 3, Bagtas, Tanza, Cavite' },
    { date: '2024-10-11', emergencyType: 'Disaster', location: 'Lumina Homes Phase 3, Phase 2, Bagtas, Tanza, Cavite' },
  ];

  return (
    <div className="min-h-screen bg-[#e7e9ef]">
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">History</h1>
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Back
          </button>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-16">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold mb-2 border-b-2 border-black">Emergency Call History</div>
          {/* Display history entries */}
          <ul className="divide-y divide-gray-200">
            {historyData.map((entry, index) => (
              <li key={index} className="py-2">
                <div className="flex justify-between border-b border-black">
                  <div>
                    <p className="text-m font-semibold">{entry.date}</p>
                    <p className="text-gray-500">Type: {entry.emergencyType}</p>
                    <p className="text-gray-500">Location: {entry.location}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
