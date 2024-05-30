import { setFormActive } from './form.js';

const addressFieldElement = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    addressFieldElement.placeholder = '35.6895, 139.692';
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  addressFieldElement.placeholder = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});
