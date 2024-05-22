// Функция получения целого числа из переданного диапазона

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция получения числа с плавающей точкой из переданного диапазона

const getRandomFloat = (min, max, quantity) => (Math.random() * (max - min) + min).toFixed(quantity);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export { getRandomPositiveInteger, getRandomFloat, getRandomArrayElement };
