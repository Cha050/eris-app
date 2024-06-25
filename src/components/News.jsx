import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import medical from '../assets/medical.jpg';
import fiesta from '../assets/fiesta.jpg';
import attention from '../assets/attention.jpg';
import zumba from '../assets/zumba.jpg';
import feedinggg from '../assets/feedinggg.mp4';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [expandedCaptionId, setExpandedCaptionId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);

  useEffect(() => {
    const fetchNews = () => {
      const newsData = [
        {
          id: 1,
          title: "Barangay Bagtas Clean-Up Drive",
          caption: "PABATID PUBLIKO! Magkakaroon po ng Medical Mission sa ating Barangay ngayong Sabado, Agosto 12, 2023 sa ganap na 8:00 hanggang 11:30 ng umaga. Ito po ay handog sa inyo ng M.A.R.E. Foundation sa pakikipagtulungan ng Pamahalaang Barangay ng Bagtas. Maraming Salamat po!",
          summary: "#BagtasMagkaisa2023",
          imageUrl: medical
        },
        {
          id: 4, // ID for the video post
          title: "Nutri-Bus Feeding Program",
          caption: "Nutri-Bus Feeding Program sa Paaralang Elementarya ng Bagtas, handog ni Senator Imee Marvos, Gov. Jonvic Remulla, Mayor Yuri Pacumio, Vice Mayor SM Matro at mga kasama.",
          summary: "#BagtasMagkaisa #Video",
          videoUrl: feedinggg // Video URL
        },
        {
          id: 2,
          title: "Health and Wellness Fair",
          caption: "Binabati po natin ng isang Maligayang Kapistahan ang ating mga Kababayan sa Sitio Matabok sa Brgy. Calibuyo, P6 Carissa Homes ng Brgy. Punta 1 at Star Fish sa Barangay Amaya 1. Dalangin po natin ang kaayusan, at kapayapaan ng Pagdiriwang ng inyong Kapistahan. Nawa'y ilapit tayo ng ating Patron na Our Lady of Fatima sa kabanalan at kaluwalhatian ng ating Panginoon. Mabuhay po tayong Lahat.",
          summary: "#ResponsablengMaglingkod #MatroBros #TeamYAP",
          imageUrl: fiesta
        },
        {
          id: 5,
          title: "Basketball Tournament",
          caption: "Calling Tanzeños of all ages! 𝑹𝒆𝒂𝒅𝒚 𝒕𝒐 𝒖𝒏𝒍𝒐𝒄𝒌 𝒚𝒐𝒖𝒓 𝒑𝒐𝒕𝒆𝒏𝒕𝒊𝒂𝒍 𝒂𝒏𝒅 𝑼𝑷𝑳𝑰𝑭𝑻 𝒚𝒐𝒖𝒓 𝒔𝒌𝒊𝒍𝒍𝒔? Join Cavite State University Tanza's 𝐒𝐔𝐬𝐭𝐚𝐢𝐧𝐢𝐧𝐠 𝐚𝐧𝐝 𝐄𝐦𝐏𝐨𝐰𝐞𝐫𝐢𝐧𝐠 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐋𝐢𝐭𝐞𝐫𝐚𝐜𝐲 𝐈𝐧𝐢𝐭𝐢𝐚𝐭𝐢𝐯𝐞𝐬 𝐅𝐨𝐫 𝐭𝐡𝐞 𝐓𝐚𝐧𝐳𝐞ñ𝐨𝐬 (𝐔𝐏𝐋𝐈𝐅𝐓). This is an Extension Project designed to prepare you in reading, writing, and numerical literacy for the upcoming school year 2024-2025. The General and Teacher Education Department (GTED) Faculty, in collaboration with National Service Training Program 2 (NSTP) students and through partnerships with Barangay Bagtas, Paradahan I & II, and Punta I, will conduct Summer classes every Saturday from May 11th to June 29th. Don't miss this opportunity to enhance your learning journey! ✨ For inquiries, contact Ms. Jhollie Anne D. Lopez, Campus Extension Coordinator, at tanza.extension@cvsu.edu.ph or 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 onsite by accomplishing enrolment forms given to your respective Barangay Halls. Words by: Ms. Rein Ortigosa Poster Layout: Prof. Mildred Sebastian",
          summary: "#CvSUTanza #UPLIFTanzeños #LiteracyProgram #ExtensionProject",
          imageUrl: attention
        },
        {
          id: 6,
          title: "Zumba",
          caption: "HEADS UP, BAGTASEÑOS! FREE ZUMBA Kailan: Abril 27, 2024 | Sabado | 7-8 AM Saan: Bagtas Magkaisa Dome",
          summary: "#MatroBros #BagtasMagkaisa #ResponsablengMaglingkod",
          imageUrl: zumba
        },
      ];
      setNewsItems(newsData);
    };

    fetchNews();
  }, []);

  useEffect(() => {
    // Store the previous location whenever the location changes
    setPreviousLocation(location);
  }, [location]);

  const handleBack = () => {
    // Navigate to the Home component when the back button is clicked
    navigate('/');
  };

  const handleToggleCaption = (id) => {
    setExpandedCaptionId(expandedCaptionId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#e7e9ef]">
      <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-75 p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">News and Events</h1>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
      <div className="container mx-auto p-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white p-4 rounded-lg shadow">
              {news.videoUrl ? (
                <video controls className="w-full h-48 object-cover rounded-t-lg mb-4">
                  <source src={news.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              )}
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-gray-600 italic">
                {expandedCaptionId === news.id ? news.caption : `${news.caption.substring(0, 100)}...`}
                <span
                  onClick={() => handleToggleCaption(news.id)}
                  className="text-blue-500 cursor-pointer"
                >
                  {expandedCaptionId === news.id ? ' Show less' : ' See more'}
                </span>
              </p>
              <p className="text-blue-700 mb-2">{news.summary}</p>
              <p className="text-gray-500 text-sm">Posted on: {new Date().toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
