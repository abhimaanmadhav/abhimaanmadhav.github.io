var directionsDisplay ;
var directionsService;
var map;

function initMap(){
    var myOptions = {
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(12.3025598,76.6196739)
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
	directionsDisplay.setPanel(document.getElementById("directions"));
      directionsService = new google.maps.DirectionsService();
    $("#routeMode").on("change", function() { calcRoute(); });
    $("#routeGo").on("click", function() { calcRoute(); });
    $("#routeClear").on("click", function() { directionsDisplay.setDirections({ routes: [] }); });
    directionsDisplay.setMap(map);
    

    
};


function calcRoute() {
    var request = {
        origin: new google.maps.LatLng(12.3025598,76.6196739),
        destination: $("#routeFrom").val(),
        travelMode: google.maps.TravelMode[$("#routeMode").val()]
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}