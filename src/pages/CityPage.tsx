import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cityData from '../data/cities';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const CityPage = () => {
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
    return <div className="p-4">Город не найден</div>;
  }

  const flagColors = city.flagColors || ['#000']; // если флаг не задан, используем черный цвет по умолчанию

  // Преобразуем цвета в строку для градиента
  const borderGradient = `linear-gradient(to right, ${flagColors.join(', ')})`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{city.name}</h1>
        <button
          onClick={() => navigate(`/travels/${countryId}`)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← Назад
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
              alt={`Изображение ${index + 1}`}
              className="w-full h-full object-cover " 
            />
          </div>
        ))}
      </div>

      <div
        className="prose prose-lg text-gray-900 dark:text-gray-700"
        dangerouslySetInnerHTML={{ __html: city.description }}
      />

      {/* Lightbox */}
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

