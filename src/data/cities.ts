import chisinau from '../../assets/images/Cities/chisinau/chisinau_prev.jpg';
import chione from '../../assets/images/Cities/chisinau/chione.jpg';
import chitwo from '../../assets/images/Cities/chisinau/chitwo.jpg';
import chithree from '../../assets/images/Cities/chisinau/chithree.jpg';
import chifour from '../../assets/images/Cities/chisinau/chifour.jpg';
import chifive from '../../assets/images/Cities/chisinau/chifive.jpg';

export interface City {
  id: string;
  name: string;
  description: string;
  images: string[];
}

export interface CountryWithCities {
  countryId: string;
  cities: City[];
}

const cityData: CountryWithCities[] = [
  {
    countryId: 'moldova',
    cities: [
      {
        id: 'chisinau',
        name: 'Кишинёв',
        description: `Кишинёв — столица и крупнейший город Молдовы, уютно раскинувшийся среди зелёных холмов. 
Город сочетает в себе советское прошлое и современные черты: просторные проспекты, парки, скверы и расслабленная атмосфера. 
Несмотря на простоту, Кишинёв по-своему тёплый и живой, особенно летом, когда улицы наполняются музыкой и светом.

Я приехал туда 30 августа поздно ночью и пробыл до 6 сентября. Одним из самых запоминающихся моментов стало то, 
как я впервые после комендантского часа смог поесть в McDonald’s — было около часа ночи, и это ощущалось как настоящее приключение. 
В такие моменты особенно остро чувствуешь вкус свободы и жизни.`,
        images: [chisinau,chithree,chifour,chitwo,chione,chifive
        ]
      }
    ]
  },
  {
    countryId: 'romania',
    cities: [
      {
        id: 'bucharest',
        name: 'Бухарест',
        description: '',
        images: [
        ]
      }
    ]
  },
  {
    countryId: 'croatia',
    cities: [
      {
        id: 'zagreb',
        name: 'Загреб',
        description: '',
        images: [
        ]
      },
      {
        id: 'pula',
        name: 'Пула',
        description: '',
        images: [
        ]
      },
      {
        id: 'plitvice',
        name: 'Плитвицкие озёра',
        description: '',
        images: [
        ]
      }
    ]
  },
  {
    countryId: 'slovenia',
    cities: [
      {
        id: 'ljubljana',
        name: 'Любляна',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'germany',
    cities: [
      {
        id: 'munich',
        name: 'Мюнхен',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'italy',
    cities: [
      {
        id: 'venice',
        name: 'Венеция',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'georgia',
    cities: [
      {
        id: 'tbilisi',
        name: 'Тбилиси',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'kutaisi',
        name: 'Кутаиси',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'gudauri',
        name: 'Гудаури',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'alazani',
        name: 'Алазанская долина',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'armenia',
    cities: [
      {
        id: 'yerevan',
        name: 'Ереван',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'spain',
    cities: [
      {
        id: 'malaga',
        name: 'Малага',
        description: '',
        images: [
         
        ]
      },
      {
        id: 'alicante',
        name: 'Аликанте',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'valencia',
        name: 'Валенсия',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'sevilla',
        name: 'Севилья',
        description: '',
        images: [
          
        ]
      }
    ]
  },
  {
    countryId: 'portugal',
    cities: [
      {
        id: 'sintra-cascais',
        name: 'Синтра и Кашкайш',
        description: '',
        images: [
          
        ]
      },
      {
        id: 'lisbon',
        name: 'Лиссабон',
        description: '',
        images: [
          
        ]
      }
    ]
  }
];

export default cityData;
