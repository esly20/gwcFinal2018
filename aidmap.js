<!DOCTYPE>
<html>
  <head>
    <link rel ="stylesheet" href="finalproject.css">

    <!-- The following should NOT be deleted. Needed for map -->
    <style>
    #mapid {height: 500px; width: 900px}
    </style>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css"
      integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
      crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"
      integrity="sha512-tAGcCfR4Sc5ZP5ZoVz0quoZDYX5aCtEm/eu1KhSLj2c9eFrylXZknQYmxUssFaVJKvvc0dJQixhGjG2yXWiV9Q=="
      crossorigin=""></script>

  </head>
<body>
    <div id="google_translate_element"></div>
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
            {pageLanguage: 'en'},
            'google_translate_element'
        );
    }
</script>
<script src="element.js"></script>
    <div class='header'>
          <h1>Aid</h1>
        </div>
          <div class='navbar'>
          <a href='mainpage.html'>Home</a>
          <a href='getinvolved.html'>Get involved</a>
          <a href='learnmore.html'>Learn More</a>
     </div>
     <center><h2>Homeless Shelters and Food Banks in NYC</h2></center>
     <div class='body'>

       <div class='row'>
         <div class='column2'>
           <center>


             <a href='http://nycrescue.org/' target="_blank"><strong>New York City Rescue Mission</strong></a>
             <p>90 Lafayette St, New York, NY 10013<p>
             <p>Open 24 Hours<p>
             <a href="http://www.projectrenewal.org/program-list/2013/3/6/fort-washington-mens-shelter"  target="_blank"><strong>Fort Washington's Men Shelter</strong></a>
             <p>651 W 168th St, New York, NY 10032<p>
             <a href='https://ny.covenanthouse.org/'  target="_blank"><strong>Covenant House New York</strong></a>
             <p>460 W 41st St, New York, NY 10036<p>
             <p>Open 24 Hours</p>
             <a href='http://www.iclinc.net/search-results/tillary-street-womens-shelter/'  target="_blank"><strong>Tillary Street Women's Shelter</strong></a>
             <p>200 Tillary St, Brooklyn, NY 11201<p>
             <a href='http://www1.nyc.gov/'  target="_blank"><strong>HRA Men's Shelter</strong></a>
             <p>400 E 30th St, New York, NY 10016<p>
             <p>Open 24 Hours<p>
             <a href='http://www.lenoxhill.org/wmhsparkavearmory/'  target="_blank"><strong>Lenox Hill Neighborhood House Women</strong></a>
             <p>643 Park Ave, New York, NY 10065<p>
             <a href='http://www.coalitionforthehomeless.org/'  target="_blank"><strong>Coalition for the Homeless</strong></a>
             <p>129 Fulton St, New York, NY 10038<p>
            </div>









          </center>
            <div class='column3'>
              <center>
              <a href='https://www1.nyc.gov/'  target="_blank"><strong>Family Shelters Bronx</strong></a>
              <p>151 E 151st St, Bronx, NY 10454<p>
              <P>Open 24 Hours<p>
              <a href='http://stanthonyshelter.org/'  target="_blank"><strong>St.Anthony Shelter for Renewal</strong></a>
              <p>410 E 156th St, Bronx, NY 10455<p>
              <a href='https://www.safehorizon.org/'  target="_blank"><strong>Safe Horizon</strong></a>
              <p> 189 Montague St, Brooklyn, NY 11201<p>
              <a href='http://www.partnershipforthehomeless.org/'  target="_blank"><strong>Parterniship for the Homeless</strong></a>
              <p>305 7th Ave 14 fl, New York, NY 10001<p>
              <a href='https://www.cityharvest.org/'  target="_blank"><strong>City Harvest</strong></a>
              <p>6 E 32nd St, New York, NY 10016<p>


              </center>
            </div>
          </div>

      </div>


    <center>
     <!-- For Map -->
     <div id="mapid"></div>
     <script src="mapfunctions.js"></script>
    </center>

    </body>
</html>
