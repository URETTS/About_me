import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import countries from '../data/countries';
import { flags } from '../data/flags';

const TravelPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (countryId: string) => {
    const flag = flags[countryId as keyof typeof flags];
    if (flag) {
      const id = setTimeout(() => {
        setBackgroundImage(flag);
      }, 700); // задержка перед показом
      setTimerId(id);
    }
  };

  const handleMouseLeave = () => {
    if (timerId) clearTimeout(timerId);
    setTimerId(null);
    setBackgroundImage(null);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Плавно проявляющийся флаг */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none z-0 ${
          backgroundImage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Контент поверх флага */}
      <div className="relative z-10 backdrop-blur-sm  min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">{t('travels.title')}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/travels/${country.id}`}
                onMouseEnter={() => handleMouseEnter(country.id)}
                onMouseLeave={handleMouseLeave}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.05]"
              >
                <img
                  src={country.image}
                  alt={country.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 bg-white dark:bg-gray-800">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {country.name[language]}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
