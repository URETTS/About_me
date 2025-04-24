export interface HomePageData {
  backgroundImage: string;
  welcomeMessage: Record<string, string>;
}

const homePageData: HomePageData = {
  backgroundImage: '../../assets/images/hero/hero.jpg',
  welcomeMessage: {
    en: 'Welcome to my personal website!',
    ru: 'Добро пожаловать на мой личный сайт!',
  },
};

export default homePageData;
