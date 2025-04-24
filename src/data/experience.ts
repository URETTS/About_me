export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  skills?: string;
  description?: string | Record<string, string>;
}

const experienceData: ExperienceItem[] = [
  {
    title: 'QA Engineer',
    company: 'Qappi (formerly AlphaGuilty)',
    period: 'февр. 2024 – нояб. 2024 (10 мес.)',
    location: 'Удалённо, Португалия',
    skills: 'CSS, Manual Testing, PostgreSQL, Figma, Jira, Postman API, HTML, SQL, Chrome DevTools, Documentation',
    description: {
      en: 'Performed manual testing of a crypto platform under development. Tested core functionality and reported issues to the development team.',
      ru: 'Ручное тестирование криптовалютной платформы, находящейся на стадии разработки. Тестировал основную функциональность и сообщал о проблемах команде разработчиков.',
    },
  },
  {
    title: 'Junior Project Manager',
    company: 'NDA',
    period: 'нояб. 2023 – янв. 2024 (3 мес.)',
    location: 'Удалённо, Киев',
    description: {
      en: `Created technical specifications, website structure, and content. 
      Also: 
      • Searching and purchasing domains; 
      • Purchasing supplies and replenishing them; 
      • Managing and monitoring spreadsheets; 
      • Creating profiles in anti-detect browsers; 
      • Paying for software and services; 
      • Collecting statistics; 
      • Landing page certification with Google and communication regarding any issues.`,
      ru: `Создание технических заданий, структура сайтов, тексты. 
      Также:
      • Поиск и покупка доменов;
      • Закупка расходников и пополнение;
      • Ведение таблиц учёта;
      • Профили в антидетект-браузерах;
      • Оплата софта и сервисов;
      • Сбор статистики;
      • Сертификация лендингов в Google и общение по вопросам.`,
    },
  },
  {
    title: 'QA Engineer',
    company: 'Traffic Squad',
    period: 'июнь 2023 – окт. 2023 (5 мес.)',
    location: 'Киев',
    description: {
      en: 'Testing applications for Google Play Market. Analyzing functionality, finding bugs, writing bug reports, interacting with developers.',
      ru: 'Тестирование приложений для Google Play Market. Анализ функциональности, поиск багов, составление баг-репортов, взаимодействие с разработчиками.',
    },
  },
  {
    title: 'Farmer',
    company: 'Freelance',
    period: 'апр. 2023 – окт. 2023 (7 мес.)',
    location: 'Киев',
    description: {
      en: 'Working with Google accounts, Google Play Console, spreadsheets, proxies, anti-detect browsers. Testing, farming, analyzing, finding weaknesses in accounts.',
      ru: 'Работа с Google аккаунтами, Google Play Console, таблицами, прокси, антидетект-браузерами. Тестирование, фарминг, анализ, слабые места в аккаунтах.',
    },
  },
  {
    title: 'Manager',
    company: 'Sushiya',
    period: 'нояб. 2021 – март 2023 (1 г. 5 мес.)',
    location: 'Киев',
    description: {
      en: '',
      ru: '',
    },
  },
  {
    title: 'Sales Expert',
    company: 'Allo',
    period: 'авг. 2019 – май 2021 (1 г. 10 мес.)',
    location: 'Киев',
    description: {
      en: '',
      ru: '',
    },
  },
];

export default experienceData;
