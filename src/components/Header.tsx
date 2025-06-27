import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/Bykov_Yuriy.png';
import MobileMenu from './MobileMenu';
import LanguageDropdown from './LanguageDropdown';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDisabled, setIsLangDisabled] = useState(false);

  const changeLang = (lng: string) => {
    if (isLangDisabled || i18n.language === lng) return;
    setIsLangDisabled(true);
    i18n.changeLanguage(lng);
    setTimeout(() => {
      setIsLangDisabled(false);
    }, 3000); 
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4 text-white">
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
            { to: '/travels', label: t('nav.travels') },
            { to: '/support', label: t('nav.support') }].map(({ to, label }) => (
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
            <LanguageDropdown changeLang={changeLang} isLangDisabled={isLangDisabled} />
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
