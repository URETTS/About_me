import BabyMurchyk from '../../assets/Murchyk/BabyMurchyk.jpg';
import Murbaby2 from '../../assets/Murchyk/Murbaby2.jpg';
import Mursofa from '../../assets/Murchyk/Mursofa.jpg';
import mursleep from '../../assets/Murchyk/mursleep.jpg';
import murblanket from '../../assets/Murchyk/murblanket.jpg';
import murface from '../../assets/Murchyk/murface.jpg';
import gavaimur from '../../assets/Murchyk/gavaimur.jpg';
import mursleep2 from '../../assets/Murchyk/mursleep2.jpg';
import murlove from '../../assets/Murchyk/murlove.jpg';
import mur_flover from '../../assets/Murchyk/mur_flover.jpg';
// import  from '../../assets/Murchyk'

export interface MurchykFact {
  text: string;
}

export interface MurchykSlide {
  image: string;
  label: string;
}

export interface MurchykLocaleData {
  facts: MurchykFact[];
  lifeSlider: MurchykSlide[];
}

export interface MurchykData {
  en: MurchykLocaleData;
  ru: MurchykLocaleData;
}

const murchykData: MurchykData = {
  en: {
    facts: [
        { text: 'Does not like to be alone' },
        { text: 'Sleeps 12 hours a day' },
        { text: 'Hobby: sitting on the fridge' },
        { text: 'Very curious' },
        { text: 'Loves eating flowers' },
        { text: 'Murchyk was rescued from the street' },
    ],
    lifeSlider: [
      { image: BabyMurchyk, label: 'Little Murchyk' },
      { image: Murbaby2, label: 'First time at home' },
      { image: Mursofa, label: 'Hiding on the sofa' },
      { image: mursleep, label: 'Sweet dreams' },
      { image: murblanket, label: 'Wrapped in a blanket' },
      { image: murface, label: 'Not impressed' },
      { image: gavaimur, label: 'Hawaiian Murchyk' },
      { image: mursleep2, label: 'Curled up' },
      { image: murlove, label: '❤️❤️❤️' },
      { image: mur_flover, label: 'The Hunter' },
    ],
  },
  ru: {
    facts: [
      { text: 'Не любит быть один' },
      { text: 'Спит 12 часов в день' },
      { text: 'Хобби: сидеть на холодильнике' },
      { text: 'Очень любопытный' },
      { text: 'Любит кушать цветы' },
      { text: 'Мурчика забрали с улицы' },
    ],
    lifeSlider: [
      { image: BabyMurchyk, label: 'Маленький Мурчик' },
      { image: Murbaby2, label: 'Первый раз дома' },
      { image: Mursofa, label: 'Спрятался' },
      { image: mursleep, label: 'Сладенько спит' },
      { image: murblanket, label: 'В одеялке' },
      { image: murface, label: 'Недоволен' },
      { image: gavaimur, label: 'Гавайский Мурчик' },
      { image: mursleep2, label: 'Клубочек' },
      { image: murlove, label: '❤️❤️❤️' },
      { image: mur_flover, label: 'Охотник' },
    ],
  },
};

export default murchykData;
