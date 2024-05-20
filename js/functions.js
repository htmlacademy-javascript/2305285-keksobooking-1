const getRandomInit = (min, max, quantity) => {
  if (min >= 0 && max >= 0 && quantity >= 0) {
    if (max <= min) {
      min = [max, max = min][0];
    }
    const randomInit = (Math.random() * (max - min) + min).toFixed(quantity);
    return randomInit;
  }
  return NaN;
};

getRandomInit(2, 8.5, 3);
