import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import countries from '../data/countries';
import cityData from '../data/cities';

const CountryPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const { countryId } = useParams();
  const navigate = useNavigate();
  const country = countries.find((c) => c.id === countryId);
  const countryCities = cityData.find((c) => c.countryId === countryId)?.cities || [];

  if (!country) {
    return <div className="p-4">{t('country.notFound')}</div>; 
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{country.name[language]}</h1>
      <img
        src={country.image}
        alt={country.name[language]}
        className="w-full rounded-xl mb-6"
      />
      <div
        className="prose prose-lg text-gray-700 dark:text-gray-700 mb-8"
        dangerouslySetInnerHTML={{ __html: country.description[language] }}
      />

      {countryCities.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t('country.cities')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {countryCities.map((city) => (
              <Link
                key={city.id}
                to={`/travels/${countryId}/${city.id}`}
                className="block rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition"
              >
                <img
                  src={city.images[0]}
                  alt={city.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-white">
                    {city.name[language]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/travels')}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← {t('country.back')}
        </button>
      </div>
    </div>
  );
};

export default CountryPage;
