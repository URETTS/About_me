import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import murchykData from '../data/murchykData';
import pawImg from '../../assets/Murchyk/paw.png';
import meowSound from '../../assets/Sound/732519__lukey1028__senior-cat-meow.mp3';
import murchykImg from '../../assets/Murchyk/murchyk.jpg';

const Murchyk = () => {
  const { i18n } = useTranslation();

  const langCode = i18n.language.split('-')[0];
const lang = ['ru', 'en', 'es'].includes(langCode) ? langCode as 'ru' | 'en' | 'es' : 'en';

  const data = murchykData[lang];

  // Лапка за курсором
  useEffect(() => {
    const createPaw = (x: number, y: number) => {
      const paw = document.createElement('img');
      paw.src = pawImg;
      paw.style.position = 'fixed';
      paw.style.left = `${x}px`;
      paw.style.top = `${y}px`;
      paw.style.width = '20px';
      paw.style.opacity = '1';
      paw.style.pointerEvents = 'none';
      paw.style.zIndex = '9999';
      paw.style.transition = 'opacity 1s ease-out';
      document.body.appendChild(paw);

      
       // Исчезновение следа
      setTimeout(() => {
        paw.style.opacity = '0';
      }, 300);
      setTimeout(() => {
        document.body.removeChild(paw);
      }, 1200);
    };

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.no-paw')) return;

      const dx = Math.abs(e.clientX - lastX);
      const dy = Math.abs(e.clientY - lastY);
      if (dx > 15 || dy > 15) {
        createPaw(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Мурлыканье
  const playPurr = () => {
    const audio = new Audio(meowSound);
    audio.play();
  };

  const createHeartBurst = (container: HTMLElement, x: number, y: number) => {
    const rect = container.getBoundingClientRect();
    const localX = x - rect.left;
    const localY = y - rect.top;

    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.innerText = '❤️';
      heart.style.position = 'absolute';
      heart.style.left = `${localX}px`;
      heart.style.top = `${localY}px`;
      heart.style.fontSize = `${Math.random() * 10 + 16}px`;
      heart.style.pointerEvents = 'none';
      heart.style.opacity = '1';
      heart.style.zIndex = '10';

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 60 + 30;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      heart.animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(1.5)`, opacity: 0 }
        ],
        {
          duration: 1000 + Math.random() * 500,
          easing: 'ease-out',
          fill: 'forwards'
        }
      );

      container.appendChild(heart);
      setTimeout(() => {
        container.removeChild(heart);
      }, 1500);
    }
  };

  return (
    <div className="relative">
      <section className="text-center py-10">
        <img
          src={murchykImg}
          alt="Murchyk"
          className="w-48 h-48 mx-auto rounded-full shadow-lg cursor-pointer transition hover:scale-105 no-paw"
          onMouseEnter={playPurr}
        />
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold text-orange-800 inline-flex items-center gap-2 justify-center">
            {lang === 'ru' ? 'Мурчик' : 'Murchyk'}
            <span className="animate-pulse text-red-500 text-3xl">❤️</span>
          </h1>
          <p className="text-xl text-gray-800 italic mt-2">
  {lang === 'ru'
    ? 'Пушистый комочек радости'
    : lang === 'es'
    ? 'Bola de alegría peluda'
    : 'Fluffy little bundle of joy'}
</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
        {lang === 'ru'
    ? 'Факты о Мурчике'
    : lang === 'es'
    ? 'Datos curiosos sobre Murchyk'
    : 'Fun Facts about Murchyk'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.facts.map((fact, i) => (
            <div
              key={i}
              className="relative bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] group"
            >
              <div className="absolute -top-3 -right-3 bg-orange-100 rounded-full p-2 shadow-md group-hover:rotate-12 transition">
                🐾
              </div>
              <p className="text-orange-900 text-lg leading-relaxed font-medium">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
        {lang === 'ru'
    ? 'Жизнь Мурчика'
    : lang === 'es'
    ? 'La vida de Murchyk'
    : "Murchyk’s Life"}
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="max-w-5xl mx-auto"
        >
          {data.lifeSlider.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg no-paw"
                onClick={(e) => {
                  const container = e.currentTarget as HTMLElement;
                  createHeartBurst(container, e.clientX, e.clientY);
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg">
                  {slide.label}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Murchyk;
