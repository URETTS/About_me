import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Banknote,
  HeartHandshake,
  Coffee,
  CreditCard,
  Bitcoin,
  Globe,
} from 'lucide-react';

const Sponsor = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-white">

<h1 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center gap-3 text-center sm:text-left text-gray-900">
  <HeartHandshake className="w-8 h-8 text-emerald-500" />
  <span className="bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent">
    {t('support.title')}
  </span>
</h1>


<p className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-4 rounded-xl text-base sm:text-lg leading-relaxed mb-8 shadow-sm">
  {t('support.description')}
</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {lang === 'ru' ? (
          <>
                      <Card
                          icon={<CreditCard className="w-5 h-5 text-yellow-400" />}
              title="МоноБанк"
              lines={[
                  <> 
                       Банка:{' '}
                  <a
                    href="https://send.monobank.ua/jar/3KP1UCG3Es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline hover:text-blue-400"
                  >
                     Отправить донат
                  </a> 
                  </>,
                  
                'Карта: 4441 1110 5740 8696',
              ]}
            />
            <Card
              icon={<CreditCard className="w-5 h-5 text-yellow-400" />}
              title="ПриватБанк"
              lines={['Карта: 5457 0825 1867 8003']}
            />
            <Card
              icon={<Globe className="w-5 h-5 text-indigo-400" />}
              title="Revolut"
              lines={[
                <a
                  href="https://revolut.me/ispanets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400"
                >
                  @ispanets
                </a>,
              ]}
                      />
                      <Card
              icon={<Coffee className="w-5 h-5 text-green-400" />}
              title="Buy Me a Coffee"
              lines={[
                <a
                  href="https://buymeacoffee.com/ispanets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400"
                >
                @ispanets
                </a>,
              ]}
                      />
                      <Card
               icon={<Banknote className="w-5 h-5 text-green-400" />}
              title="PayPal"
              lines={['yurka.b2000@gmail.com']}
                      />
                      <Card
              icon={<Bitcoin className="w-5 h-5 text-orange-400" />}
              title="Binance (TRC20)"
              lines={['ID: 777969674']}
            />
          </>
        ) : (
          <>
            <Card
              icon={<Globe className="w-5 h-5 text-indigo-400" />}
              title="Revolut"
              lines={[
                <a
                  href="https://revolut.me/ispanets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400"
                >
                @ispanets
                </a>,
              ]}
                          />
                          <Card
              icon={<Coffee className="w-5 h-5 text-green-400" />}
              title="Buy Me a Coffee"
              lines={[
                <a
                  href="https://buymeacoffee.com/ispanets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400"
                >
                @ispanets
                </a>,
              ]}
            />
            <Card
              icon={<Bitcoin className="w-5 h-5 text-orange-400" />}
              title="Binance (TRC20)"
              lines={['ID: 777969674']}
                          />
                          <Card
              icon={<CreditCard className="w-5 h-5 text-yellow-400" />}
              title="PayPal"
              lines={['yurka.b2000@gmail.com']}
            />
            <Card
  icon={<CreditCard className="w-5 h-5 text-rose-400" />}
  title="Santander (IBAN + Bizum)"
  lines={[
    'IBAN: ES59 0049 5366 1525 1651 8374',
    'Bizum: +34650450256',
  ]}
                          />
                          <Card
              icon={<CreditCard className="w-5 h-5 text-yellow-400" />}
              title="Wise"
              lines={['In the process...']}
            />
                          
          </>
        )}
      </div>

      <div className="mt-12 text-center">
  <blockquote className="italic text-emerald-600 text-base sm:text-lg max-w-xl mx-auto">
    “{t('support.thanks')}”
  </blockquote>
  <div className="mt-2 text-sm text-gray-500">— {lang === 'ru' ? 'С благодарностью от меня ❤️' : 'With all my gratitude ❤️'}</div>
</div>
    </section>
  );
};

// Reusable Card Component
const Card = ({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: React.ReactNode[] }) => (
    <div className="bg-emerald-900/90 border border-emerald-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all 
                    w-full max-w-sm mx-auto sm:mx-0">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="font-semibold text-white text-lg">{title}</h3>
      </div>
      <div className="space-y-1 text-emerald-100 text-sm">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    </div>
  );
  

export default Sponsor;
