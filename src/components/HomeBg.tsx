import hero1 from '../../assets/images/hero/hero.jpg';
import hero2 from '../../assets/images/hero/hero2.jpg';
import hero3 from '../../assets/images/hero/hero3.jpg';
import hero4 from '../../assets/images/hero/hero4.jpg';

import heroMob1 from '../../assets/images/hero/hero_mob.jpg';
import heroMob2 from '../../assets/images/hero/hero_mob2.jpg';
import hero_mob3 from '../../assets/images/hero/hero_mob3.jpg';

export interface HomePageData {
  desktopImages: string[];
  mobileImages: string[];
  welcomeMessage: Record<string, string>;
  birthdayNote: Record<string, string>;
}

const homePageData: HomePageData = {
  desktopImages: [hero1, hero2,hero3,hero4],
  mobileImages: [heroMob1, heroMob2,hero_mob3],
  welcomeMessage: {
    en: 'Welcome to my personal website!',
    ru: 'Добро пожаловать на мой личный сайт!',
    es: '¡Bienvenido a mi sitio personal!',
  },
  birthdayNote: {
    en: 'This website is dedicated to my 25th birthday',
    ru: 'Этот сайт посвящён моему 25-летию',
    es: 'Este sitio web está dedicado a mi 25º cumpleaños',
  }
};

export default homePageData;

