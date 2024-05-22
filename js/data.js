import { getRandomPositiveInteger, getRandomFloat, createAvatarGenerator } from './util.js';

const ADVERTISEMENT_COUNT = 10;

const QUANTITY_NUMBER_OF_POINT = 5;

const FEATURE_COUNT_MIN = 1;

const TITLES = [
  'Милая, уютная квартира в Казани',
  'Странный замок на окраине',
  'Что это...',
  'Приятное мето для семейного отдыха',
  'Хочу жить в этой квартире!',
  'Шумные соседи и толпы тараканов',
  'Прекрасное путешествие и отличное место',
  'Вернусь сюда еще много раз!',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_OUT_INTERVALS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Светлая, уютная.',
  'Без посторонних запахов.',
  'Клопы сожрут за ночь.',
  'Есть все необходимое для жизни и даже больше.',
  'Очень милые хозяева, угостят пряником при заезде.',
  'Очень тихий район, не считая вечно лающих собак под окнами.',
  'Здесь поместятся только мыши',
  'Все отлично.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const Price = {
  MIN: 100,
  MAX: 10000,
};

const RoomCount = {
  MIN: 1,
  MAX: 10,
};

const GuestCount = {
  MIN: 1,
  MAX: 25,
};

const PhotoCount = {
  MIN: 1,
  MAX: 3,
};

const Latitude = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const Longitude = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const getAvatar = createAvatarGenerator();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomElements = () => Math.random() - 0.5;

const createFeatures = (features) => {
  const shuffledFeatures = features.sort(getRandomElements);
  const featuresCount = getRandomPositiveInteger(FEATURE_COUNT_MIN, features.length);
  return shuffledFeatures.slice(0, featuresCount);
};

const createPhotos = () => Array.from({length: getRandomPositiveInteger(PhotoCount.MIN, PhotoCount.MAX)}, () => getRandomArrayElement(PHOTOS));

const createAuthorAvatar = () => {
  const id = getAvatar();
  return {
    avatar: `img/avatars/user${id}.png`,
  };
};

const createCoordinates = () => ({
  lat: getRandomFloat(Latitude.MIN, Latitude.MAX, QUANTITY_NUMBER_OF_POINT),
  lng: getRandomFloat(Longitude.MIN, Longitude.MAX, QUANTITY_NUMBER_OF_POINT),
});

const createOffer = () => {
  const coordinates = createCoordinates();
  return {
    title: getRandomArrayElement(TITLES),
    address: `${coordinates.lat}, ${coordinates.lng}`,
    price: getRandomPositiveInteger(Price.MIN, Price.MAX),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(RoomCount.MIN, RoomCount.MAX),
    guests: getRandomPositiveInteger(GuestCount.MIN, GuestCount.MAX),
    checkin: getRandomArrayElement(CHECK_IN_OUT_INTERVALS),
    checkout: getRandomArrayElement(CHECK_IN_OUT_INTERVALS),
    features: createFeatures(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: createPhotos(),
    location: coordinates,
  };
};

const createAdvertisement = () => ({
  author: createAuthorAvatar(),
  offer: createOffer(),
});

const generateAdvertisement = () => Array.from({length: ADVERTISEMENT_COUNT}, createAdvertisement);

export { generateAdvertisement };
