function new_1() {
  document.getElementById("video__src").style.border = "none";
}
function prev() {
  document.getElementById("video__src").autoplay = true;
  var source = document.getElementById("video__src").src;

  var src_str = source.substring(source.length - 6, source.length - 1);
  console.log(src_str);
  if (src_str == "") {
    document.getElementById("video__src").src = "./video/4.mp4";

  } else {
    var i;
    for (i = 0; i < src_str.length; i++) {
      var char = src_str.charAt(i);
      if (char == 1) {
        document.getElementById("video__src").src = "./video/4.mp4";
      } else if (char == 2) {
        document.getElementById("video__src").src = "./video/1.mp4";
      } else if (char == 3) {
        document.getElementById("video__src").src = "./video/2.mp4";
      } else if (char == 4) {
        document.getElementById("video__src").src = "./video/3.mp4";
      }
    }
  }
}
function next() {
  document.getElementById("video__src").autoplay = true;
  var source = document.getElementById("video__src").src;

  var src_str = source.substring(source.length - 6, source.length - 1);
  
  if (src_str == "") {
    document.getElementById("video__src").src = "./video/2.mp4";

  } else {
    var i;
    for (i = 0; i < src_str.length; i++) {
      var char = src_str.charAt(i);
      if (char == 1) {
        document.getElementById("video__src").src = "./video/2.mp4";
      } else if (char == 2) {
        document.getElementById("video__src").src = "./video/3.mp4";
      } else if (char == 3) {
        document.getElementById("video__src").src = "./video/4.mp4";
      } else if (char == 4) {
        document.getElementById("video__src").src = "./video/1.mp4";
      }
    }
  }
}

function optionCheck() {
	var service = document.getElementById("services").value
	if (service == 'car rental') {
		document.getElementById('car_type').style.display = 'block'
	}else{
		document.getElementById('car_type').style.display = 'none'
	}
}
function formCheck1() {
	var validation = /^[A-Za-z]+$/;
	var f_name = document.getElementById("f_name").value;
	var l_name = document.getElementById("l_name").value;
	var p_number = document.getElementById("p_number").value;
	var e_mail = document.getElementById("e_mail").value;

	var f_name = document.getElementById("f_name").value;
	f_name = f_name.charAt(0).toUpperCase() + f_name.slice(1).toLowerCase();

	var l_name = document.getElementById("l_name").value;
	l_name = l_name.charAt(0).toUpperCase() + l_name.slice(1).toLowerCase();

	if (!l_name.match(validation) && !f_name.match(validation)) {
		document.getElementById("l_name").placeholder = "Only letters allowed!";
		document.getElementById("l_name").value = "";
		document.getElementById("f_name").placeholder = "Only letters allowed!";
		document.getElementById("f_name").value = "";
	} else if (!l_name.match(validation)) {
		document.getElementById("l_name").placeholder = "Only letters allowed!";
		document.getElementById("l_name").value = "";
	} else if (!f_name.match(validation)) {
		document.getElementById("f_name").placeholder = "Only letters allowed!";
		document.getElementById("f_name").value = "";
	} else if (f_name !== ' ' && l_name !== ' ' && p_number !== ' ' && e_mail !== ' '){
		alert('Your reservation has been done sucesfully!')
	}
	

}

function formCheck2() {
	var validation = /^[A-Za-z]+$/;
	var f_name = document.getElementById("f_name").value;
	var l_name = document.getElementById("l_name").value;
	f_name = f_name.charAt(0).toUpperCase() + f_name.slice(1).toLowerCase();
	var l_name = document.getElementById("l_name").value;
	l_name = l_name.charAt(0).toUpperCase() + l_name.slice(1).toLowerCase();

	if (!l_name.match(validation) && !f_name.match(validation)) {
		document.getElementById("l_name").placeholder = "Only letters allowed!";
		document.getElementById("l_name").value = "";
		document.getElementById("f_name").placeholder = "Only letters allowed!";
		document.getElementById("f_name").value = "";
	} else if (!l_name.match(validation)){
		document.getElementById("l_name").placeholder = "Only letters allowed!";
		document.getElementById("l_name").value = "";
	} else if (!f_name.match(validation)) {
		document.getElementById("f_name").placeholder = "Only letters allowed!";
		document.getElementById("f_name").value = "";
	}
	alert('Enjoy your visit in our page, ' + f_name + ' ' + l_name);
	}
	function link_dis() {
		if (f_name !== ' ' && l_name !== ' ') {
			document.getElementById('sign_btn').style.pointerEvents = 'auto'
		} 
	}


function link() {
	window.alert("Please fill the form!")
}

function initMap() {

	var opt = {
		center: { lat: 51.5285582, lng: -0.2416807 },
		zoom: 12,
		styles: [
			{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{ color: '#263c3f' }]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#6b9a76' }]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{ color: '#38414e' }]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#212a37' }]
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#9ca5b3' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{ color: '#746855' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#1f2835' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#f3d19c' }]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{ color: '#2f3948' }]
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{ color: '#17263c' }]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#515c6d' }]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{ color: '#17263c' }]
			}
		]
	};

	var map = new google.maps.Map(
		document.getElementById('googleMap'),  opt);
}

function slider() {
	document.getElementById('slide_button').style.display = "none";
	document.getElementById('slider_block').style.display = "block";
}

function next_prev() {
	var source = document.getElementById("slide__img").src;
	var src_str = source.substring(source.length - 5, source.length);
	console.log(src_str)
	if (src_str == "") {
		document.getElementById("slide__img").src = "./media/21.jpg";

	} else {
		var i;
		for (i = 0; i < src_str.length; i++) {
			var char = src_str.charAt(i);
			if (char == 1) {
				document.getElementById("slide__img").src = "./media/22.jpg";
			} else if (char == 2) {
				document.getElementById("slide__img").src = "./media/23.jpg";
			} else if (char == 3) {
				document.getElementById("slide__img").src = "./media/24.jpg";
			} else if (char == 4) {
				document.getElementById("slide__img").src = "./media/25.jpg";
			} else if (char == 5) {
				document.getElementById("slide__img").src = "./media/26.jpg";
			} else if (char == 6) {
				document.getElementById("slide__img").src = "./media/27.jpg";
			} else if (char == 7) {
				document.getElementById("slide__img").src = "./media/28.jpg";
			} else if (char == 8) {
				document.getElementById("slide__img").src = "./media/21.jpg";
			} 
		}
	}
}

function prev_img() {
	var source = document.getElementById("slide__img").src;
	var src_str = source.substring(source.length - 5, source.length);
	console.log(src_str)
	if (src_str == "") {
		document.getElementById("slide__img").src = "./media/21.jpg";

	} else {
		var i;
		for (i = 0; i < src_str.length; i++) {
			var char = src_str.charAt(i);
			if (char == 8) {
				document.getElementById("slide__img").src = "./media/27.jpg";
			} else if (char == 7) {
				document.getElementById("slide__img").src = "./media/26.jpg";
			} else if (char == 6) {
				document.getElementById("slide__img").src = "./media/25.jpg";
			} else if (char == 5) {
				document.getElementById("slide__img").src = "./media/24.jpg";
			} else if (char == 4) {
				document.getElementById("slide__img").src = "./media/23.jpg";
			} else if (char == 3) {
				document.getElementById("slide__img").src = "./media/22.jpg";
			} else if (char == 2) {
				document.getElementById("slide__img").src = "./media/21.jpg";
			} else if (char == 1) {
				document.getElementById("slide__img").src = "./media/28.jpg";
			}
		}
	}
}