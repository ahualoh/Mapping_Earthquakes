// Add console.log to check to see if our code is working.
console.log("If this shows in console, code is working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6,-95.665], 5);

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
let cityData = cities;  

// // Loop through the cities array and create one marker for each city. 2 ways:
/// cities.forEach(function(city)) 
// OR 
/// for (let i = 0; i < cities.length; i++)
console.log("Cities array: ")

cityData.forEach(function(city) {
    console.log(city)

    numFormatter = Intl.NumberFormat('en-US');
    popThousand = numFormatter.format(city.population);
    console.log(popThousand);

    L.circleMarker(city.location, {
        radius: city.population/200000,
        lineweight: 4,
        color: 'orange'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + popThousand + "</h3>")
  .addTo(map);
   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

