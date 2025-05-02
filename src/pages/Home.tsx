import React, { useEffect, useState } from 'react';
import homePageData from '../components/homePageData';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const [backgroundImage, setBackgroundImage] = useState(homePageData.desktopImage);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; 
      setBackgroundImage(isMobile ? homePageData.mobileImage : homePageData.desktopImage);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white bg-black/40 px-6 py-4 rounded-xl shadow-lg animate-fadeIn">
          {homePageData.welcomeMessage[language]}
        </h1>
      </div>
    </section>
  );
};

export default Home;
