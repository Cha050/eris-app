// src/App.jsx
import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png'; // Ensure the path is correct
import Loading from './components/Loading'; // Ensure the path is correct

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#e7e9ef]">
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <img src={logo} alt="Logo" className="w-32 h-32 rounded-full mb-4" />
            <h1 className="text-xl font-bold text-[#00069f]">BAGTAS: ERIS</h1>
          </div>
          <Routes />
        </>
      )}
    </div>
  );
}

export default App;
