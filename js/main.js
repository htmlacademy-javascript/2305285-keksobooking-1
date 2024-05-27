import './form.js';
import './filters.js';
import { renderCard } from './card.js';
import { generateAdvertisement } from './data.js';
import { setFormActive } from './form.js';
import { setFilterActive } from './filters.js';

const advertisements = generateAdvertisement();

renderCard(advertisements[0]);

setFormActive();
setFilterActive();
