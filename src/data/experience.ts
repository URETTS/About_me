export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  skills?: string;
  description?: string | Record<string, string>;
}

const experienceData: ExperienceItem[] =[
  {
    title: 'QA Engineer',
    company: 'Qappi (formerly AlphaGuilty)',
    period: 'февр. 2024 – нояб. 2024 (10 мес.)',
    location: 'Удалённо, Португалия',
    skills: 'CSS, Manual Testing, PostgreSQL, Figma, Jira, Postman API, HTML, SQL, Chrome DevTools, Documentation',
  },
  {
    title: 'Junior Project Manager',
    company: 'NDA',
    period: 'нояб. 2023 – янв. 2024 (3 мес.)',
    location: 'Удалённо, Киев',
    description: `Создание технических заданий, структура сайтов, тексты.
Также:
• Поиск и покупка доменов;
• Закупка расходников и пополнение;
• Ведение таблиц учёта;
• Профили в антидетект-браузерах;
• Оплата софта и сервисов;
• Сбор статистики;
• Сертификация лендингов в Google и общение по вопросам.`,
  },
  {
    title: 'QA Engineer',
    company: 'Traffic Squad',
    period: 'июнь 2023 – окт. 2023 (5 мес.)',
    location: 'Киев',
    description:
      'Тестирование приложений для Google Play Market. Анализ функциональности, поиск багов, составление баг-репортов, взаимодействие с разработчиками.',
  },
  {
    title: 'Farmer',
    company: 'Freelance',
    period: 'апр. 2023 – окт. 2023 (7 мес.)',
    location: 'Киев',
    description:
      'Работа с Google аккаунтами, Google Play Console, таблицами, прокси, антидетект-браузерами. Тестирование, фарминг, анализ, слабые места в аккаунтах.',
  },
  {
    title: 'Manager',
    company: 'Sushiya',
    period: 'нояб. 2021 – март 2023 (1 г. 5 мес.)',
    location: 'Киев',
  },
  {
    title: 'Sales Expert',
    company: 'Allo',
    period: 'авг. 2019 – май 2021 (1 г. 10 мес.)',
    location: 'Киев',
  },
];

export default experienceData;