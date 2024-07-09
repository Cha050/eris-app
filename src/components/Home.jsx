import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import fireImage from '../assets/fire.png';
import violenceImage from '../assets/violence.png';
import disasterImage from '../assets/disaster.png';
import emsImage from '../assets/ems.png';
import robberyImage from '../assets/robbery.png';
import firstAidImage from '../assets/firstaid.png';

const cardClasses = 'bg-white p-4 rounded text-center cursor-pointer';

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    navigate(`/report/${type}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Header />
      <div className="pt-24 pb-20 bg-white-100">
        <h1 className="text-center text-2xl font-bold mb-4">EMERGENCY SERVICES</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-2xl">
          <div className={cardClasses} onClick={() => handleCardClick('Fire')}>
            <img src={fireImage} alt="Fire" className="mx-auto mb-2" />
            <span>Fire</span>
          </div>
          <div className={cardClasses} onClick={() => handleCardClick('Violence')}>
            <img src={violenceImage} alt="Violence" className="mx-auto mb-2" />
            <span>Violence</span>
          </div>
          <div className={cardClasses} onClick={() => handleCardClick('Disaster')}>
            <img src={disasterImage} alt="Disaster" className="mx-auto mb-2" />
            <span>Disaster</span>
          </div>
          <div className={cardClasses} onClick={() => handleCardClick('EMS')}>
            <img src={emsImage} alt="EMS" className="mx-auto mb-2" />
            <span>EMS</span>
          </div>
          <div className={cardClasses} onClick={() => handleCardClick('Robbery')}>
            <img src={robberyImage} alt="Robbery" className="mx-auto mb-2" />
            <span>Robbery</span>
          </div>
          <div className={cardClasses} onClick={() => handleCardClick('First Aid')}>
            <img src={firstAidImage} alt="First Aid" className="mx-auto mb-2" />
            <span>First Aid</span>
          </div>
        </div>
        <div className="bg-white-200 p-4 mt-4 rounded-lg">
          <p className="mb-2">
            <strong>Tanza Police Station</strong>
            <br />
            046 505 1202
          </p>
          <p className="mb-2">
            <strong>MDRRMO - Tanza</strong>
            <br />
            0977 345 5035
          </p>
          <p>
            <strong>Tanza, Cavite Fire Station</strong>
            <br />
            046 505 6084
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
