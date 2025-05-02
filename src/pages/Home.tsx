import React, { useEffect, useState } from 'react';
import homePageData from '../components/homePageData';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const fullText = homePageData.welcomeMessage[language];

  const [backgroundImage, setBackgroundImage] = useState(homePageData.desktopImage);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setBackgroundImage(isMobile ? homePageData.mobileImage : homePageData.desktopImage);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTypedText('');

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white px-4 py-4 bg-black/50 rounded-xl shadow-lg max-w-[90%] sm:max-w-[80%]">
          {typedText}
          <span className="cursor-blink" />
        </h1>
      </div>
    </section>
  );
};

export default Home;
