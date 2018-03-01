function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.878839, lng:-117.235901};
 	var map = new google.maps.Map(document.getElementById('map'), {
 		center: ucsd_ltlng,
 		zoom: 17
 	});

 	var marker = new google.maps.Marker({
 		position:ucsd_ltlng,
 		map:map,
 		title:"UCSD"
 	});
}