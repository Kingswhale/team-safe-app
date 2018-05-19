// With the direction api you can search for several modes of transportation, including transist, riving, ealking andor cycling
// Return multi-part directions using a series of a waypoints
// Specify origin, destination, and waypoints as text strings


// THe DirectionRequest objects literal contains  the followinf fields
/*    
    {
            origin: LatLng, e.g ('Chicago, IL'), LatLng value or as a google.map.place
            destination: Latlng,
            travelMode: travelmode,
            transistOption: TransistsOption,
            transitOptions: TransitOptions,
            drivingOptions: DrivingOptions,
            unitSystem: UnitSystem,
            waypoints[]: DirectionsWaypoint,
            optimizeWaypoints: Boolean,
            provideRouteAlternatives: Boolean,
            avoidFerries: Boolean,
            avoidHighways: Boolean,
            avoidTolls: Boolean,
            region: String
    }

    */




function initMap(){
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:13,
        center:{lat:9.8965, lng:8.8583}   
    });  //binds google map to the map id
    directionsDisplay.setMap(map); // displays the map

    // cities
    var bukuru = new google.maps.LatLng(9.7653, 8.8597);
    var old_airport = new google.maps.LatLng(9.57, 8.51);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };

      document.addEventListener('load', onChangeHandler);
      document.addEventListener('load', onChangeHandler);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay){
        directionsService.route({
            origin: bukuru,
            destination:old_airport,
            travelMode: 'DRIVING'
        }, function(response, status){
            if(status == 'OK'){
                directionsDisplay.setDirection(response);
            } else{
                window.alert('Directions request failed due to ' + status);
            }
        });
    }




































// Direction Api
// function initMap() {
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer();
//     var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//     var mapOptions = {
//       zoom:7,
//       center: chicago
//     }
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     directionsDisplay.setMap(map);
//   }
  
//   function calcRoute() {
//     var start = document.getElementById('start').value;
//     var end = document.getElementById('end').value;
//     var request = {
//       origin: start,
//       destination: end,
//       travelMode: 'DRIVING'
//     };
//     directionsService.route(request, function(result, status) {
//       if (status == 'OK') {
//         directionsDisplay.setDirections(result);
//       }
//     });
//   }
//     /*

// function main(){
//     // map center
//     var myLatlng = new google.maps.LatLng(8.0, 7.9);

//     // map options
//     var myOptions = {
//         zoom:13,
//         center:myLatlng,
//         disableDefaultUI:true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     // render Basemap
//     map = new google.maps.Map(document.getElementById('map'), myOptions);
 
//     // Create services for later rendering of directions
//     var directionsService = new google.maps.DirectionsService();
//     var directionDisplay = new google.maps.DirectionsRenderer();
//         directionDisplay.setMap(map)  // maps the map id to the directionDisplay


    // The location of the exploration
//     var exploratorium = new google.maps.LatLng(7.0123   , 7.9)

//     // Our CARTO visualization
//     var vizjson_url = "https://documentation.carto.com/api/v2/viz/4a885510-d6fb-11e4-aedb-0e4fddd5de28/viz.json";

//     cartodb.createLayer(map, vizjson_url)
//     .addTo(map)  // adds the id
//     .done(function(layers){
//         var subLayer = layers.getSubLayer(0);
//         subLayer.setInteraction(); // Interaction for the layer must be enabled
//         layers.on('featureClick', function(e, latlng, pos, data){
//             // the location of the clicked school
//             var school = new google.maps.LatLng(latlng[0], latlng[1]);
//             // Our DIrection Route
//             var request = {
//                 origin:school,
//                 destination:exploratorium,
//                 travelMode:google.maps.TravelModel.DRIVING
//             };

//             // use route method to generate directions
//             directionsService.route(request, function(reponse, status){
//             if(status == google.maps.DirectionStatus.OK){
//                 directionsDisplay.setDirections(response);
//             }
//         });
//     });
  
//   });
// }

// window.onload = main;  // window onload
