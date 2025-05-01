import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/Bykov_Yuriy.png';
import { Banknote } from 'lucide-react'; 
import SubFooter from './SubFooter';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Контактная информация */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold mb-4">{t('footer.contact')}</h2>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>📞 Phone UA: +380981120777</li>
        <li>📞 Phone ESP: +34650450256</li>
        <li>
          ✉️ Email: <a href="mailto:yurka.b2000@gmail.com" className="underline">yurka.b2000@gmail.com</a>
        </li>
      </ul>
    </div>

    {/* Соцсети */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold mb-4">{t('footer.socials')}</h2>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          💬 Telegram:{' '}
          <a href="https://t.me/pricolniy_chel" target="_blank" rel="noopener noreferrer" className="underline">
            @pricolniy_chel
          </a>
        </li>
        <li>
          📸 Instagram:{' '}
          <a href="https://www.instagram.com/pricolniy_chel?igsh=MWlvNWk1eWZvMDk0Ng==" target="_blank" rel="noopener noreferrer" className="underline">
            @pricolniy_chel
          </a>
        </li>
        <li>
          💻 GitHub:{' '}
          <a href="https://github.com/URETTS?tab=repositories" target="_blank" rel="noopener noreferrer" className="underline">
            URETTS
          </a>
        </li>
        <li>
          💼 LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/yuriy-bykov-a6661b271/" target="_blank" rel="noopener noreferrer" className="underline">
            Yuriy Bykov
          </a>
        </li>
      </ul>
    </div>

    {/* Поддержка */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold mb-4">{t('footer.support')}</h2>
      <ul className="space-y-2 text-sm sm:text-base">
        {lang === 'ru' ? (
          <>
            <li className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-green-400" />
              <span className="font-semibold">Моно банка:</span>
              <a
                href="https://send.monobank.ua/jar/3KP1UCG3Es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300 hover:text-blue-400 transition"
              >
                Отправить донат
              </a>
            </li>
            <li><span className="font-semibold">Монобанк:</span> 4441111057408696</li>
            <li><span className="font-semibold">ПриватБанк:</span> 5457082518678003</li>
           {/* <li><span className="font-semibold">Sence:</span> 5168 **** **** 5678</li> */}
            <li><span className="font-semibold">Binance ID (TRC20):</span> 777969674</li>
            <li><span className="font-semibold">Revolut:</span> @ispanets</li>
            <li><span className="font-semibold">Wise (IBAN):</span> DE** **** **** 1234</li>
          </>
        ) : (
          <>
            <li><span className="font-semibold">Revolut:</span> @ispanets</li>
            <li><span className="font-semibold">Wise (IBAN):</span> DE** **** **** 1234</li>
            <li><span className="font-semibold">Binance ID (TRC20):</span> 777969674</li>
            <li><span className="font-semibold">Santander (IBAN):</span> DE** **** **** 1234</li>
          </>
        )}
      </ul>
    </div>

    {/* Логотип и подпись */}
<div className="flex flex-col items-start text-left">
  <img
    src={logo}
    alt="Logo"
    className="w-40 sm:w-48 md:w-56 lg:w-64 mb-2"
  />
        </div>


      </div>
       <SubFooter /> 
</footer>

  );
};

export default Footer;
