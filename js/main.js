import { getSimilarAdvertisemen } from './similar-ads.js';
import { generateAdvertisement } from './data.js';

const advertisements = generateAdvertisement();

// const firstAdvertisement = advertisements[0];

// console.log(firstAdvertisement);

// getSimilarAdvertisemen(firstAdvertisement);

getSimilarAdvertisemen(advertisements);
