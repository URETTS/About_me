import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';

const languages = [
  { code: 'ru', label: 'Русский', iso: 'RU' },
  { code: 'en', label: 'English', iso: 'GB' },
  { code: 'es', label: 'Español', iso: 'ES' },
];

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLangDisabled, setIsLangDisabled] = useState(false);

  // Закрытие дропдауна при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLang = (code: string) => {
    if (isLangDisabled || code === i18n.language) return;
    setIsLangDisabled(true);
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    closeMenu();          
    setTimeout(() => {
      setIsLangDisabled(false);
    }, 3000);
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/travels', label: t('nav.travels') },
    { to: '/support', label: t('nav.support') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={closeMenu}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-11/12 max-w-sm mx-auto p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>

            {navItems.map(({ to, label }) =>
              location.pathname === to ? (
                <span
                  key={to}
                  className="text-lg font-semibold text-blue-500 cursor-default"
                >
                  {label}
                </span>
              ) : (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-blue-500 transition"
                >
                  {label}
                </Link>
              )
            )}

            {/* Языковой дропдаун */}
            <div className="relative w-full" ref={dropdownRef}>
              <button
                onClick={() => !isLangDisabled && setIsLangOpen((open) => !open)}
                disabled={isLangDisabled}
                className={`
                  w-full flex items-center justify-center rounded-full border-2 border-blue-500 bg-gray-800 px-4 py-2
                  text-sm font-semibold text-blue-500
                  hover:bg-blue-500 hover:text-white
                  transition
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  disabled:opacity-50 disabled:cursor-not-allowed
                  select-none
                `}
                type="button"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
              >
                <span className="mr-2">
  <Flag code={currentLang.iso} style={{ width: 24, height: 16, borderRadius: 2 }} />
</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <svg
                  className={`ml-2 h-6 w-6 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-full rounded-md border border-blue-500 bg-gray-800 shadow-lg z-50">
                  <ul className="py-1">
                  {languages.map(({ code, label, iso }) => (
  <li key={code}>
    <button
      onClick={() => changeLang(code)}
      disabled={isLangDisabled || i18n.language === code}
      className={`
        flex items-center w-full px-4 py-2 text-sm rounded-md
        ${
          i18n.language === code
            ? 'bg-blue-600 text-white cursor-default'
            : 'text-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer'
        }
        transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed
        select-none
      `}
      type="button"
    >
      <span className="mr-2">
        <Flag code={iso} style={{ width: 24, height: 16, borderRadius: 2 }} />
      </span>
      <span>{label}</span>
    </button>
  </li>
))}

                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
