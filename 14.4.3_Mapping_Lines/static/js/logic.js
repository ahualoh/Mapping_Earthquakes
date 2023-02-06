// Add console.log to check to see if our code is working.
console.log("If this shows in console, code is working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([38.1974757,-97.6685416], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6253167,-122.3983859], // SFO airport
    [30.1974757,-97.6685416], // AUS airport
    [43.6777215,-79.6270084], // YYZ airport
    [40.6413153,-73.780327], // JFK airport
    [39.7168634,-86.2977839] // IND airport
  ];

// Create a polyline using the line coordinates.
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dasharray: [0.2, 2]
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);