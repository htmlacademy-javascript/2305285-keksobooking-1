import { getEnding } from './util.js';

const containerElement = document.querySelector('#map-canvas');
const advertisementTemplate = document.querySelector('#card').content.querySelector('.popup');

const getSimilarAdvertisemen = (element) => {
  const fragment = document.createDocumentFragment();

  element.forEach(({ offer }) => {
    const advertisementElement = advertisementTemplate.cloneNode(true);
    advertisementElement.querySelector('.popup__title').textContent = offer.title;
    advertisementElement.querySelector('.popup__text--address').textContent = offer.address;
    advertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getEnding(offer.rooms)} для ${offer.guests} гостей`;
    fragment.appendChild(advertisementElement);
  });

  containerElement.appendChild(fragment);
};

export { getSimilarAdvertisemen };
