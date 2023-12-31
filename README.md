# Leaflet_Challenge
Module 15 Challenge
In this task, we utilized earthquake data provided by the USGS (United States Geological Survey) to create a visualization using Leaflet, a JavaScript library for interactive maps. We used the [logic.js](https://github.com/aliciahlavac/Leaflet_Challenge/blob/main/Leaflet-Part1/static/js/logic.js) file to write the code to map the points of data, and we used [index.html](https://github.com/aliciahlavac/Leaflet_Challenge/blob/main/Leaflet-Part1/index.html) to help us visualize the map, with additional code to help us visualize the legend on the map (please use this html file to view the map, as it contains additional code in it).  We followed these steps:

Data Retrieval: We accessed the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page to choose a specific earthquake dataset for visualization. For instance, we selected the "All Earthquakes from the Past 7 Days" dataset. By clicking on the chosen dataset, we obtained a JSON representation of earthquake data, which included information like location, magnitude, depth, and timestamp.

Data Import and Visualization: We used the [URL](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) of the JSON data to fetch it using the d3.json() function. Once retrieved, we parsed through the data to extract the features representing individual earthquakes. For each earthquake feature, we plotted it on a Leaflet map by specifying its longitude and latitude as coordinates.

Marker Customization: We customized the appearance of the markers on the map. The size of each marker was determined by the magnitude of the earthquake. Higher-magnitude earthquakes were represented with larger markers. The color of each marker was based on the depth of the earthquake. Earthquakes with greater depth were depicted with darker colors.

Popup Information: To enhance user interaction, we added popups to each marker. When a user clicks on a marker, a popup window appears containing additional information about the earthquake, such as its location, magnitude, depth, and timestamp.

Legend Creation: We created a legend to provide context for the map data. The legend visually represented the depth ranges and their corresponding colors. This helped users understand the meaning behind the marker colors.

![2023-08-14](https://github.com/aliciahlavac/Leaflet_Challenge/assets/127240852/f513e88a-a8a4-42e5-98c6-07b8757468d8)

In summary, we used Leaflet and data from the USGS to build an interactive map that visualizes recent earthquake occurrences. The map allowed users to explore earthquake data by interacting with markers, popups, and a legend, providing insights into the magnitude and depth of these geological events.
