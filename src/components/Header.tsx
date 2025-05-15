import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/Bykov_Yuriy.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDisabled, setIsLangDisabled] = useState(false);

  

  const toggleLang = () => {
    if (isLangDisabled) return;
    setIsLangDisabled(true);
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);

    setTimeout(() => {
      setIsLangDisabled(false); 
    }, 5000);
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
        <ul className="hidden lg:flex space-x-6 items-center">
          {[{ to: '/', label: t('nav.home') },
            { to: '/about', label: t('nav.about') },
            { to: '/experience', label: t('nav.experience') },
            { to: '/travels', label: t('nav.travels') }].map(({ to, label }) => (
              <li key={to}>
                {location.pathname === to ? (
                  <span className="text-xl sm:text-2xl font-semibold text-teal-400 cursor-default">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-xl sm:text-2xl font-semibold text-white gradient-underline transition-all duration-300 hover:text-teal-400"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}

          <li>
            <button
              onClick={toggleLang}
              disabled={isLangDisabled}
              className="text-sm border-2 border-teal-500 rounded-full px-3 py-2 text-teal-500 font-medium transform transition-all hover:scale-105 hover:shadow-lg hover:bg-teal-500 hover:text-white"
            >
              {i18n.language === 'ru' ? 'EN' : 'RU'}
            </button>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden focus:outline-none"
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