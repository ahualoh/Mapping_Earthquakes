// Add console.log to check to see if our code is working.
console.log("If this shows in console, code is working")

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 14.5.4 Adding Multiple Map Layers: Create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: satellite
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ahualoh/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";
console.log("Toronto Neighborhoods: ")
console.log(torontoHoods)


// let torontoData = "https://raw.githubusercontent.com/ahualoh/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";
// console.log("Toronto Data Path: ")
// console.log(torontoData)

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log("JSON data: ");
  console.log(data);
  // Creating a GeoJSON layer with the retreived data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      console.log("geoJSON objects: ");
      console.log(feature);
      layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.AREA_NAME+ "</h2>");
     }
  }).addTo(map);
});

