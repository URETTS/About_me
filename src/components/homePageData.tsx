import hero1 from '../../assets/images/hero/hero.jpg';
import hero2 from '../../assets/images/hero/hero2.jpg';


import heroMob1 from '../../assets/images/hero/hero_mob.jpg';
import heroMob2 from '../../assets/images/hero/hero_mob2.jpg';


export interface HomePageData {
  desktopImages: string[];
  mobileImages: string[];
  welcomeMessage: Record<string, string>;
  birthdayNote: Record<string, string>;
}

const homePageData: HomePageData = {
  desktopImages: [hero1, hero2],
  mobileImages: [heroMob1, heroMob2],
  welcomeMessage: {
    en: 'Welcome to my personal website!',
    ru: 'Добро пожаловать на мой личный сайт!',
  },
  birthdayNote: {
    en: 'This website is dedicated to my 25th birthday',
    ru: 'Этот сайт посвящён моему 25-летию',
  }
};

export default homePageData;

