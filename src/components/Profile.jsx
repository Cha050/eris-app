import React from 'react';
import profileImage from '../assets/profile.png'; // Import the profile image
import { Link } from 'react-router-dom';

const INPUT_CLASS = 'w-full bg-gray-200 border border-gray-300 rounded-lg p-2 text-sm md:text-base text-gray-500 pointer-events-none';
const TEXT_COLOR_CLASS = 'text-gray-900';
const TEXT_MUTED_CLASS = 'text-gray-500';
const BUTTON_CLASS = 'bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base';
const CARD_CLASS = 'w-full max-w-md bg-white p-6 rounded-lg shadow-md';
const TITLE_CLASS = 'text-xl md:text-2xl font-bold';

const Profile = () => {
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="fixed top-0 left-0 right-0 bg-gray-100 p-4 flex justify-between items-center shadow-md z-10">
        <h1 className={TITLE_CLASS}>Profile</h1>
        <Link to="/home" className={BUTTON_CLASS}>Back</Link>
      </div>
      <div className={CARD_CLASS} style={{ marginTop: '100px' }}>
        <div className="flex flex-col items-center mb-6">
          <img src={profileImage} alt="Profile Avatar" className="rounded-full mb-4 h-24 w-24" />
          <p className={`${TEXT_COLOR_CLASS} text-sm md:text-base mb-2`}>juandelacruz123@gmail.com</p>
          <p className={`${TEXT_MUTED_CLASS} text-sm md:text-base mb-4`}>Juan Ponce Dela Cruz</p>
        </div>
        <div className="space-y-4 pb-4 border-b border-gray-300 mb-4">
          <ProfileField label="Full name" value="Juan Ponce Dela Cruz" />
          <ProfileField label="Complete Address" value="Block 34, Lot 19, Phase 2, Lumina Homes, Tanza Cavite, Philippines" />
          <ProfileField label="Place of Birth" value="San Roque 1, San Jose, Occidental Mindoro, Philippines" />
          <ProfileField label="Date of Birth" value="February 14, 2003" />
          <div className="flex space-x-4">
            <ProfileField label="Gender" value="Male" />
            <ProfileField label="Civil Status" value="Single" />
          </div>
          <ProfileField label="Email" value="juandelacruz123@gmail.com" />
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => {
  return (
    <div>
      <label className={`${TEXT_MUTED_CLASS} mb-1 text-sm md:text-base block`}>{label}</label>
      <input type="text" value={value} className={INPUT_CLASS} readOnly />
    </div>
  );
};

export default Profile;
