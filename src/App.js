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

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script"
  });

  const [map, setMap] = React.useState(null);

  const [myPlaces, setMyPlaces] = React.useState([
    { id: "place1", pos: { lat: 39.09366509575983, lng: -94.58751660204751 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } }
  ]);

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

  const handleClickTest = () => {
    setMyPlaces([
      { id: "place3", pos: { lat: 39.07602397235644, lng: -94.5184089401211 } }
    ]);
  };

  const handleClickRevert = () => {
    setMyPlaces([
      {
        id: "place1",
        pos: { lat: 39.09366509575983, lng: -94.58751660204751 }
      },
      { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } }
    ]);
  };

  return isLoaded ? (
    <>
      <button onClick={handleClickTest}>Change</button>
      <button onClick={handleClickRevert}>revert</button>
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
    </>
  ) : (
    <></>
  );
}

export default App;
