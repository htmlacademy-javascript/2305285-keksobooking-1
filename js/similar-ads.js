import { getEnding } from './util.js';

const containerElement = document.querySelector('#map-canvas');
const advertisementTemplate = document.querySelector('#card').content.querySelector('.popup');

const getSimilarAdvertisemen = (element) => {
  const fragment = document.createDocumentFragment();

  element.forEach(({ offer, author }) => {
    const advertisementElement = advertisementTemplate.cloneNode(true);
    advertisementElement.querySelector('.popup__title').textContent = offer.title;
    advertisementElement.querySelector('.popup__text--address').textContent = offer.address;
    advertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    advertisementElement.querySelector('.popup__type').textContent = offer.type.name;
    advertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getEnding(offer.rooms)} для ${offer.guests} гостей`;
    advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    advertisementElement.querySelector('.popup__features').textContent = '';
    for (let i = 0; i < offer.features.length; i++) {
      const popupFeaturesElement = document.createElement('li');
      popupFeaturesElement.classList.add('popup__feature');
      popupFeaturesElement.classList.add(`popup__feature--${offer.features[i]}`);
      advertisementElement.querySelector('.popup__features').append(popupFeaturesElement);
    }

    advertisementElement.querySelector('.popup__description').textContent = offer.description;

    const firstPhotoElement = advertisementElement.querySelector('.popup__photo');
    for (let i = 0; i < offer.photos.length; i++) {
      const popupPhotosElement = firstPhotoElement.cloneNode(true);
      popupPhotosElement.src = offer.photos[i];
      advertisementElement.querySelector('.popup__photos').appendChild(popupPhotosElement);
    }
    advertisementElement.querySelector('.popup__photos').removeChild(firstPhotoElement);

    advertisementElement.querySelector('.popup__avatar').src = author.avatar;
    fragment.appendChild(advertisementElement);
  });

  containerElement.appendChild(fragment);
};

export { getSimilarAdvertisemen };
