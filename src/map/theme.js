'use strict';

const sunCalc = require('suncalc');

module.exports.setTheme = (lat, lng) => {
    var tileUrl;
    let currentTime = new Date().getHours();
    var sunsetTime = sunCalc.getTimes(new Date(), lat, lng).sunset.getHours();
    var sunriseTime = sunCalc.getTimes(new Date(), lat, lng).sunrise.getHours();
    if (currentTime > sunsetTime || currentTime < sunriseTime) {
        tileUrl = 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png';
    } else {
        tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
    }

    return tileUrl;
};
