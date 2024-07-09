import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const EmergencyReportForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const emergencyOptions = {
    Violence: ['Assault', 'Homicide', 'Rape', 'Child Abuse', 'Nagwawala', 'Videoke', 'Riot'],
    Fire: ['Lightning struck', 'Bombing', 'Short circuit'],
  };

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: type || '',
    specificType: '',
    description: '',
    image: null,
  });

  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (type) {
      setFormData((prevData) => ({ ...prevData, type }));
    }
  }, [type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Responders are on their way!');
    navigate('/direction/' + type);
  };

  const toggleConfirm = () => {
    setConfirming((prevConfirming) => !prevConfirming);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Header />
      <div className="pt-24 pb-20 bg-white-100">
        <h1 className="text-center text-2xl font-bold mb-4">Send Emergency Report</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type of Emergency</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select</option>
              <option value="Fire">Fire</option>
              <option value="Violence">Violence</option>
              <option value="Disaster">Disaster</option>
              <option value="EMS">EMS</option>
              <option value="Robbery">Robbery</option>
              <option value="First Aid">First Aid</option>
            </select>
          </div>
          {formData.type && (
            <div className="mb-4">
              <label htmlFor="specificType" className="block text-sm font-medium text-gray-700">Specific Type</label>
              <select
                id="specificType"
                name="specificType"
                value={formData.specificType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select</option>
                {emergencyOptions[formData.type]?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {formData.image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Uploaded Preview"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
          {!confirming ? (
            <button
              type="button"
              onClick={toggleConfirm}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 transition duration-300 hover:bg-blue-700"
            >
              Confirm
            </button>
          ) : (
            <div className="flex items-center">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg mr-2 transition duration-300 hover:bg-green-700">
                Submit Report
              </button>
              <button
                type="button"
                onClick={toggleConfirm}
                className="bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EmergencyReportForm;
