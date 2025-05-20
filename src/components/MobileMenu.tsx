import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react'; 

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

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

            <button
              onClick={() => {
                toggleLang();
                closeMenu();
              }}
              className="text-sm font-medium px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
            >
              {i18n.language === 'ru' ? 'EN' : 'RU'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
