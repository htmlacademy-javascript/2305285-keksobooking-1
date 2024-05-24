import './form.js';
import './filters.js';
import { renderCard } from './card.js';
import { generateAdvertisement } from './data.js';

const advertisements = generateAdvertisement();

renderCard(advertisements[0]);
