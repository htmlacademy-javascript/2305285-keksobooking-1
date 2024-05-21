const getRandomInit = (min, max, quantity) => {
  if (min >= 0 && max >= 0 && quantity >= 0) {
    if (max <= min) {
      min = [max, max = min][0];
    }
    return (Math.random() * (max - min) + min).toFixed(quantity);
  }
  return NaN;
};

getRandomInit(2, 8.5, 3);
