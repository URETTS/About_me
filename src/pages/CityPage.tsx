import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cityData from '../data/cities';
import { ArrowLeft } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

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
    return <NotFoundPage />;
  }

  const flagColors = city.flagColors || ['#000'];
  const borderGradient = `linear-gradient(to right, ${flagColors.join(', ')})`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{city.name[language]}</h1>
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
<div className="mt-8 flex justify-center">
<button
  onClick={() => navigate(`/travels/${countryId}`)}
  className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-gray-400 dark:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold transition-all duration-300 shadow-md hover:shadow-blue-400/50 hover:ring-2 hover:ring-blue-400 focus:outline-none active:scale-95"
>
  <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
  <span>{t('country.back')}</span>
  <span className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
</button>
</div>



    </div>
  );
};

export default CityPage;
