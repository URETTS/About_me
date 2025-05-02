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
          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
 My life
</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <ul className="hidden md:flex space-x-6 items-center">
  <li>
    <Link
      to="/"
      className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-sky-500 hover:underline transition"
    >
      {t('nav.home')}
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:underline transition"
    >
      {t('nav.about')}
    </Link>
  </li>
  <li>
    <Link
      to="/experience"
      className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500 hover:underline transition"
    >
      {t('nav.experience')}
    </Link>
  </li>
  <li>
    <Link
      to="/travels"
      className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-teal-500 hover:underline transition"
    >
      {t('nav.travels')}
    </Link>
  </li>
</ul>
          <li>
           <button
  onClick={toggleLang}
  className="text-sm border-2 border-transparent rounded-full px-3 py-2 bg-gradient-to-r from-teal-500 to-teal-500 text-white font-medium transform transition-all hover:scale-105 hover:shadow-lg hover:border-teal-300 hover:bg-transparent hover:text-teal-600 hover:underline"
  style={{ backgroundSize: '100% 100%' }}
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
