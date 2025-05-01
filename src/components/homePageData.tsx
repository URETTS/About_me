import hero from '../../assets/images/hero/hero.jpg'
import hero_mob from '../../assets/images/hero/hero_mob.jpg'
export interface HomePageData {
   desktopImage: string;
   mobileImage: string;
  welcomeMessage: Record<string, string>;
}

const homePageData: HomePageData = {
  desktopImage: hero,
  mobileImage: hero_mob,
  welcomeMessage: {
    en: 'Welcome to my personal website!',
    ru: 'Добро пожаловать на мой личный сайт!',
  },
};

export default homePageData;
