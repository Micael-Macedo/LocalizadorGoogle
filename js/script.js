// Initialize and add the map
function initMap() {
    const CONFIGURATION = {
        "ctaTitle": "Checkout",
        "mapOptions": {"center":{"lat": -12.974722,"lng": -38.5124},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":10,"zoomControl":true,"maxZoom":22,"mapId":""},
        "mapsApiKey": "YOUR_API_KEY_HERE",
        "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":true,"ctaControl":true}
    };
    // The location of Uluru
    const localizacao = { lat: -12.974722, lng: -38.5124 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: CONFIGURATION.mapOptions.zoom,
        center: { lat:  -12.974722, lng: -38.5124 },
        mapTypeControl: false,
        fullscreenControl: CONFIGURATION.mapOptions.fullscreenControl,
        zoomControl: CONFIGURATION.mapOptions.zoomControl,
        streetViewControl: CONFIGURATION.mapOptions.streetViewControl
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: localizacao,
      map: map,
    });
  }
  
  window.initMap = initMap;