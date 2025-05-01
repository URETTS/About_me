import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/Bykov_Yuriy.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">About me</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className="hover:underline">{t('nav.home')}</Link></li>
          <li><Link to="/about" className="hover:underline">{t('nav.about')}</Link></li>
          <li><Link to="/experience" className="hover:underline">{t('nav.experience')}</Link></li>
          <li><Link to="/travels" className="hover:underline">{t('nav.travels')}</Link></li>
          <li>
            <button
              onClick={toggleLang}
              className="text-sm underline border border-white rounded px-2 py-1 hover:bg-white hover:text-gray-800 transition"
            >
              {i18n.language === 'ru' ? 'RU' : 'EN'}
            </button>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Модальное меню */}
      <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
