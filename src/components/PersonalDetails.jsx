import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.png'; // Import the profile image

const INPUT_CLASS = 'w-full bg-gray-200 border border-gray-300 rounded-lg p-2 text-sm md:text-base text-gray-500 pointer-events-none';
const TEXT_MUTED_CLASS = 'text-gray-500';
const BUTTON_CLASS = 'bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base';
const CARD_CLASS = 'w-full max-w-md bg-white p-6 rounded-lg shadow-md';

const PersonalDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleEditProfile = () => {
    // Implement edit profile logic here
    console.log('Editing profile...');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="fixed top-0 left-0 right-0 bg-gray-100 p-4 flex justify-between items-center shadow-md z-10">
        <h1 className="text-xl md:text-2xl font-bold">Personal Details</h1>
        <button onClick={handleBack} className={BUTTON_CLASS}>Back</button>
      </div>
      <div className={CARD_CLASS} style={{ marginTop: '100px' }}>
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <img src={profileImage} alt="Profile Avatar" className="rounded-full h-24 w-24" />
            <button
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-blue-600"
              onClick={handleEditProfile}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h2V6a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V9h-2a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="space-y-4 w-full">
            <ProfileField label="First name" value="Juan" />
            <ProfileField label="Middle name" value="Ponce" />
            <ProfileField label="Last name" value="Dela Cruz" />
            <ProfileField label="Complete Address" value="Block 34, Lot 19, Phase 2, Lumina Homes, Tanza Cavite, Philippines" />
            <ProfileField label="Place of Birth" value="San Roque 1, San Jose, Occidental Mindoro, Philippines" />
            <ProfileField label="Date of Birth" value="February 14, 2003" />
            <div className="flex space-x-4">
              <ProfileField label="Gender" value="Male" />
              <ProfileField label="Civil Status" value="Single" />
            </div>
            <ProfileField label="Email" value="juandelacruz123@gmail.com" />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="text-blue-600 hover:underline text-sm md:text-base" onClick={handleEditProfile}>Edit</button>
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

export default PersonalDetails;
