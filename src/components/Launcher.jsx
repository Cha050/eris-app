import React, { useEffect } from 'react';
import Image from '../assets/logo.png'; // Ensure the path to the logo is correct

const Launcher = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <img src={Image} alt="Loading" className="max-w-full max-h-full object-cover" />
    </div>
  );
};

export default Launcher;
