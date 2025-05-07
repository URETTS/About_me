import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="max-w-2xl mx-auto text-center px-4 py-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-neutral-900 mb-4"
        >
          {t('about.greeting')}
        </motion.h1>

        <motion.div className="flex flex-wrap justify-center gap-1 text-lg md:text-xl font-medium leading-relaxed text-neutral-800">
          {t('about.intro')
            .split(' ')
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.div>
      </motion.div>

      {/* Образование */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-1 text-gray-800 dark:text-gray-200">
          {t('about.educationTitle')}
        </h2>
        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
          <li>{t('about.eduGoIT')}</li>
          <li>{t('about.eduMaster')}</li>
          <li>{t('about.eduBachelor')}</li>
          <li>{t('about.eduLyceum')}</li>
        </ul>
      </motion.div>

      {/* Хобби */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-1 text-gray-800 dark:text-gray-200">
          {t('about.hobbiesTitle')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.hobbies')}
        </p>
      </motion.div>

      {/* Спорт */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-1 text-gray-800 dark:text-gray-200">
          {t('about.sportTitle')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.sport')}
        </p>
      </motion.div>

      {/* Цели */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-1 text-gray-800 dark:text-gray-200">
          {t('about.goalsTitle')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('about.goals')}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
