import React from "react";
import { Autocomplete, TextField, Box } from '@mui/material';
import MyMap from "./components/MyMap";
import { useDispatch, useSelector } from 'react-redux';
import { getLocations, setSelectedLocation } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const { selectedLocation, locations } = useSelector((state) => state.LocationReducer);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (query) {
      dispatch(getLocations(query));
    }
  }, [query])

  return (
    <Box sx={{ p: 3 }}>
      <h2>React Map</h2>
      <Autocomplete
        value={selectedLocation}
        onChange={(event, newValue) => {
          dispatch(setSelectedLocation(newValue));
        }}
        filterOptions={(x) => x}
        options={query && locations ? locations : []}
        sx={{ width: '100%', maxWidth: '800px', mb: 2 }}
        inputValue={query}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        renderOption={(props, option) => <Box {...props} key={option.id}>{option.label}</Box>}
        renderInput={(params) => <TextField {...params} label="Search Location" />}
        noOptionsText="Type Something..."
      />
      <MyMap />
    </Box>
  )
}

export default App;
