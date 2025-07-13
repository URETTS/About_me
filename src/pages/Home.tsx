import React, { useEffect, useState } from 'react';
import homePageData from '../components/HomeBg';
import { useTranslation } from 'react-i18next';
import SupportModal from '../components/SupportModal';
import { AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const { i18n } = useTranslation();

  const langCode = i18n.language.split('-')[0];
  const language = ['ru', 'en', 'es'].includes(langCode) ? (langCode as 'ru' | 'en' | 'es') : 'en';
  
  const fullText = homePageData.welcomeMessage[language] || '';

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imageIndex, setImageIndex] = useState(0);
  const [currentBg, setCurrentBg] = useState(
    isMobile ? homePageData.mobileImages[0] : homePageData.desktopImages[0]
  );
  const [nextBg, setNextBg] = useState('');
  const [isFading, setIsFading] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const images = isMobile ? homePageData.mobileImages : homePageData.desktopImages;
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const images = isMobile ? homePageData.mobileImages : homePageData.desktopImages;
    const newBg = images[imageIndex];

    if (newBg !== currentBg) {
      setNextBg(newBg);
      setIsFading(true);

      const timeout = setTimeout(() => {
        setCurrentBg(newBg);
        setIsFading(false);
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [imageIndex, isMobile]);

  useEffect(() => {
    if (!fullText) return;

    setTypedText('');
    let index = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          if (intervalId) clearInterval(intervalId);
        }
      }, 70);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fullText, i18n.language]);

  const [showSupport, setShowSupport] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowSupport(true);
  }, 2700); 
  return () => clearTimeout(timer);
}, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* current background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${currentBg})`, zIndex: 0 }}
      />

      {/* next background fading in */}
      {isFading && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fadeIn"
          style={{ backgroundImage: `url(${nextBg})`, zIndex: 10 }}
        />
      )}

      {/* затемнение */}
      <div className="absolute inset-0 bg-black/60 z-20" />

      {/* текст */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white px-4 py-4 bg-black/50 rounded-xl shadow-lg max-w-[90%] sm:max-w-[80%]">
          {typedText}
          <span className="cursor-blink" />
        </h1>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center z-30 px-4">
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl bg-black/50 rounded-lg px-4 py-2 shadow-md max-w-[90%] text-center">
          {homePageData.birthdayNote[language] || ''}
        </p>
      </div>
      
      <AnimatePresence>
  {showSupport && <SupportModal onClose={() => setShowSupport(false)} />}
</AnimatePresence>

    </section>
  );
};

export default Home;
