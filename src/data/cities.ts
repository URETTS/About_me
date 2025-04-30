import chisinau from '../../assets/images/Cities/chisinau/chisinau_prev.jpg';
import chione from '../../assets/images/Cities/chisinau/chione.jpg';
import chitwo from '../../assets/images/Cities/chisinau/chitwo.jpg';
import chithree from '../../assets/images/Cities/chisinau/chithree.jpg';
import chifour from '../../assets/images/Cities/chisinau/chifour.jpg';
import chifive from '../../assets/images/Cities/chisinau/chifive.jpg';

import bychprev from '../../assets/images/Cities/bycharest/bychprev.jpg';

import zagrebprev from '../../assets/images/Cities/zagreb/zagrebprev.jpg';

import pulaprev from '../../assets/images/Cities/pula/pulaprev.jpg';

import plitviceprev from '../../assets/images/Cities/plitvice/plitviceprev.jpg';

import ljubljanaprev from '../../assets/images/Cities/ljubljana/ljubljanaprev.jpg';

import munichprev from '../../assets/images/Cities/munich/munichprev.jpg';

import veniceprev from '../../assets/images/Cities/venice/veniceprev.jpg';

import tbilisiprev from '../../assets/images/Cities/tbilisi/tbilisiprev.jpg';

 import kutaisiprev from '../../assets/images/Cities/kutaisi/kutaisiprev.jpg';

 import gudauriprev from '../../assets/images/Cities/gudauri/gudauriprev.jpg';

 import alazaniprev from '../../assets/images/Cities/alazani/alazaniprev.jpg';

 import yerevanprev from '../../assets/images/Cities/yerevan/yerevanprev.jpg';

 import malagaprev from '../../assets/images/Cities/malaga/malagaprev.jpg';

 import alicanteprev  from '../../assets/images/Cities/alicante/alicanteprev.jpg';

import gibraltarprev from '../../assets/images/Cities/gibraltar/gibraltarprev.jpg';

import valenciaprev from '../../assets/images/Cities/valencia/valenciaprev.jpg';

import sevillaprev from '../../assets/images/Cities/sevilla/sevillaprev.jpg';

import sintraprev from '../../assets/images/Cities/sintra/sintraprev.jpg';

import cascaisprev from '../../assets/images/Cities/cascais/cascaisprev.jpg';

import lisbonprev from '../../assets/images/Cities/lisbon/lisbonprev.jpg';

// import  from '../../assets/images/Cities';

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
        images: [ bychprev
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
        images: [zagrebprev
        ]
      },
      {
        id: 'pula',
        name: 'Пула',
        description: '',
        images: [pulaprev
        ]
      },
      {
        id: 'plitvice',
        name: 'Плитвицкие озёра',
        description: '',
        images: [plitviceprev
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
        images: [ljubljanaprev
          
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
        images: [munichprev
          
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
        images: [veniceprev
          
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
        images: [tbilisiprev
          
        ]
      },
      {
        id: 'kutaisi',
        name: 'Кутаиси',
        description: '',
        images: [kutaisiprev
          
        ]
      },
      {
        id: 'gudauri',
        name: 'Гудаури',
        description: '',
        images: [ gudauriprev
          
        ]
      },
      {
        id: 'alazani',
        name: 'Алазанская долина',
        description: '',
        images: [ alazaniprev
          
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
        images: [yerevanprev
          
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
        images: [malagaprev
         
        ]
      },
      {
        id: 'alicante',
        name: 'Аликанте',
        description: '',
        images: [alicanteprev
          
        ]
      },
      {
        id: 'gibraltar',
        name: 'Гибралтар',
        description: '',
        images: [gibraltarprev
          
        ]
      },
      {
        id: 'valencia',
        name: 'Валенсия',
        description: '',
        images: [valenciaprev
          
        ]
      },
      {
        id: 'sevilla',
        name: 'Севилья',
        description: '',
        images: [sevillaprev
          
        ]
      }
    ]
  },
  {
    countryId: 'portugal',
    cities: [
      {
        id: 'sintra',
        name: 'Синтра',
        description: '',
        images: [sintraprev
          
        ]
      },
      {
        id: 'cascais',
        name: 'Кашкайш',
        description: '',
        images: [cascaisprev
          
        ]
      },
      {
        id: 'lisbon',
        name: 'Лиссабон',
        description: '',
        images: [lisbonprev
          
        ]
      }
    ]
  }
];

export default cityData;
