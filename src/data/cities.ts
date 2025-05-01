import chisinau from '../../assets/images/Cities/chisinau/chisinau_prev.jpg';
import chione from '../../assets/images/Cities/chisinau/chione.jpg';
import chitwo from '../../assets/images/Cities/chisinau/chitwo.jpg';
import chithree from '../../assets/images/Cities/chisinau/chithree.jpg';
import chifour from '../../assets/images/Cities/chisinau/chifour.jpg';
import chifive from '../../assets/images/Cities/chisinau/chifive.jpg';

import bychprev from '../../assets/images/Cities/bycharest/bychprev.jpg';
import bycone from '../../assets/images/Cities/bycharest/bycone.jpg';
import bectwo from '../../assets/images/Cities/bycharest/bectwo.jpg';
import bycthree from '../../assets/images/Cities/bycharest/bycthree.jpg';
import becfour from '../../assets/images/Cities/bycharest/becfour.jpg';
import bycfive from '../../assets/images/Cities/bycharest/bycfive.jpg';

import zagrebprev from '../../assets/images/Cities/zagreb/zagrebprev.jpg';
import zgone from '../../assets/images/Cities/zagreb/zgone.jpg';
import zgtwo from '../../assets/images/Cities/zagreb/zgtwo.jpg';
import zgthree from '../../assets/images/Cities/zagreb/zgthree.jpg';
import zgfour from '../../assets/images/Cities/zagreb/zgfour.jpg';
import zgfive from '../../assets/images/Cities/zagreb/zgfive.jpg';

import pulaprev from '../../assets/images/Cities/pula/pulaprev.jpg';
import pulaone from '../../assets/images/Cities/pula/pulaone.jpg';
import putwo from '../../assets/images/Cities/pula/putwo.jpg';
import puthree from '../../assets/images/Cities/pula/puthree.jpg';
import pufour from '../../assets/images/Cities/pula/pufour.jpg';
import pufive from '../../assets/images/Cities/pula/pufive.jpg';


import banjoleprev from '../../assets/images/Cities/banjole/banjoleprev.jpg';
import banone from '../../assets/images/Cities/banjole/banone.jpg';
import bantwo from '../../assets/images/Cities/banjole/bantwo.jpg';
import banthree from '../../assets/images/Cities/banjole/banthree.jpg';
import banfour from '../../assets/images/Cities/banjole/banfour.jpg';
import banfive from '../../assets/images/Cities/banjole/banfive.jpg';
import bansix from '../../assets/images/Cities/banjole/bansix.jpg';
import banseven from '../../assets/images/Cities/banjole/banseven.jpg';

import plitviceprev from '../../assets/images/Cities/plitvice/plitviceprev.jpg';
import plivone from '../../assets/images/Cities/plitvice/plivone.jpg';
import plivtwo from '../../assets/images/Cities/plitvice/plivtwo.jpg';
import plivthree from '../../assets/images/Cities/plitvice/plivthree.jpg';
import plivfive from '../../assets/images/Cities/plitvice/plivfive.jpg';
import plivsix from '../../assets/images/Cities/plitvice/plivsix.jpg';
import plivfour from '../../assets/images/Cities/plitvice/plivfour.jpg';
import plivseven from '../../assets/images/Cities/plitvice/plivseven.jpg';
import pliveight from '../../assets/images/Cities/plitvice/pliveight.jpg';
import plivnine from '../../assets/images/Cities/plitvice/plivnine.jpg';

import ljubljanaprev from '../../assets/images/Cities/ljubljana/ljubljanaprev.jpg';
import lubone from '../../assets/images/Cities/ljubljana/lubone.jpg';
import lubtwo from '../../assets/images/Cities/ljubljana/lubtwo.jpg';
import lubfour from '../../assets/images/Cities/ljubljana/lubfour.jpg';
import lubthree from '../../assets/images/Cities/ljubljana/lubthree.jpg';
import lubfive from '../../assets/images/Cities/ljubljana/lubfive.jpg';

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

