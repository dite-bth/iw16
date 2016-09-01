function initMap() {

	var me = {
		info: '<strong>Masse</strong><br>\
					Hökvägen 3<br> 37030 Rödeby<br>\
					<a href="http://jag2">www</a>',
					lat: 56.258243,
					long: 15.629830
	};

	var karlshamn = {
		info: '<strong>Campus Karlshamn</strong><br>\
					Pirgatan<br> Karlshamn 60657<br>\
					<a target="_blank" href="https://www.bth.se/om-bth/campus/#section-campus-karlshamn">www</a>',
		lat: 56.164240,
		long: 14.866022
	};

	var karlskrona = {
		info: '<strong>Campus Gräsvik</strong><br>\r\
					Valhallagatan<br> Karlskrona<br>\
					<a href="https://www.bth.se/om-bth/campus/#section-campus-grasvik-karlskrona">wwws</a>',
		lat: 56.182302,
		long: 15.590746
	};

	var kastellet = {
		info: '<strong>Kastellet</strong><br>\r\
					Östersjön<br> Karlshamn<br>\
					<a href="http://www.bth.se">www</a>',
		lat: 56.160180,
		long: 14.865595
	};


	var locations = [
      [me.info, me.lat, me.long, 0],
      [karlshamn.info, karlshamn.lat, karlshamn.long, 1],
      [karlskrona.info, karlskrona.lat, karlskrona.long, 2],
			[kastellet.info, kastellet.lat, kastellet.long, 3],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(56.164240, 14.866022),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
