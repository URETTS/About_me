import React from 'react';
import homePageData from '../components/homePageData'; 
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {
  const { i18n } = useTranslation(); 
  const language = i18n.language;  

  return (
    <section
      className="home-page"
      style={{
        backgroundImage: `url(${homePageData.backgroundImage})`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        width: '100%',  
        minHeight: '100vh',  
        display: 'flex',
        justifyContent: 'center',  
        alignItems: 'center',  
        textAlign: 'center',
        color: 'white',
        padding: '0',  
        margin: '0',  
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          background: 'rgba(0, 0, 0, 0.5)',  
          padding: '20px 40px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
          animation: 'fadeIn 1.5s ease-out',  
        }}
      >
        {homePageData.welcomeMessage[language]}
      </h1>
    </section>
  );
};

export default Home;
