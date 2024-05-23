import { getEnding } from './util.js';

const containerElement = document.querySelector('#map-canvas');
const advertisementTemplate = document.querySelector('#card').content.querySelector('.popup');

const getSimilarAdvertisemen = (element) => {
  const fragment = document.createDocumentFragment();

  const advertisementElement = advertisementTemplate.cloneNode(true);
  advertisementElement.querySelector('.popup__title').textContent = element.offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = element.offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  advertisementElement.querySelector('.popup__type').textContent = element.offer.type.name;
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} ${getEnding(element.offer.rooms)} для ${element.offer.guests} гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;

  advertisementElement.querySelector('.popup__features').textContent = '';
  for (let i = 0; i < element.offer.features.length; i++) {
    const popupFeaturesElement = document.createElement('li');
    popupFeaturesElement.classList.add('popup__feature');
    popupFeaturesElement.classList.add(`popup__feature--${element.offer.features[i]}`);
    advertisementElement.querySelector('.popup__features').append(popupFeaturesElement);
  }

  advertisementElement.querySelector('.popup__description').textContent = element.offer.description;

  const firstPhotoElement = advertisementElement.querySelector('.popup__photo');
  for (let i = 0; i < element.offer.photos.length; i++) {
    const popupPhotosElement = firstPhotoElement.cloneNode(true);
    popupPhotosElement.src = element.offer.photos[i];
    advertisementElement.querySelector('.popup__photos').appendChild(popupPhotosElement);
  }
  advertisementElement.querySelector('.popup__photos').removeChild(firstPhotoElement);

  advertisementElement.querySelector('.popup__avatar').src = element.author.avatar;
  fragment.appendChild(advertisementElement);

  containerElement.appendChild(fragment);
};

export { getSimilarAdvertisemen };
