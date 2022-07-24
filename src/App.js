import React from "react";
import { Autocomplete, TextField, Box } from '@mui/material';
import MyMap from "./components/MyMap";
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.LocationReducer);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (query) {
      dispatch(getLocations(query));
    }
  }, [query])

  const [myPlaces, setMyPlaces] = React.useState([
    { id: "place1", pos: { lat: 39.09366509575983, lng: -94.58751660204751 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } }
  ]);

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

  return (
    <Box sx={{ p: 2 }}>
      <Autocomplete
        options={query && locations ? locations : []}
        sx={{ width: 300 }}
        inputValue={query}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        renderOption={(props, option) => <Box {...props} key={option.id}>{option.label}</Box>}
        renderInput={(params) => <TextField {...params} label="Search Location" />}
        noOptionsText="Type Something..."
      />
      <button onClick={handleClickTest}>Change</button>
      <button onClick={handleClickRevert}>revert</button>
      <MyMap myPlaces={myPlaces} />
    </Box>
  )
}

export default App;
