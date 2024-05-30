import './form.js';
import './filters.js';
import './validate.js';
import './map.js';
import './slider.js';
// import { renderCard } from './card.js';
import { generateAdvertisement } from './data.js';
// import { setFormInactive } from './form.js';
import { setFilterActive } from './filters.js';
import { renderSimilarAdMarker } from './map.js';

// const add = generateAdvertisement();

// renderCard(advertisements[0]);

renderSimilarAdMarker(generateAdvertisement());

setFilterActive();
