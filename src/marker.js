const mapbox = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {
    let marker = document.createElement('img');
    marker.src = iconURLs[type];
    return new mapbox.Marker(marker).setLngLat(coords);
};



module.exports = buildMarker;