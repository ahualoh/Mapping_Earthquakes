// Add console.log to check to see if our code is working.
console.log("If this shows in console, code is working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6253167,-122.3983859], // SFO airport
    [30.1974757,-97.6685416], // AUS airport
    [43.6777215,-79.6270084], // YYZ airport
    [40.6413153,-73.780327], // JFK airport
    [39.7168634,-86.2977839] // IND airport
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// Another way to Create the map object with a center and zoom level. Useful when creating multiple layers.
        // let map = L.map("mapid", {
        //     center: [
        //       40.7, -94.5
        //     ],
        //     zoom: 4
        //   });

//  Add markers to the map...
// Replace the marker variable with the cities variable 
// that references the five most populous cities array.
// let cityData = cities;  

// // Loop through the cities array and create one marker for each city. 2 ways:
/// cities.forEach(function(city)) 
// OR 
/// for (let i = 0; i < cities.length; i++)
// console.log("Cities array: ")

// cityData.forEach(function(city) {
//     console.log(city)

//     numFormatter = Intl.NumberFormat('en-US');
//     popThousand = numFormatter.format(city.population);
//     console.log(popThousand);
//     // ^ followed instructions from https://www.codingem.com/comma-thousand-separator-in-javascript/

//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         lineweight: 4,
//         color: 'orange'
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + popThousand + "</h3>")
//   .addTo(map);
//    });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);