import { toggleElementState } from './util.js';

const formElement = document.querySelector('.ad-form');
const interactiveFormElements = formElement.querySelectorAll('.ad-form__element');

const toggleFormState = (isActive) => {
  formElement.classList.toggle('ad-form--disabled', !isActive);
  interactiveFormElements.forEach((element) => toggleElementState(element, isActive));
};

const setFormInactive = () => {
  toggleFormState(false);
};

const setFormActive = () => {
  toggleFormState(true);
};

setFormInactive();

export { setFormActive };
