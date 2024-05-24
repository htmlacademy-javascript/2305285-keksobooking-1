import { makeElementInactive, makeElementActive } from './util.js';
import { setInactiveFilter, setActiveFilter } from './filters.js';

const formElement = document.querySelector('.ad-form');
const interactiveFormElements = formElement.querySelectorAll('.ad-form__element');

const setInactiveForm = () => {
  formElement.classList.add('ad-form--disabled');
  interactiveFormElements.forEach((element) => makeElementInactive(element));
  setInactiveFilter();
};

const setActiveForm = () => {
  formElement.classList.remove('ad-form--disabled');
  interactiveFormElements.forEach((element) => makeElementActive(element));
  setActiveFilter();
};

setActiveForm();
setInactiveForm();
