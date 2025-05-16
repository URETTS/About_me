import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import catImage from '../../assets/404/okak-cat-enhanced.jpg';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black m-0 p-0 overflow-hidden flex flex-col md:flex-row min-h-[100vh]">
      {/* Левая часть с текстом */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center text-white">
          СТРАНИЦА НЕ НAЙДЕНА
        </h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Пока не знаем в чём проблема, но мы скоро это поправим!
        </p>
        <p className="text-[120px] font-bold text-gray-700 mb-8 select-none">404</p>
        <button
          onClick={() => navigate('/')}
          className="bg-white text-black rounded-xl px-6 py-2 hover:bg-gray-200 transition"
        >
          На главную
        </button>
      </motion.div>

      {/* Правая часть с картинкой */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="w-full md:w-1/2 flex justify-center items-center px-8 py-12"
      >
        <img
          src={catImage}
          alt="Мем кот"
          className="max-w-full object-contain"
          style={{ maxHeight: 'auto' }}
        />
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
