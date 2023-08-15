// Store the URL of the GeoJSON data
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Request the query URL
d3.json(queryUrl).then(data => {
    // Call the function that creates the features
    makeFeatures(data.features);
});

// Creating the map object
let myMap = L.map("map", {
    // Set the initial center of the map
    center: [38.5, -96.00],
    // Set the initial zoom level 
    zoom: 5,
});

// Adding the tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Create a function to make the features for the map
function makeFeatures(weeklyData) {
    // Creating a function to determine the color based on depth
    function getColor(depth) {
        if (depth > 90) {
            return "#800026";
        } else if (depth > 70) {
            return "#BD0026";
        } else if (depth > 50) {
            return "#E31A1C";
        } else if (depth > 30) {
            return "#FC4E2A";
        } else if (depth > 10) {
            return "#FD8D3C";
        } else {
            return "#FEB24C";
        }
    }

    // Creating a function to set the marker size based on magnitude
    function getRadius(magnitude) {
        return magnitude * 5;
    }

    // Create a GeoJSON layer that contains the features array from the earthquakeData object
    let earthquakes = L.geoJSON(weeklyData, {
        pointToLayer: function (feature, latlng) {
            // Create and customize circle markers for each earthquake
            return L.circleMarker(latlng, {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.geometry.coordinates[2]), // Use depth value
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
                }).bindPopup(`<h3>${feature.properties.place}</h3><hr>
                            <p>Magnitude: ${feature.properties.mag}</p>
                            <p>Depth: ${feature.geometry.coordinates[2]}</p>
                            <p>Date: ${new Date(feature.properties.time)}</p>`);
        }
    });

    // Adding the earthquakes layer to the map
    earthquakes.addTo(myMap);

    // Create a legend: I used this website to help me with legends https://www.igismap.com/legend-in-leafletjs-map-with-topojson/
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend"),
            depths = [-10, 10, 30, 50, 70, 90],
            labels = [];

        // Iterate through depth ranges and add legend color indicators
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }

        return div;
    };

    // Add the legend to the map
    legend.addTo(myMap);
}