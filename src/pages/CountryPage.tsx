import { useParams } from 'react-router-dom';
import countries from '../data/countries';

const CountryPage = () => {
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);

  if (!country) {
    return <div className="p-4">Страна не найдена</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      <img src={country.image} alt={country.name} className="w-full rounded-xl mb-4" />
      <p className="text-gray-700 dark:text-gray-300">Здесь будет история и фотографии из {country.name}...</p>
    </div>
  );
};

export default CountryPage;
