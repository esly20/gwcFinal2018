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
  //nycrm.bindPopup("<b>New York City Rescure Mission</b><br>Christy is dumb.");
  var nycrm = L.marker([40.717542, -74.001615]).addTo(mymap);
  var fortwash = L.marker([40.841451, -73.940417]).addTo(mymap);
  var covenant = L.marker([40.758550, -73.995576]).addTo(mymap);
  var tillary = L.marker([40.695731, -73.982145]).addTo(mymap);
  var hra = L.marker([40.740655, -73.974382]).addTo(mymap);
  var lenox = L.marker([40.767076, -73.957739]).addTo(mymap);
  var lenox2 = L.marker([40.767233, -73.965504]).addTo(mymap);
  var coalition =L.marker([40.710210, -74.007500]).addTo(mymap);
  var harvestny =L.marker([40.746480,-73.985050]).addTo(mymap);
  var harvestli =L.marker([40.741020, -73.959230]).addTo(mymap);
  var safe =L.marker([40.714040, -74.003960]).addTo(mymap);
  var anthony =L.marker([40.814460, -73.896840]).addTo(mymap);
  var partnership =L.marker([40.651680, -73.885580]).addTo(mymap);

  coalition.bindPopup("<b>Coalition For The Homeless</b><br><a href='https://www.google.com/maps/dir//Coalition+for+the+Homeless,+129+Fulton+St,+New+York,+NY+10038/@40.7102695,-74.0095812,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25a18120974f5:0xfbfb3b5b198f31f6!2m2!1d-74.0073925!2d40.7102655!3e0' target='blank'>Get Directions</a>");
  harvestny.bindPopup("<b>City Harvest</b><br><a href='https://www.google.com/maps/dir//City+Harvest,+East+32nd+Street,+New+York,+NY/@40.7467294,-73.9848598,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x89c259ace01f6307:0x905d00e7c1e79d2e!2m2!1d-73.9848598!2d40.7467294!3e0' target='blank'>Get Directions</a>");
  harvestli.bindPopup("<b>City Harvest</b><br><a href='https://www.google.com/maps/dir//City+Harvest+Inc,+2nd+Street,+Long+Island+City,+NY/@40.7403655,-73.9579966,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25917d7b19a93:0x6ac800fc56f5cd89!2m2!1d-73.9579966!2d40.7403655!3e0' target='blank'>Get Directions</a>");
  safe.bindPopup("<b>Safe Horizon</b><br><a href='https://www.google.com/maps/dir//Safe+Horizon,+Lafayette+Street,+New+York,+NY/@40.7141238,-74.0039575,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25a21840b6a83:0x5cae4b5c333ad1cb!2m2!1d-74.0039575!2d40.7141238!3e0' target='blank'>Get Directions</a>");
  anthony.bindPopup("<b>St.Anthony Shelter for Renewal</b><br><a href='https://www.google.com/maps/dir//St+Anthony+Shelter+for+Renewal,+East+156th+Street,+Bronx,+NY/@40.8205346,-73.915165,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2f5ca35b9d3e1:0x89b1e205c2c91c2!2m2!1d-73.915165!2d40.8205346!3e0' target='blank'>Get Directions</a>");
  partnership.bindPopup("<b>Partnership for the Homeless</b><br><a href='https://www.google.com/maps/dir//Partnership+For+the+Homeless,+100+Pennsylvania+Ave+%232,+Brooklyn,+NY+11207/@40.675461,-73.8970259,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25c4e44e00353:0xb585ebbbbaa61e24!2m2!1d-73.8970259!2d40.675461!3e0' target='blank'<Get Directions</a>");
  nycrm.bindPopup("<b>New York City Rescue Mission</b><br><a href='https://www.google.com/maps/dir//New+York+City+Rescue+Mission,+Lafayette+Street,+New+York,+NY/@40.7297865,-73.9805614,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25a20ba92b777:0xb97c04f0980ebdbb!2m2!1d-74.0016513!2d40.7174328!3e0' target='blank'>Get Directions</a>");
  fortwash.bindPopup("<b>Fort Washington Men's Shelter</b><br><a href'=https://www.google.com/maps/dir/40.7310106,-73.9776983/Fort+Washington+Mens+Shelter,+West+168th+Street,+New+York,+NY/@40.7895777,-73.9536577,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89c2f69bf798778b:0xb5091938d4c9630c!2m2!1d-73.941217!2d40.8418743!3e0' target='blank'>Get Directions</a>");
  covenant.bindPopup("<b>Covenant House New York</b><br><a href='https://www.google.com/maps/dir/40.7310106,-73.9776983/Covenant+House+New+York,+West+41st+Street,+New+York,+NY/@40.7436585,-73.9870647,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89c2584d6fd84f13:0xaf16f778cf8e9b35!2m2!1d-73.995957!2d40.758501!3e0' target='blank'>Get Directions</a>");
  tillary.bindPopup("<b>Tillary Street Women's Center</b><br><a href='https://www.google.com/maps/dir//Tillary+Street+Women%E2%80%99s+Shelter,+Tillary+Street,+Brooklyn,+NY/@40.695566,-73.9820974,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bcaa7bd5587:0x8a7be7297f332f7!2m2!1d-73.9820974!2d40.695566' target='blank'>Get Directions</a>");
  hra.bindPopup("<b>HRA Men's Shelter</b><br><a href='https://www.google.com/maps/dir//400+E+30th+St,+New+York,+NY+10016/@40.740577,-73.9769597,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2590ef236310d:0xf9fd636671cdb359!2m2!1d-73.974771!2d40.740577' target='blank'>Get Directions</a>");
  lenox.bindPopup("<b>Lenox Hill Neighborhood House for Women</b></a><br><a href='https://www.google.com/maps/dir/40.7310106,-73.9776983/Lenox+Hill+Neighborhood+House+Women%E2%80%99s+Mental+Health+Shelter,+643+Park+Ave,+New+York,+NY+10065/@40.7480078,-73.9878899,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89c258ec1d12bdf9:0xddec6fbd41df4169!2m2!1d-73.9653575!2d40.7671771!3e0' target='blank'>Get Directions</a>");
  lenox2.bindPopup("<b>Lenox Hill Women's Mental Health Shelter</b><br><a href='https://www.google.com/maps/dir/40.7310106,-73.9776983/Lenox+Hill+Neighborhood+House+Women%E2%80%99s+Mental+Health+Shelter,+Park+Avenue,+New+York,+NY/@40.7480092,-73.9703803,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89c258ec1d12bdf9:0xddec6fbd41df4169!2m2!1d-73.9653575!2d40.7671771!3e0' target='blank'>Get Directions</a>");
}



function onMapClick() {
    alert("Click and drag on the map to move around, and scroll in and out to zoom. Select locations to get directions.");
}
show_map(mymap)
add_marker(mymap)
