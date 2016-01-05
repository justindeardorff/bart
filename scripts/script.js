//Javascript function file
//CS75 Project 2 - BART
//Justin Deardorff

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


//declare vars
var marker, myLatLng, map, image, routes;

/*
function getRoutes(){
  $.ajax({
    url:"http://api.bart.gov/api/route.aspx?cmd=routes&key=MW9S-E7SL-26DU-VV8V",
    datatype:xml,
    success: function(data){
      $routes=$("routeID", data);
    }
  });
};
*/
var myLatLng = {lat: 37.783, lng: -122.416};

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.783, lng: -122.416}
    });
    
    var marker= new google.maps.Marker({
        position: {lat: 37.783, lng: -122.416},
        map: map,
        title: 'Welcome to SF, yo!'  
    });

};

function addMarker(){
    var marker= new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Welcome to SF, yo!'
    });
};





