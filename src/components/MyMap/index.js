import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "400px"
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script"
  });
  const { selectedLocation } = useSelector((state) => state.LocationReducer);
  const defaultLocation = {
    id: 123,
    pos: {
      lat: -6.200000,
      lng: 106.816666
    }
  }
  const location = selectedLocation || defaultLocation;

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={14}
      center={location.pos}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        <Marker key={location.id} position={location.pos} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;