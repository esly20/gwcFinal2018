// This is for all the map functions
var mymap = L.map('mapid').setView([40.720530, -73.997338], 12);

 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox.streets', //satellite for earth
    accessToken: 'sk.eyJ1IjoiZXNsaWJlY2siLCJhIjoiY2prdjd1Y2NwMDBsMjNwcWs5MHViamlxOCJ9.7sLzqelXVl35Lomwxsro1g'
}).addTo(mymap);

var nycrm = L.marker([40.717542, -74.001615]).addTo(mymap);
var fortwash = L.marker([40.841451, -73.940417]).addTo(mymap);
var covenant = L.marker([40.758550, -73.995576]).addTo(mymap);
var tillary = L.marker([40.695731, -73.982145]).addTo(mymap);
var hra = L.marker([40.740655, -73.974382]).addTo(mymap);
var lenox = L.marker([40.767076, -73.957739]).addTo(mymap);
var lenox2 = L.marker([40.767233, -73.965504]).addTo(mymap);

nycrm.bindPopup("<b>New York City Rescure Mission</b><br>Christy is dumb.");
fortwash.bindPopup("<b>Fort Washington Men's Shelter</b><br>Christy is dumb.");
covenant.bindPopup("<b>Covenant House New York</b><br>Christy is dumb.");
tillary.bindPopup("<b>Tillary Street Women's Center</b><br>Christy is dumb.");
hra.bindPopup("<b>HRA Men's Shelter</b><br>>Christy is dumb.");
lenox.bindPopup("<b>Lenox Hill Neighborhood House for Women</b><br>Christy is dumb.");
lenox2.bindPopup("<b>Lenox Hill Neighborhood House Women’s Mental Health Shelter</b><br>Christy is dumb.");


function onMapClick(e) {
    alert("Select locations on the map to explore the city. Click and drag on the map to move around, and scroll in and out to zoom.");
}

mymap.on('click', onMapClick);
