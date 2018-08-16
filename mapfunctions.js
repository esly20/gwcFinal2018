// This is for all the map functions
var mymap = L.map('mapid').setView([40.720530, -73.997338], 12);

function show_map(mymap){
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 19,
      id: 'mapbox.streets', //satellite for earth
      accessToken: 'sk.eyJ1IjoiZXNsaWJlY2siLCJhIjoiY2prdjd1Y2NwMDBsMjNwcWs5MHViamlxOCJ9.7sLzqelXVl35Lomwxsro1g'
  }).addTo(mymap);
}


function add_marker(mymap){
  var nycrm = L.marker([40.717542, -74.001615]).addTo(mymap);
  var fortwash = L.marker([40.841451, -73.940417]).addTo(mymap);
  var covenant = L.marker([40.758550, -73.995576]).addTo(mymap);
  var tillary = L.marker([40.695731, -73.982145]).addTo(mymap);
  var hra = L.marker([40.740655, -73.974382]).addTo(mymap);
  var lenox = L.marker([40.767076, -73.957739]).addTo(mymap);
  var lenox2 = L.marker([40.767233, -73.965504]).addTo(mymap);

  //nycrm.bindPopup("<b>New York City Rescure Mission</b><br>Christy is dumb.");
  nycrm.bindPopup("<a href='http://nycrescue.org/' target='_blank'>New York City Rescue Mission</a>");
  fortwash.bindPopup("<a href='http://www.projectrenewal.org/program-list/2013/3/6/fort-washington-mens-shelter' target='_blank'>Fort Washington Men's Shelter</a>");
  covenant.bindPopup("<a href='ny.covenanthouse.org' target='blank'> Covenant House New York</a>");
  tillary.bindPopup("<b>Tillary Street Women's Center</b><br><a href='https://www.google.com/maps/dir//Tillary+Street+Women%E2%80%99s+Shelter,+Tillary+Street,+Brooklyn,+NY/@40.695566,-73.9820974,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bcaa7bd5587:0x8a7be7297f332f7!2m2!1d-73.9820974!2d40.695566' target='blank'>Get Directions</a>");
  hra.bindPopup("<b>HRA Men's Shelter</b><br><a href='https://www.google.com/maps/dir//400+E+30th+St,+New+York,+NY+10016/@40.740577,-73.9769597,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2590ef236310d:0xf9fd636671cdb359!2m2!1d-73.974771!2d40.740577' target='blank'>Get Directions</a>");
  lenox.bindPopup("<a href='http://www.lenoxhill.org/center-lenox-hill-neighborhood-house' target='blank'>Lenox Hill Neighborhood House for Women</a>");
  lenox2.bindPopup("<a href='http://www.lenoxhill.org/wmhsparkavearmory' target='blank'>Lenox Hill Neighborhood House for Women</a>");


}


function onMapClick(e) {
    alert("Select locations on the map to explore the city. Click and drag on the map to move around, and scroll in and out to zoom.");
}
show_map(mymap)
add_marker(mymap)
mymap.on('click', onMapClick);
