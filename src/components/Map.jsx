import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BUTTON_CLASS =
  "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base";
const ICON_CLASS = "text-white text-xl";

const Map = () => {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
          alert("Error getting your current location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleCenterToCurrentLocation = () => {
    if (currentLocation) {
      const { lat, lng } = currentLocation;
      const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287.3138915596395!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1`;
      document.getElementById("google-map").src = mapUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="fixed top-0 left-0 right-0 bg-gray-100 p-4 flex justify-between items-center shadow-md z-10">
        <h1 className="text-xl md:text-2xl font-bold">Map</h1>
        <button onClick={handleBack} className={BUTTON_CLASS}>
          Back
        </button>
      </div>
      <div className="map-container" style={{ marginTop: "100px" }}>
        <div className="map-responsive">
          <iframe
            id="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287.3138915596395!2d120.84371455827053!3d14.333518402884108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962b2af234a441%3A0x46ad730f54c583dd!2sLumina%20Brgy.Bagtas%20Tanza%20Cavite!5e0!3m2!1sen!2sph!4v1720121609222!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleGetCurrentLocation}
          className={`${BUTTON_CLASS} mt-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${ICON_CLASS}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Show My Location
        </button>
        {currentLocation && (
          <button
            onClick={handleCenterToCurrentLocation}
            className={`${BUTTON_CLASS} mt-2`}
          >
            Center to My Location
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;
