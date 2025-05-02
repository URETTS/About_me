import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cityData from '../data/cities';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const CityPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const { countryId, cityId } = useParams();
  const navigate = useNavigate();

  const country = cityData.find((c) => c.countryId === countryId);
  const city = country?.cities.find((c) => c.id === cityId);

  const [orientations, setOrientations] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!city) return;

    const promises = city.images.map(
      (src) =>
        new Promise<string>((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve(img.width > img.height ? 'horizontal' : 'vertical');
          };
          img.src = src;
        })
    );

    Promise.all(promises).then(setOrientations);
  }, [city]);

  if (!city) {
    return <div className="p-4">{t('city.notFound')}</div>; // добавь строку перевода
  }

  const flagColors = city.flagColors || ['#000'];
  const borderGradient = `linear-gradient(to right, ${flagColors.join(', ')})`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{city.name[language]}</h1>
        <button
          onClick={() => navigate(`/travels/${countryId}`)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← {t('city.back')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {city.images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden cursor-pointer"
            style={{
              border: '4px solid transparent',
              borderImage: borderGradient,
              borderImageSlice: 1,
              borderRadius: 'inherit',
            }}
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={src}
              alt={`${t('city.image')} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div
        className="prose prose-lg text-gray-900 dark:text-gray-700"
        dangerouslySetInnerHTML={{ __html: city.description[language] }}
      />

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={city.images.map((src) => ({ src }))}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </div>
  );
};

export default CityPage;