import barcelonaprev from '../../assets/images/Cities/barcelona/barcelonaprev.jpg';

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
        description: `<h2 class="text-xl font-semibold mb-4">Кишинёв — уютная столица</h2>
Кишинёв — небольшой, но очень приятный город. Он не перегружен, в нём легко дышится и комфортно гуляется. Удивительно вкусные кафе — особенно радуют местные блюда с молдавским колоритом: мамалыга, плацинды, и, конечно, вина. Люди дружелюбные, открытые, готовы помочь без лишних слов — это ощущается сразу.

Город сильно пострадал во время Второй мировой войны и землетрясения 1940 года, поэтому от старой архитектуры осталось немного, но парки и бульвары придают ему живость. Очень советую пройтись по центральному парку "Ștefan cel Mare" или вдоль проспекта с тем же именем — это сердце города.

Одним из самых ярких моментов моего пребывания стал эпизод, когда я впервые за долгое время смог поесть в McDonald's после полуночи. В Украине тогда ещё действовал комендантский час, а здесь я сидел с бургером около часа ночи — это ощущалось как настоящее приключение, глоток свободы и жизни.`,
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
        description: `<h2 class="text-xl font-semibold mb-4">Бухарест — «маленький Париж» Восточной Европы</h2>
Бухарест поразил меня с первых минут. Я снял очень кайфовую квартирку и с удовольствием провёл день, гуляя по городу. Город оказался неожиданно красивым — архитектура действительно впечатляет. Особенно запомнилось здание парламента — оно просто гигантское! Кстати, это одно из самых тяжёлых зданий в мире, и второе по величине административное здание после Пентагона.

Впервые за долгое время я снова оказался в Starbucks и Burger King — банально, но для человека, долго живущего с ограничениями, это ощущалось как маленький праздник.

А настоящим сюрпризом стало то, что на автовокзале перед отъездом я случайно встретил девочку, с которой мы когда-то вместе ходили в детский сад! Такой момент будто специально подкинула судьба, чтобы улыбнуться.  `,
        images: [ bychprev,bycone,bectwo,bycthree,becfour,bycfive
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
        description: ` <h2 class="text-xl font-semibold mb-4">Загреб — короткая встреча со столицей</h2> 
        Моя жизнь в Хорватии началась с Загреба, где я провёл только один вечер — 8 сентября. Этого времени хватило, чтобы немного погулять по старому городу, почувствовать атмосферу столицы и настроиться на новую страну. А утром следующего дня произошло приятное совпадение: я познакомился с парой путешественников, с которыми потом неожиданно пересёкся снова — но уже в другой стране. Загреб остался в памяти как точка старта и лёгкое касание города, к которому, возможно, стоит вернуться.

`,
        images: [zagrebprev,zgone,zgtwo,zgthree,zgfour,zgfive
        ]
      },
      {
        id: 'pula',
        name: 'Пула',
        description: ` <h2 class="text-xl font-semibold mb-4">Пула — античность, море и белоснежные яхты</h2> 
        Пула стала для меня настоящей находкой. Я приезжал сюда много раз — просто погулять, вдохнуть морской воздух и снова взглянуть на амфитеатр. Этот город сочетает в себе древность и современность: тут легко встретить и туриста с камерой, и капитана собственной яхты. Архитектура, берег, яхты, каменные улицы — всё как-то органично. Каждый визит сюда был как маленький праздник.

`,
        images: [pulaprev,pulaone,putwo,puthree,pufour,pufive
        ]
      },
      {
        id: 'banjole',
        name: 'Баньйола',
        description: ` <h2 class="text-xl font-semibold mb-4">Баньйола — деревушка миллионеров у моря</h2>
        Именно в Баньйоле я жил всё это время. Это крошечная деревушка в зелени и тишине, где почти у каждого дома стоит яхта. Сначала я жил тут один — месяц абсолютного спокойствия, прогулок и одиночия у моря. Потом ко мне приехал друг, и жизнь немного оживилась, но атмосфера осталась той же — мягкой, природной и очень чистой. Здесь я научился замедляться и просто дышать.`,
        images: [ banjoleprev,banone,bantwo,banthree,banfour,banfive,bansix,banseven
        ]
      },
      {
        id: 'plitvice',
        name: 'Плитвицкие озёра',
        description: ` <h2 class="text-xl font-semibold mb-4">Плитвицкие озёра — золото осени и водопадов
</h2>С другом мы арендовали машину и отправились вглубь страны — к Плитвицким озёрам. Это был контраст с морем: пока побережье ещё жило летом, здесь уже наступила полная осень. Жёлтые и красные деревья, водопады, деревянные тропинки — всё выглядело как сказочный парк. Мы провели целый день, просто гуляя, фотографируя и наслаждаясь чистым воздухом. Это место будто создано для перезагрузки. `,
        images: [plivone,plitviceprev,plivtwo,plivthree,plivfive,plivsix,plivfour,plivseven,pliveight,plivnine
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
        description: ` <h2 class="text-xl font-semibold mb-4">Любляна — город велодорожек и замков</h2> 
        Любляна сразу же покорила своей атмосферой. Очень уютный и красивый город — с аккуратным историческим центром, мощёными улицами и замком, возвышающимся на холме в самом сердце города. Везде чувствуешь порядок, чистоту и внимание к деталям.

Особенно запомнилось огромное количество велосипедов и велодорожек — это действительно город для активных и экологичных. Центр города почти полностью пешеходный, что делает прогулки особенно приятными.

Я ночевал в современном хостеле, где у каждого была своя капсула — компактная, но очень комфортная. Это был новый для меня опыт, и он отлично вписался в общую атмосферу поездки: простота, уют и чувство комфорта.

Эта короткая остановка в Любляне оставила после себя очень тёплые впечатления — сюда точно хочется вернуться.`,
        images: [ljubljanaprev,lubone,lubtwo,lubfour,lubthree,lubfive
          
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
        description: ` <h2 class="text-xl font-semibold mb-4">Мюнхен — холодный воздух, тёплые встречи и Октоберфест</h2>
        Мюнхен оказался городом-контрастом: дорогой, строгий, организованный — и при этом удивительно живой. Величественные здания, интересная архитектура, дорогие машины и общее ощущение достатка создавали атмосферу делового, богатого города.

Одним из главных впечатлений стала поездка на Октоберфест — огромное пивное и аттракционное безумие, где я не только пил пиво по 15 евро, но и прокатился на аттракционе, который сбрасывает с высоты. Адреналина хватило с лихвой.

Впервые попробовал бургеры из Five Guys — культового американского фастфуда, который, как оказалось, есть и в Германии. А завершили вечер коктейлями в баре на верхнем этаже одного из небоскрёбов — сидели там до трёх ночи.

Единственное, что не удалось — так и не сделал загранпаспорт. Но даже без этого поездка в Мюнхен стала незабываемым приключением. `,
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
        description: ` <h2 class="text-xl font-semibold mb-4">Венеция — город-призрак на одну ночь</h2> 
        18 октября я приехал в Венецию в 11:30 ночи — после долгой дороги из Хорватии. Так вышло, что в тот день был выходной, и автобусы не ходили, но сосед выручил и довёз меня до вокзала. Уже это задало особенное настроение.

Я решил не снимать отель — просто остаться и прожить ночь в городе, который обычно гудит от туристов. И это было одно из самых волшебных решений.

Ночь в Венеции — это совсем другой мир. Пустые площади, полное отсутствие толпы, тишина и шорох воды в каналах. Я ходил по улочкам, просил зарядить телефон в отелях, чтобы не потеряться без навигатора, катался на вапоретто (кораблике) по ночным каналам и наслаждался редкой возможностью увидеть Венецию настоящей — без суеты.

Из необычного — по ночам в городе действительно много крыс, они свободно бегают по набережным. Это добавляет немного реальности в сказочную картинку.

С восходом солнца пришли туристы, проснулась дневная Венеция — шумная, красивая, фотогеничная. Я успел увидеть и эту сторону города, прежде чем отправился в аэропорт.

`,
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
        description: `<h2 class="text-xl font-semibold mb-4">Тбилиси — душевная столица</h2> Тбилиси удивительно напомнил мне Киев — только со своей уникальной атмосферой и ритмом. Город живой, яркий и особенно красивый ночью, когда его улицы мягко подсвечены. Здесь можно часами гулять по старым кварталам, находить уличные кафе, арт-пространства и просто наблюдать за жизнью.

В Тбилиси особенно приятно просто быть — ничего не делать, просто впитывать его настроение. `,
        images: [tbilisiprev
          
        ]
      },
      {
        id: 'kutaisi',
        name: 'Кутаиси',
        description: ` <h2 class="text-xl font-semibold mb-4">Кутаиси — дух прошлого и грузинская реальность</h2>Кутаиси запомнился своей камерной атмосферой. Мы ездили туда на Subaru Forester, чтобы проводить друга в аэропорт, а заодно — исследовать окрестности. Особенно впечатлил заброшенный советский санаторий — настоящее путешествие во времени. Атмосферно, странно, интересно.

 `,
        images: [kutaisiprev
          
        ]
      },
      {
        id: 'gudauri',
        name: 'Гудаури',
        description: ` <h2 class="text-xl font-semibold mb-4">Гудаури — суровая красота и драйв на оффроуде</h2>Одной из самых запоминающихся поездок стала поездка в Гудаури. Мы отправились туда на Ниве, прокатились по оффроуду, поднимались в горы, останавливались в долинах и любовались видом на Казбек. Машина отлично справлялась с любой дорогой, а грузинская природа — с любой усталостью. `,
        images: [ gudauriprev
          
        ]
      },
      {
        id: 'alazani',
        name: 'Алазанская долина',
        description: ` <h2 class="text-xl font-semibold mb-4">Алазанская долина — винный рай и советский аэродром</h2> Последняя поездка по Грузии — в Алазанскую долину. Мы снова сели в Ниву и поехали навстречу закатам. Проехали по долине, заехали в горный городок, а потом — на заброшенный аэродром Шираки. Там мы катались, гоняли, устраивали настоящие ралли — место нереальное, с духом прошлого и настоящей свободой.

`,
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
        description: ` <h2 class="text-xl font-semibold mb-4">Ереван — столица с видом на Арарат и духом прошлого</h2> Ереван — город неоднозначный. Мы гуляли по центру, любовались панорамами, видели Арарат — даже несмотря на тучи, он выглядел впечатляюще. Сам город — типичный постсоветский: массивные здания, широкие улицы, мощёные площади.

Мы побывали возле завода коньяка «Арарат», прошлись по главным улицам, попробовали местную еду и просто впитывали атмосферу. В Ереване много знакомого — он не кажется чужим, особенно если ты говоришь по-русски. Но при этом он не отпускает ощущение, что здесь всё как будто в прошлом — но с дорогими машинами и небюджетными ценами.`,
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
        description: `<h2 class="text-xl font-semibold mb-4">Малага и Торре-дель-Мар — спокойная жизнь у моря</h2> После Севильи я поехал в Малагу, но жил не в самом городе, а в небольшом курортном посёлке Торре-дель-Мар. Здесь я оформлял документы на беженство. Место оказалось очень спокойным — море рядом, еда вкусная, погода отличная.

Мы много путешествовали по окрестностям, брали машину и исследовали побережье. Это был период отдыха и перезагрузки. Южная Испания оказалась идеальным местом, чтобы немного замедлиться.

 `,
        images: [malagaprev
         
        ]
      },
      {
        id: 'alicante',
        name: 'Аликанте',
        description: `<h2 class="text-xl font-semibold mb-4">Аликанте — солнечный испанский сюрприз на берегу моря</h2>В Аликанте мы приехали всего на один день, но он оказался очень насыщенным. Именно здесь я вновь встретился с той самой парой, с которой познакомился ещё в Хорватии — удивительное ощущение, когда случайные связи из прошлого оживают в новых местах.

Город оказался невероятно солнечным, тёплым и красивым — в чём-то он напомнил мне Майами. Прогулка по набережной, пальмы, светлая архитектура — всё это создаёт очень расслабляющее настроение. А венчает панораму огромный замок на вершине горы, с которого открывается захватывающий вид на город и море.

Аликанте стал не только ярким эпизодом в поездке, но и удобной точкой пересечения — когда я возвращался из Португалии, то прилетел именно сюда. И снова эти друзья приютили меня на ночь, сделав завершение поездки тёплым и по-домашнему уютным. `,
        images: [alicanteprev
          
        ]
      },
      {
        id: 'gibraltar',
        name: 'Гибралтар',
        description: ` <h2 class="text-xl font-semibold mb-4">Гибралтар — кусочек Британии под испанским солнцем</h2>Одна из самых необычных поездок в Испании — это Гибралтар. С друзьями мы арендовали машину и поехали туда на день. Въезжаешь — и будто попадаешь в Англию: английские полицейские, двухэтажные автобусы, пабы. Всё это на фоне жаркого солнца и испанского ландшафта.

Гибралтар — это скала, граница, обезьяны, британские флаги и ощущение, что ты на краю Европы. Очень необычное место, которое определённо стоит посетить.  `,
        images: [gibraltarprev
          
        ]
      },
      {
        id: 'valencia',
        name: 'Валенсия',
        description: ` <h2 class="text-xl font-semibold mb-4">Валенсия — весна, фейерверки и апельсиновый воздух</h2>Следующей остановкой после Малаги стала Валенсия. Мы приехали сюда 9 апреля, и как раз попали в самый разгар фестиваля Fallas — улицы были наполнены взрывами петард, музыкой и весельем. Мы сразу же влились в атмосферу праздника — вокруг кипела настоящая испанская весна.

Сама Валенсия — очень приятный город. Тут легко дышится, много зелени, просторных площадей и ярких фасадов. Особенно запомнились необычные футуристические здания Городка искусств и наук.

Жили мы неподалёку — в курортном городке Гандия, прямо на побережье. Снимали квартиру с террасой и барбекю — идеальное место, чтобы встречать закаты и отдыхать после насыщенных дней. Эта часть поездки была особенно расслабляющей и тёплой — и по погоде, и по ощущениям.

 `,
        images: [valenciaprev
          
        ]
      },
      {
        id: 'sevilla',
        name: 'Севилья',
        description: ` <h2 class="text-xl font-semibold mb-4">Севилья — ворота в Андалусию</h2>Севилья стала моим первым городом в Испании. Я прилетел сюда, и хотя у меня было всего несколько часов, город успел запомниться. Очень интересная архитектура, чувствуется дух юга — смесь арабского и европейского. В Севилье уютно, и даже короткая прогулка оставила приятное впечатление. Город живой, яркий, будто весь построен для фотокарточек.
 `,
        images: [sevillaprev
          
        ]
      },
      {
        id: 'barcelona',
        name: 'Барселона',
        description: ` <h2 class="text-xl font-semibold mb-4"></h2> `,
        images: [ barcelonaprev
      
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
        description: ` <h2 class="text-xl font-semibold mb-4">Синтра — город замков и туманов</h2> Синтра — будто сказка из другого времени. Город окружён лесами, холмами и замками. Я посетил масонский дворец с загадочной архитектурой и подземными тоннелями — место очень атмосферное и мистическое. Гулять по Синтре — как перемещаться по страницам старинной легенды. Небольшой, но с огромной исторической глубиной и особым настроением.`,
        images: [sintraprev
          
        ]
      },
      {
        id: 'cascais',
        name: 'Кашкайш',
        description: `<h2 class="text-xl font-semibold mb-4">Кашкаиш — глянец, океан и спорткары</h2>Кашкаиш — это курорт для тех, кто любит роскошь и океан. Повсюду дорогие автомобили: Ламборгини, Феррари, Макларены. Мы заехали сюда по пути к мысу Рока, но город точно заслуживает отдельного визита. Стильно, богато, и при этом спокойно. Побывал на маяке у обрыва — оттуда открываются захватывающие виды. Это был день на грани между природной красотой и урбанистическим глянцем.  `,
        images: [cascaisprev
          
        ]
      },
      {
        id: 'lisbon',
        name: 'Лиссабон',
        description: ` <h2 class="text-xl font-semibold mb-4">Лиссабон — солнечный город холмов и мостов</h2>Лиссабон — это атмосфера свободы, солнца и старины. Мы гуляли по узким улочкам, поднимались на холмы, любовались видом на реку Тежу. Город напомнил мне Сан-Франциско: трамваи, крутые спуски и подъёмы, и даже мост, похожий на Golden Gate. Посетили старинный замок, с которого открывается прекрасная панорама. Лиссабон оставил очень тёплое впечатление — лёгкий, живой и открытый. `,
        images: [lisbonprev
          
        ]
      }
    ]
  }
];

export default cityData;
