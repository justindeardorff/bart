//Javascript function file
//CS75 Project 2 - BART
//Justin Deardorff

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script>
//declare vars
var marker, myLatLng, map, image, routes;

function getRoutes(){
  $.ajax({
    url:"http://api.bart.gov/api/route.aspx?cmd=routes&key=MW9S-E7SL-26DU-VV8V",
    datatype:xml,
    success: function(data){
      $routes=$("routeID", data);
    }
  });
};





</script>
