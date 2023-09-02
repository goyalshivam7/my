function initMap() {

    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
var A = [1, 2, 3, 4, 5, 6, 7]
for (var i = 0; i < 6; i++) {
    if (A[i] == 5) {
        console.log(i);

    }
}