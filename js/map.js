import { setFormActive } from './form.js';
import { renderCard } from './card.js';

const addressFieldElement = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    addressFieldElement.placeholder = '35.67078, 139.75899';
  })
  .setView({
    lat: 35.67078,
    lng: 139.75899,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.67078,
    lng: 139.75899,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  addressFieldElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const similarMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (similarAd) => {
  const { lat, lng } = similarAd.offer.location;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: similarMarkerIcon,
    }
  );

  marker
    .addTo(markerGroup)
    .bindPopup(renderCard(similarAd));
};

const renderSimilarAdMarker = (ads) => ads.forEach((similarAd) => createMarker(similarAd));

export { renderSimilarAdMarker };
