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

const fillElementContent = (element, value) => {
  if (value) {
    element.textContent = value;
  } else {
    element.remove();
  }
};

const createPrice = (element, value) => {
  if (value) {
    element.textContent = `${value} ₽/ночь`;
  } else {
    element.remove();
  }
};

const createType = (element, value) => {
  if (value) {
    element.textContent = value.name;
  } else {
    element.remove();
  }
};

const createCapacity = (element, value, quantity) => {
  if (value && quantity) {
    element.textContent = `${value} ${getRoomPlural(value)} для ${quantity} гостей`;
  } else {
    element.remove();
  }
};

const createTime = (element, value, out) => {
  if (value && out) {
    element.textContent = `Заезд после ${value}, выезд до ${out}`;
  } else {
    element.remove();
  }
};

const createAvatar = (element, value) => {
  if (value) {
    element.src = value;
  } else {
    element.remove();
  }
};

const renderCard = (ad) => {
  const fragment = document.createDocumentFragment();

  const advertisementElement = cardTemplate.cloneNode(true);

  fillElementContent(advertisementElement.querySelector('.popup__title'), ad.offer.title);
  fillElementContent(advertisementElement.querySelector('.popup__text--address'), ad.offer.address);
  createPrice(advertisementElement.querySelector('.popup__text--price'), ad.offer.price);
  createType(advertisementElement.querySelector('.popup__type'), ad.offer.type);
  createCapacity(advertisementElement.querySelector('.popup__text--capacity'), ad.offer.rooms, ad.offer.guests);
  createTime(advertisementElement.querySelector('.popup__text--time'), ad.offer.checkin, ad.offer.checkout);
  creatPopupFeatures(ad.offer.features, advertisementElement.querySelector('.popup__features'));
  fillElementContent(advertisementElement.querySelector('.popup__description'),ad.offer.description);
  creatPopupPhotos(ad.offer.photos, advertisementElement);
  createAvatar(advertisementElement.querySelector('.popup__avatar'), ad.author.avatar);

  fragment.appendChild(advertisementElement);

  containerElement.appendChild(fragment);
};

export { renderCard };
