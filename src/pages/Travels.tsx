import { Link } from 'react-router-dom';
import countries from '../data/countries';

const TravelPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Путешествия</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Link
            key={country.id}
            to={`/travels/${country.id}`}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {country.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TravelPage;
