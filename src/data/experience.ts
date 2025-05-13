export interface ExperienceItem {
  title: string;
  company: string;
  period: string | Record<string, string>;
  location: string | Record<string, string>;
  skills?: string;
  description?: string | Record<string, string>;
}



const experienceData: ExperienceItem[] = [
  {
    title: 'Front-end developer',
    company: 'Self-employed',
    period: {
      ru: 'май 2025 -сейчас ',
      en: 'May 2025 - now',
    },
    location: {
      ru: 'Удалённо, Испания',
      en: 'Remote, Spain',
    },
    skills: 'HTML5, CSS3, JS, TS, React',
    description: {
      ru: 'Разрабатываю адаптивные и интерактивные веб-интерфейсы, работаю с современными технологиями фронтенда и создаю проекты с нуля под индивидуальные запросы.',
      en: 'Build responsive, interactive web interfaces using modern front-end technologies. Develop custom projects from scratch tailored to client needs.',
    },
  },
  {
    title: 'QA Engineer',
    company: 'Qappi (formerly AlphaGuilty)',
    period: {
      ru: 'февр. 2024 - нояб. 2024 (10 мес.)',
      en: 'Feb 2024 - Nov 2024 (10 months)',
    },
    location: {
      ru: 'Удалённо, Португалия',
      en: 'Remote, Portugal',
    },
    skills: 'CSS, Manual Testing, PostgreSQL, Figma, Jira, Postman API, HTML, SQL, Chrome DevTools, Documentation',
    description: {
      ru: 'Ручное тестирование криптовалютной платформы, находящейся на стадии разработки. Тестировал основную функциональность и сообщал о проблемах команде разработчиков.',
      en: 'Performed manual testing of a crypto platform under development. Tested core functionality and reported issues to the development team.',
    },
  },
  {
    title: 'Junior Project Manager',
    company: 'NDA',
    period: {
      ru: 'нояб. 2023 - янв. 2024 (3 мес.)',
      en: 'Nov 2023 - Jan 2024 (3 months)',
    },
    location: {
      ru: 'Удалённо, Киев',
      en: 'Remote, Kyiv',
    },
    description: {
      ru: `Создание технических заданий, структура сайтов, тексты. 
Также:
 поиск и покупка доменов,
 закупка расходников и пополнение,
 ведение таблиц учёта,
 профили в антидетект-браузерах,
 оплата софта и сервисов,
 сбор статистики,
 сертификация лендингов в Google и общение по вопросам.`,
      en: `Created technical specifications, website structure, and content. 
Also: 
 searching and purchasing domains,
 purchasing supplies and replenishing them,
 managing and monitoring spreadsheets,
 creating profiles in anti-detect browsers, 
 paying for software and services, 
 collecting statistics, 
 landing page certification with Google and communication regarding any issues.`,
    },
  },
  {
    title: 'QA Engineer',
    company: 'Traffic Squad',
    period: {
      ru: 'июнь 2023 - окт. 2023 (5 мес.)',
      en: 'Jun 2023 - Oct 2023 (5 months)',
    },
    location: {
      ru: 'Киев',
      en: 'Kyiv',
    },
    description: {
      ru: 'Тестирование приложений для Google Play Market. Анализ функциональности, поиск багов, составление баг-репортов, взаимодействие с разработчиками.',
      en: 'Testing applications for Google Play Market. Analyzing functionality, finding bugs, writing bug reports, interacting with developers.',
    },
  },
  {
    title: 'Google Play Account Setup Specialist',
    company: 'Traffic Squad',
    period: {
      ru: 'апр. 2023 - окт. 2023 (7 мес.)',
      en: 'Apr 2023 - Oct 2023 (7 months)',
    },
    location: {
      ru: 'Киев',
      en: 'Kyiv',
    },
    description: {
      ru: 'Работа с Google аккаунтами, Google Play Console, таблицами, прокси, антидетект-браузерами. Тестирование, фарминг, анализ, слабые места в аккаунтах.',
      en: 'Working with Google accounts, Google Play Console, spreadsheets, proxies, anti-detect browsers. Testing, farming, analyzing, finding weaknesses in accounts.',
    },
  },
  {
    title: 'Manager',
    company: 'Sushiya',
    period: {
      ru: 'нояб. 2021 - март 2023 (1 г. 5 мес.)',
      en: 'Nov 2021 - Mar 2023 (1 year 5 months)',
    },
    location: {
      ru: 'Киев',
      en: 'Kyiv',
    },
    description: {
      ru: 'Управлял ежедневными процессами и небольшой командой.',
      en: 'Managed daily operations and led a small team.',
    },
  },
  {
    title: 'Sales Expert',
    company: 'Allo',
    period: {
      ru: 'авг. 2019 - май 2021 (1 г. 10 мес.)',
      en: 'Aug 2019 - May 2021 (1 year 10 months)',
    },
    location: {
      ru: 'Киев',
      en: 'Kyiv',
    },
    description: {
      ru: 'Консультировал клиентов и увеличивал продажи.',
      en: 'Provided customer consultations and boosted sales.',
    },
  },
];

export default experienceData;
