import React from 'react';
import homePageData from '../components/homePageData'; 

const Home: React.FC = () => {
  const language = 'ru'; 
  
  return (
    <section
  style={{
    backgroundImage: `url(${homePageData.backgroundImage})`,
    backgroundSize: 'cover',  // Изображение растягивается по всей секции
    backgroundPosition: 'center',  // Центрируем изображение
    width: '100%',  // Занимает всю доступную ширину
    minHeight: '100vh',  // Минимальная высота секции = 100% от высоты экрана
    display: 'flex',
    justifyContent: 'center',  // Центрируем по горизонтали
    alignItems: 'center',  // Центрируем по вертикали
    textAlign: 'center',
    color: 'white',
    padding: '0 20px',  // Оставляем отступы для мобильных
  }}
>
  <h1
    style={{
      fontSize: '3rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      background: 'rgba(0, 0, 0, 0.5)',  // Полупрозрачный фон для текста
      padding: '20px 40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
      animation: 'fadeIn 1.5s ease-out',  // Плавное появление текста
    }}
  >
    {homePageData.welcomeMessage[language]}
  </h1>
</section>

  );
};

export default Home;