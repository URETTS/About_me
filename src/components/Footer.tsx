import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Bykov_Yuriy.png'; 

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Контактная информация */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t('footer.contact')}</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 Телефон: +380981120777</li>
            <li>
              💬 Telegram: <a href="https://t.me/pricolniy_chel" target="_blank" className="underline">@pricolniy_chel</a>
            </li>
            <li>
              📸 Instagram:{' '}
              <a
                href="https://www.instagram.com/pricolniy_chel?igsh=MWlvNWk1eWZvMDk0Ng=="
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pricolniy_chel
              </a>
            </li>
            <li>
              💻 GitHub:{' '}
              <a
                href="https://github.com/URETTS?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                URETTS
              </a>
            </li>
          </ul>
        </div>

        {/* Поддержка */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t('footer.support')}</h2>
          <ul className="space-y-2 text-sm">
            {lang === 'ru' ? (
              <>
                <li><span className="font-semibold">ПриватБанк:</span> 4149 **** **** 1234</li>
                <li><span className="font-semibold">Монобанк:</span> 5375 **** **** 5678</li>
                <li><span className="font-semibold">Binance ID(TRC20):</span> 777777</li>
              </>
            ) : (
              <>
                <li><span className="font-semibold">Revolut:</span> @username</li>
                <li><span className="font-semibold">Wise (IBAN):</span> DE** **** **** 1234</li>
                <li><span className="font-semibold">Binance ID(TRC20):</span> 777777</li>
              </>
            )}
          </ul>
        </div>

        {/* Логотип */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <img src={logo} alt="Logo" className="w-32 md:w-40 lg:w-48 mb-2" />
          <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Yuriy Bykov</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
