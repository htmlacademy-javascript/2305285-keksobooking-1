import { getRoomPlural } from './util.js';

const containerElement = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const creatPopupFeatures = (features, parent) => {
  parent.textContent = '';
  features.forEach((feature) => {
    const popupFeaturesElement = document.createElement('li');
    popupFeaturesElement.classList.add('popup__feature');
    popupFeaturesElement.classList.add(`popup__feature--${feature}`);
    parent.append(popupFeaturesElement);
  });
};

const creatPopupPhotos = (photos, parent) => {
  const firstPhotoElement = parent.querySelector('.popup__photo');
  photos.forEach((photo) => {
    const popupPhotosElement = firstPhotoElement.cloneNode(true);
    popupPhotosElement.src = photo;
    parent.querySelector('.popup__photos').appendChild(popupPhotosElement);
  });
  parent.querySelector('.popup__photos').removeChild(firstPhotoElement);
};

const renderCard = (ad) => {
  const fragment = document.createDocumentFragment();

  // if (typeof ad['key'] !== 'undefined') {
  //   //ключ есть
  //   }else{
  //   //ключа нет
  //   }

  if (!Object.keys(ad).includes(undefined)) {
    const advertisementElement = cardTemplate.cloneNode(true);
    advertisementElement.querySelector('.popup__title').textContent = ad.offer.title;
    advertisementElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    advertisementElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
    advertisementElement.querySelector('.popup__type').textContent = ad.offer.type.name;
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} ${getRoomPlural(ad.offer.rooms)} для ${ad.offer.guests} гостей`;
    advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

    creatPopupFeatures(ad.offer.features, advertisementElement.querySelector('.popup__features'));

    advertisementElement.querySelector('.popup__description').textContent = ad.offer.description;

    creatPopupPhotos(ad.offer.photos, advertisementElement);

    advertisementElement.querySelector('.popup__avatar').src = ad.author.avatar;
    fragment.appendChild(advertisementElement);

    containerElement.appendChild(fragment);
  } else {
    undefined.classList.add('hidden');
  }
  // const advertisementElement = cardTemplate.cloneNode(true);
  // advertisementElement.querySelector('.popup__title').textContent = ad.offer.title;
  // advertisementElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  // advertisementElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  // advertisementElement.querySelector('.popup__type').textContent = ad.offer.type.name;
  // advertisementElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} ${getRoomPlural(ad.offer.rooms)} для ${ad.offer.guests} гостей`;
  // advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  // creatPopupFeatures(ad.offer.features, advertisementElement.querySelector('.popup__features'));

  // advertisementElement.querySelector('.popup__description').textContent = ad.offer.description;

  // creatPopupPhotos(ad.offer.photos, advertisementElement);

  // advertisementElement.querySelector('.popup__avatar').src = ad.author.avatar;
  // fragment.appendChild(advertisementElement);

  // containerElement.appendChild(fragment);
};

export { renderCard };
