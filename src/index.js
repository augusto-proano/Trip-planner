const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoidGl0bzRnc3VzIiwiYSI6ImNqZ3MzcXBkejBkMHkycXA2ejNnYjdlOGgifQ.InTOhu00LHB1onr0YcTrRg';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/tito4gsus/cjgsbkys3001e2rqh2uxz0eto" // mapbox has lots of different map styles available.
  });

const marker = buildMarker("activities", [-74.009151, 40.705086]).addTo(map);






console.log("Hello from JavaScript");