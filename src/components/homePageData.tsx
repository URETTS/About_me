import hero from '../../assets/images/hero/hero.jpg'
export interface HomePageData {
  backgroundImage: string;
  welcomeMessage: Record<string, string>;
}

const homePageData: HomePageData = {
  backgroundImage: hero,
  welcomeMessage: {
    en: 'Welcome to my personal website!',
    ru: 'Добро пожаловать на мой личный сайт!',
  },
};

export default homePageData;
