import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const COOKIE_KEY = 'cookie-consent';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex items-start sm:items-center space-x-2 text-sm flex-1 text-center sm:text-left">
            <Cookie className="w-5 h-5 text-yellow-500 mt-0.5 sm:mt-0" />
            <p>{t('cookie.text')}</p>
          </div>
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap"
          >
            {t('cookie.button')}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
