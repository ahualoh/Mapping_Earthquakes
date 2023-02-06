// Add console.log to check to see if our code is working.
//console.log(“If this shows in console, code is working”);

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add  tile layer to map
streets.addTo(map);

// Coordinates for each point to be used in the line.
// Add GeoJSON data.
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ahualoh/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log("JSON data: ");
  console.log(data);
  L.geoJson(data, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log("geoJSON objects: ");
      console.log(feature);
      return L.marker(latlng).bindPopup("<h2>" + "Airport Code: " 
      + feature.properties.faa+ "</h2>"
      + "<hr>" 
      + "<h3>" + "Airport Name: " 
      + "<br>" + "<i>" + feature.properties.name + "</i>"+  "</h3>");
     }
  }).addTo(map);
});
