import React, { useEffect, useRef } from "react";

function MapExample() {
  const mapRef = useRef(null);

  useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        // Estilos del mapa
      ],
    };

    map = new google.maps.Map(mapRef.current, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Notus React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Notus React</h2>' +
      "<p>A free Admin for Tailwind CSS, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map, marker);
    });
  }, []);

  return (
    <div className="relative w-full rounded h-600-px">
      <div className="rounded h-full" ref={mapRef} />
    </div>
  );
}

export default MapExample;
