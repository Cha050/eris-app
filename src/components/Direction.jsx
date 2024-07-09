import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Direction = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to initialize Google Maps and Directions Service
    const initMap = () => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();

      const mapOptions = {
        center: { lat: 14.333251086122084, lng: 120.84757427494384 }, // Starting point (Bagtas Barangay Hall)
        zoom: 12, // Zoom level
      };

      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      directionsRenderer.setMap(map);

      // Define route from Bagtas Barangay Hall to Cavite State University Tanza Campus
      const request = {
        origin: { lat: 14.335245086120274, lng: 120.85048077494382 }, // Bagtas Barangay Hall
        destination: { lat: 14.333251086122084, lng: 120.84757427494384 }, // Cavite State University Tanza Campus
        travelMode: 'DRIVING',
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    };

    // Load Google Maps API script dynamically
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
    };

    // Call the function to load Google Maps
    loadGoogleMapsScript();

  }, []);

  const handleBack = () => {
    navigate('/home'); // Navigate back to the Home page
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Header />
      <div className="pt-24 pb-20 bg-white-100">
        <h1 className="text-center text-2xl font-bold mb-4">Direction</h1>
        <button onClick={handleBack} className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">Back</button>
        <div id="map" className="h-96 mx-auto rounded-lg shadow-md"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Direction;
