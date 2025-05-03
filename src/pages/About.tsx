import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">{t('about.greeting')}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t('about.intro')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">{t('about.educationTitle')}</h2>
        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
          <li>{t('about.eduGoIT')}</li>
          <li>{t('about.eduMaster')}</li>
          <li>{t('about.eduBachelor')}</li>
          <li>{t('about.eduLyceum')}</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">{t('about.hobbiesTitle')}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.hobbies')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">{t('about.sportTitle')}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.sport')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">{t('about.goalsTitle')}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.goals')}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
