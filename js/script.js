 var map;
 function initialize() {
 var mapOptions = {
 zoom: 15, // zoom do mapa
 center: {lat: -21.773509, lng: -43.350780} // latitude e longitude inicial do mapa.
 };
 map = new google.maps.Map(document.getElementById('map'),
 mapOptions);
 var marker = new google.maps.Marker({ 
 position: {lat: -21.773509, lng: -43.350780}, // latitude e longitude do marcador (pin), normalmente é o mesmo do mapa mostrado na linha 24.
 map: map
 });
 var infowindow = new google.maps.InfoWindow({
 content: '<p>Endereço:<br>Rua: Morais e Castro, n°: 722<br> Bairro: Alto dos Passos' + marker.getPosition() + '</p>'
 });
 google.maps.event.addListener(marker, 'click', function() {
 infowindow.open(map, marker);
 });
 }
 google.maps.event.addDomListener(window, 'load', initialize);
