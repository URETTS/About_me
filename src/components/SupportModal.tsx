import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SupportModalProps {
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
    className="
      fixed top-[80px] right-6 z-40
      w-96
      bg-gray-800/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl px-6 py-4 text-white
      hidden sm:block
    "
  >
  {/* Close Button */}
  <button
    onClick={onClose}
    className="absolute top-2 right-3 text-white/70 hover:text-teal-400 transition-colors"
    aria-label="Close"
  >
    <X size={24} />
  </button>

  {/* Title */}
  <h2 className="text-xl font-bold mb-2 text-teal-400">
    {t('support.title') || 'Support the project'}
  </h2>

  {/* Message */}
  <p className="text-sm text-white/80">
    {t('support.message') ||
      'If you like what I’m doing, consider supporting this project.'}
  </p>

  {/* Button */}
  <a
    href="/support"
    className="mt-4 inline-block w-full text-white text-center py-2 rounded-md font-semibold shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-700 ease-in-out hover:shadow-lg hover:scale-[1.02]"
  >
    {t('support.button') || 'Support'}
  </a>
</motion.div>

  );
};

export default SupportModal;
