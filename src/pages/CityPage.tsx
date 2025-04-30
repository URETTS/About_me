import { useParams } from 'react-router-dom';
import cityData from '../data/cities';

const CityPage = () => {
  const { countryId, cityId } = useParams();
  const country = cityData.find((c) => c.countryId === countryId);
  const city = country?.cities.find((c) => c.id === cityId);

  if (!city) {
    return <div className="p-4">Город не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{city.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {city.images.map((img, index) => (
          <img key={index} src={img} alt={`${city.name} ${index + 1}`} className="rounded-xl" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-700">{city.description}</p>
    </div>
  );
};

export default CityPage;
