import React, { useEffect, useState } from 'react';
import homePageData from '../components/HomeBg';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const fullText = homePageData.welcomeMessage[language] || '';

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    isMobile ? homePageData.mobileImages[0] : homePageData.desktopImages[0]
  );
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const images = isMobile ? homePageData.mobileImages : homePageData.desktopImages;
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const images = isMobile ? homePageData.mobileImages : homePageData.desktopImages;
    setBackgroundImage(images[imageIndex]);
  }, [imageIndex, isMobile]);

  useEffect(() => {
    if (!fullText) return;

    setTypedText('');
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 70);
    }, 200); // Лёгкая задержка на инициализацию (особенно для WebView)

    return () => clearTimeout(timeout);
  }, [fullText]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white px-4 py-4 bg-black/50 rounded-xl shadow-lg max-w-[90%] sm:max-w-[80%]">
          {typedText}
          <span className="cursor-blink" />
        </h1>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center z-20 px-4">
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl bg-black/50 rounded-lg px-4 py-2 shadow-md max-w-[90%] text-center">
          {homePageData.birthdayNote[language] || ''}
        </p>
      </div>
    </section>
  );
};

export default Home;
