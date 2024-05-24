import { makeElementInactive, makeElementActive } from './util.js';

const filterFormElement = document.querySelector('.map__filters');
const interactiveFilterElements = filterFormElement.querySelectorAll('.map__filter');
const mapCheckboxElements = filterFormElement.querySelectorAll('.map__checkbox');

const setInactiveFilter = () => {
  filterFormElement.classList.add('map__filters--disabled');
  interactiveFilterElements.forEach((element) => makeElementInactive(element));
  mapCheckboxElements.forEach((element) => makeElementInactive(element));
};

const setActiveFilter = () => {
  filterFormElement.classList.remove('map__filters--disabled');
  interactiveFilterElements.forEach((element) => makeElementActive(element));
  mapCheckboxElements.forEach((element) => makeElementActive(element));
};

export { setInactiveFilter, setActiveFilter };
