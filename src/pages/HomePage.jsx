// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchData } from '../services/api';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
      <p>This is the home page.</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
