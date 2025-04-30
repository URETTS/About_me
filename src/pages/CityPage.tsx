import { useParams, useNavigate } from 'react-router-dom';
import cityData from '../data/cities';

const CityPage = () => {
  const { countryId, cityId } = useParams();
  const navigate = useNavigate();

  const country = cityData.find((c) => c.countryId === countryId);
  const city = country?.cities.find((c) => c.id === cityId);

  if (!city) {
    return <div className="p-4">Город не найден</div>;
  }

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
    {city.images.map((img, index) => (
      <img key={index} src={img} alt={`${city.name} ${index + 1}`} className="rounded-xl" />
    ))}
  </div>

  <p className="text-gray-900 dark:text-gray-700">{city.description}</p>
</div>

  );
};

export default CityPage;
