import React from 'react';
import Header from './Header';
import Footer from './Footer';
import fireImage from '../assets/fire.jpg';
import violenceImage from '../assets/violence.jpg';
import disasterImage from '../assets/disaster.jpg';
import emsImage from '../assets/ems.jpg';
import robberyImage from '../assets/robbery.jpg';
import firstAidImage from '../assets/firstaid.jpg';

// Shared Tailwind CSS classes
const cardClasses = 'bg-white p-4 rounded-lg shadow text-center';

const Home = () => {
  return (
    <div>
      <Header />
      {/* Content Section */}
      <div className="pt-24 pb-20 bg-zinc-100">
        <h1 className="text-center text-2xl font-bold mb-4">EMERGENCY SERVICES</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className={cardClasses}>
            <img src={fireImage} alt="Fire" className="mx-auto mb-2" />
            <span>Fire</span>
          </div>
          <div className={cardClasses}>
            <img src={violenceImage} alt="Violence" className="mx-auto mb-2" />
            <span>Violence</span>
          </div>
          <div className={cardClasses}>
            <img src={disasterImage} alt="Disaster" className="mx-auto mb-2" />
            <span>Disaster</span>
          </div>
          <div className={cardClasses}>
            <img src={emsImage} alt="EMS" className="mx-auto mb-2" />
            <span>EMS</span>
          </div>
          <div className={cardClasses}>
            <img src={robberyImage} alt="Robbery" className="mx-auto mb-2" />
            <span>Robbery</span>
          </div>
          <div className={cardClasses}>
            <img src={firstAidImage} alt="First Aid" className="mx-auto mb-2" />
            <span>First Aid</span>
          </div>
        </div>
        {/* Emergency Hotlines Section */}
        <div className="bg-zinc-200 p-4 mt-4 rounded-lg">
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
