import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-700 text-white px-6 overflow-hidden"
        >
          <div className="flex flex-col py-4 space-y-3">
            <Link to="/" onClick={closeMenu} className="hover:underline">{t('nav.home')}</Link>
            <Link to="/about" onClick={closeMenu} className="hover:underline">{t('nav.about')}</Link>
            <Link to="/experience" onClick={closeMenu} className="hover:underline">{t('nav.experience')}</Link>
            <Link to="/travels" onClick={closeMenu} className="hover:underline">{t('nav.travels')}</Link>

            <button
              onClick={() => {
                toggleLang();
                closeMenu();
              }}
              className="mt-4 text-sm underline border border-white rounded px-2 py-1 w-fit self-start hover:bg-white hover:text-gray-800 transition"
            >
              {i18n.language === 'ru' ? 'RU' : 'EN'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
