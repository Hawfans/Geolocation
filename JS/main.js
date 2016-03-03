document.addEventListener("DOMContentLoaded", function(){

getLocation();
});

function getLocation() {
if(navigator.geolocation) {
    var params = {
        enableHighAccuracy: true, 
        timeout: 360000, 
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);
    }
    else {
        function gpsError(error){
    var errors = {
     1: 'Permission denied',
     2: 'Position unavailable',
     3: 'Request timeout'
        };
        alert("Error: " + errors[error.code]);
        }
    }
}
 
 function reportPosition(position) {
 	var height = "400";
 	var width = "400";
 	var latitude = position.coords.latitude;
 	var longitude = position.coords.longitude;
 	var key = "AIzaSyBK_AKPLPR9LzI7zj9geXvwioi1EaIoYGU";
 	var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
         "&zoom=14&size=" + width + "x" + height + "&maptype=roadmap&markers=color:red%7C" + latitude + "," + longitude + "&key=" + key;
     console.log(url);
     var draw = document.createElement("canvas");
     document.querySelector("body").appendChild(draw);
     draw.width = width;
     draw.height = height;
     context = draw.getContext("2d");
     context.src = url;

    var map = new Image();

    map.onload = function () {
    	context.drawImage(map, 0 , 0, 400, 400);
    };
    map.src = url;
}