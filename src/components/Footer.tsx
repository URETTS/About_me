import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <li>💻 GitHub: <a href="https://github.com/URETTS?tab=repositories" target="_blank" rel="noopener noreferrer" className="underline">URETTS</a></li>

</ul>

        </div>

        {/* Поддержка */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t('footer.support')}</h2>
          <ul className="space-y-2 text-sm">
            {lang === 'ru' ? (
              <>
                <li>
                  <span className="font-semibold">ПриватБанк:</span> 4149 **** **** 1234
                </li>
                <li>
                  <span className="font-semibold">Монобанк:</span> 5375 **** **** 5678
                </li>
                <li>
                  <span className="font-semibold">Binance:</span> username
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="font-semibold">Revolut:</span> @username
                </li>
                <li>
                  <span className="font-semibold">Wise (IBAN):</span> DE** **** **** 1234
                </li>
                <li>
                  <span className="font-semibold">Binance:</span> username
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} Yuriy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
