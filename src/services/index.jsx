import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Add your global styles here
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
