import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Bykov_Yuriy.png'; 


const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">About me</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">{t('nav.home')}</Link></li>
          <li><Link to="/about" className="hover:underline">{t('nav.about')}</Link></li>
          <li><Link to="/experience" className="hover:underline">{t('nav.experience')}</Link></li>
          <li><Link to="/travels" className="hover:underline">{t('nav.travels')}</Link></li>
        </ul>
        <button onClick={toggleLang} className="ml-4 text-sm underline">
          {i18n.language === 'ru' ? 'RU' : 'EN'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
