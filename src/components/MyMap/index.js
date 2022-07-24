import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

function MyMap({
  myPlaces,
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script"
  });

  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      myPlaces.map((place) => {
        bounds.extend(place.pos);
        return place.id;
      });
      map.fitBounds(bounds);
      map.setZoom(13);
    }
  }, [myPlaces, map]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    myPlaces.map((place) => {
      bounds.extend(place.pos);
      return place.id;
    });
    map.fitBounds(bounds);
    map.setZoom(13);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {myPlaces.map((place) => (
          <Marker key={place.id} position={place.pos} />
        ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;