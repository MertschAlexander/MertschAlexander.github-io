// Form Alert
function formConfirmation() {
  alert("Your form has been submitted!");
}

// Geolocation
var x = document.getElementById("geolocation");
function getLocation() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition);
 } else {
 x.innerHTML = "Your browser does not support Geolocation, please try a different one.";
 }
}
function showPosition(position) {
 x.innerHTML = "Latitude: " + position.coords.latitude +
 br>Longitude: " + position.coords.longitude;
}