import { formElement } from './form.js';

const MAX_PRICE_PER_NIGHT = 100000;

const TitleLength = {
  MIN: 30,
  MAX: 100,
};

const RoomsOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const MinPricePerNight = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 1000,
};

const titleFieldElement = formElement.querySelector('#title');
const priceFieldElement = formElement.querySelector('#price');
const roomNumberFieldElement = formElement.querySelector('#room_number');
const capacityFieldElement = formElement.querySelector('#capacity');
const typeFieldElement = formElement.querySelector('#type');

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
});

const validateTitle = (value) => value.lenght >= TitleLength.MIN && value.lenght <= TitleLength.MAX;

pristine.addValidator(titleFieldElement,
  validateTitle,
  'От 30 до 100 символов'
);

const validatePrice = (value) => value >= MinPricePerNight[typeFieldElement.value] && value <= MAX_PRICE_PER_NIGHT;

const getPriceErrorMessage = () => `Не менее ${MinPricePerNight[typeFieldElement.value]} и не более ${ MAX_PRICE_PER_NIGHT} руб.`;

pristine.addValidator(priceFieldElement,
  validatePrice,
  getPriceErrorMessage
);

const validateRoomNumber = () => RoomsOption[roomNumberFieldElement.value].includes(capacityFieldElement.value);

const getRoomErrorMessage = () => `${roomNumberFieldElement.value}
${roomNumberFieldElement.value === '1' ? 'комната' : 'комнаты'}
для ${capacityFieldElement.value} гостей
${roomNumberFieldElement.value === '1' ? 'невозможна' : 'невозможны'}`;

pristine.addValidator(roomNumberFieldElement,
  validateRoomNumber,
  getRoomErrorMessage
);

pristine.addValidator(capacityFieldElement,
  validateRoomNumber,
  getRoomErrorMessage
);

roomNumberFieldElement.addEventListener('change', () => {
  pristine.validate();
});

capacityFieldElement.addEventListener('change', () => {
  pristine.validate();
});

// const validateType = () => MinPricePerNight[typeFieldElement.value].includes(priceFieldElement.value);

// pristine.addValidator(typeFieldElement,
//   validateType
// );

formElement.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});
