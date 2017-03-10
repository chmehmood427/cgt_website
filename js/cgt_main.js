/* global $, google */
$(document).ready(function() {

  // Add scrollspy to <body>
  $("body").scrollspy({
    target: ".navbar",
    offset: 80
  });

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

      // Fold navbar list after click
      if ($("#navbar-toggle-button:visible").length !== 0) {
        $("#navbar-toggle-button").click();
      }
    }
  });

  //Add smooth scrolling on all links inside the title section
  $("a.nav-btn").on("click", function(event) {
    
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        window.location.hash = hash;
      });

    }
  });

  // Google Maps
  var get_latitude = $("#google-map").data("latitude");
  var get_longitude = $("#google-map").data("longitude");

  var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
  var mapOptions = {
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    center: myLatlng,
    styles:

    [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 13
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#144b53"
      }, {
        "lightness": 14
      }, {
        "weight": 1.4
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#08304b"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#0c4152"
      }, {
        "lightness": 5
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#0b434f"
      }, {
        "lightness": 25
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#0b434f"
      }, {
        "lightness": 25
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#0b434f"
      }, {
        "lightness": 25
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "color": "#146474"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#021019"
      }]
    }]
  };

  var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

  var icon = {
    url: "./images/map_marker.png", // url
    scaledSize: new google.maps.Size(40, 55) // scaled size
  };

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: icon
  });

});
