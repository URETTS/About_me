import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

interface LanguageDropdownProps {
  changeLang: (code: string) => void;
  isLangDisabled: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ changeLang, isLangDisabled }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const onSelect = (code: string) => {
    if (!isLangDisabled && code !== i18n.language) {
      changeLang(code);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => !isLangDisabled && setIsOpen((open) => !open)}
        disabled={isLangDisabled}
        className={`
          inline-flex items-center justify-center w-20 rounded-full border-2 border-teal-500 bg-gray-800 px-3 py-1.5
          text-xs font-semibold text-teal-500
          hover:bg-teal-500 hover:text-white
          transition
          focus:outline-none focus:ring-2 focus:ring-teal-400
          disabled:opacity-50 disabled:cursor-not-allowed
          select-none
        `}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="mr-2 text-lg">{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
        <svg
          className={`ml-2 h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-teal-500 bg-gray-800 shadow-lg z-50">
          <ul className="py-1">
            {languages.map(({ code, label, flag }) => (
              <li key={code}>
                <button
                  onClick={() => onSelect(code)}
                  disabled={isLangDisabled || i18n.language === code}
                  className={`
                    flex items-center w-full px-4 py-2 text-sm rounded-md
                    ${
                      i18n.language === code
                        ? 'bg-teal-600 text-white cursor-default'
                        : 'text-teal-300 hover:bg-teal-500 hover:text-white cursor-pointer'
                    }
                    transition-colors
                    disabled:opacity-50 disabled:cursor-not-allowed
                    select-none
                  `}
                  type="button"
                >
                  <span className="mr-2 text-lg">{flag}</span>
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
