import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
      {/* Вступление */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Привет 👋 Я Юрий</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Мне нравится создавать уют в деталях — будь то сайт, комната или разговор.
        </p>
      </motion.div>

      {/* Образование */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">🎓 Образование</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Я окончил университет с уклоном в [твою сферу/специальность], где впервые влюбился в идеи, код и креатив.
        </p>
      </motion.div>

      {/* Увлечения */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">🎨 Увлечения</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Люблю фотографировать и ловить моменты. Вдохновляюсь архитектурой, музыкой и простыми вещами — чашкой кофе, закатом, интересным диалогом.
        </p>
      </motion.div>

      {/* Спорт */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">⚽ Спорт</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Спорт — часть моей жизни. Он помогает поддерживать ритм и баланс. Иногда это бег, иногда — пешие прогулки на 20 км.
        </p>
      </motion.div>

      {/* Цели и желания */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">🌱 Цели и желания</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Хочу создавать проекты, которые приносят пользу и вдохновение. Учиться новому каждый день и оставаться честным перед собой. Мечтаю увидеть северное сияние, научиться танцевать аргентинское танго и однажды построить дом у озера.
        </p>
      </motion.div>

      {/* Завершение */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center text-gray-600 dark:text-gray-400"
      >
        <p>
          Здесь ты найдешь мои <a href="/travels" className="underline hover:text-blue-500">путешествия</a> и <a href="/experience" className="underline hover:text-blue-500">опыт</a> — они говорят за меня лучше любых слов.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
