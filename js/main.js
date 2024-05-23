import { getSimilarAdvertisemen } from './similar-ads.js';
import { generateAdvertisement } from './data.js';

const advertisements = generateAdvertisement();

getSimilarAdvertisemen(advertisements[0]);
