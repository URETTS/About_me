import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Импортируем Link

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-xl font-bold">About_me</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">{t('nav.home')}</Link></li> {/* Заменил <a> на <Link> */}
          <li><Link to="/about" className="hover:underline">{t('nav.about')}</Link></li> {/* Заменил <a> на <Link> */}
          <li><Link to="/experience" className="hover:underline">{t('nav.experience')}</Link></li> {/* Заменил <a> на <Link> */}
          <li><Link to="/travels" className="hover:underline">{t('nav.travels')}</Link></li> {/* Заменил <a> на <Link> */}
        </ul>
        <button onClick={toggleLang} className="ml-4 text-sm underline">
          {i18n.language === 'ru' ? 'RU' : 'EN'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
