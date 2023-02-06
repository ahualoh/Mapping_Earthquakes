// Add console.log to check to see if our code is working.
console.log("If this shows in console, code is working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Coordinates for each point to be used in the line.
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
/// NOTE ^^^ Please note that the coordinates appear in reverse order [-122.375, 37.61899948120117], compared to their order in the setView() method. This is because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. Links to an external site.The L.geoJSON()layer reverses the coordinates to plot them on the map.

    // // Grabbing our GeoJSON data.
    // L.geoJson(sanFranAirport, {
    //   // We turn each feature into a marker on the map.
    //   onEachFeature: function(feature, layer) {
    //     console.log("geoJSON objects: ");
    //     console.log(layer);
    //     layer.bindPopup("<h2>" + feature.properties.name + "</h2>" 
    //     + "<hr/>" + "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
    //    }
    // }).addTo(map);

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log("geoJSON objects: ");
    console.log(feature);
    return L.marker(latlng).bindPopup("<h2>" + "Airport Code: " + feature.properties.faa+ "</h2>" 
    + "<hr>" + "<h3>" + feature.properties.name + "</h3>");
   }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

