// This is for all the map functions
var mymap = L.map('mapid').setView([20, -50], 2);

function show_map(mymap){
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 19,
      id: 'mapbox.satellite', //satellite for earth or streets
      accessToken: 'sk.eyJ1IjoiZXNsaWJlY2siLCJhIjoiY2prdjd1Y2NwMDBsMjNwcWs5MHViamlxOCJ9.7sLzqelXVl35Lomwxsro1g'
  }).addTo(mymap);
}


function add_marker(mymap){
  // var nycrm = L.marker([40.717542, -74.001615]).addTo(mymap);
  // var fortwash = L.marker([40.841451, -73.940417]).addTo(mymap);
  var covenant = L.marker([40.758550, -73.995576]).addTo(mymap);
  // var tillary = L.marker([40.695731, -73.982145]).addTo(mymap);
  // var hra = L.marker([40.740655, -73.974382]).addTo(mymap);
  // var lenox = L.marker([40.767076, -73.957739]).addTo(mymap);
  // nycrm.bindPopup("<a href='http://nycrescue.org/' target='_blank'>New York City Rescue Mission</a>");
  // fortwash.bindPopup("<a href='http://www.projectrenewal.org/program-list/2013/3/6/fort-washington-mens-shelter' target='_blank'>Fort Washington Men's Shelter</a>");
  covenant.bindPopup("<a href='http://localhost:8000/covannimation.html' target='blank'> Watch Annimation</a><br>60% of homeless women and 41% of homeless men have at least one child, but only 39% of women and 3% of men lived with any children. Many families are forced to choose between finding a bed at a shelter and their family being seperated. In many cases the children are separated from their parents and put in various shelters.");
  // tillary.bindPopup("<b>Tillary Street Women's Center</b>");
  // hra.bindPopup("<b>HRA Men's Shelter</b>");
  // lenox.bindPopup("<a href='http://www.lenoxhill.org/center-lenox-hill-neighborhood-house' target='blank'>Lenox Hill Neighborhood House for Women</a>");
}


function onMapClick(e) {
    mymap.flyTo([40.720530, -73.997338], 12)
    alert("Select locations on the map to explore the city and watch the annimations. Click and drag on the map to move around, and scroll in and out to zoom.");
}
show_map(mymap)
add_marker(mymap)
mymap.on('click', onMapClick);
