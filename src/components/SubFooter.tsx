import { useTranslation } from 'react-i18next';

const SubFooter = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  let text;
  if (lang === 'ru') {
    text = 'Все фотографии на сайте сделаны мной. Не используйте их без разрешения.';
  } else if (lang === 'es') {
    text = 'Todas las fotos en este sitio fueron tomadas por mí. Por favor, no las uses sin permiso.';
  } else {
    text = 'All photos on this site were taken by me. Please do not use them without permission.';
  }

  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-2 text-center sm:text-left">
        <span className="text-red-500 font-medium">{text}</span>
        <span>© {new Date().getFullYear()} Yuriy Bykov</span>
      </div>
    </div>
  );
};

export default SubFooter;


