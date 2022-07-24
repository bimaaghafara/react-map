import { debounce, put, call } from "redux-saga/effects";
import { GET_LOCATIONS } from "./actionTypes";
import { setLocations } from "../redux/actions";
import axios from 'axios';

function* getLocations({ payload }) {
  const url = `https://api.locationiq.com/v1/autocomplete?key=pk.0dbade6f503938e2084d999c59ee906d&q=${payload}`
  const getLocationsReq = async () => await axios.get(url).then(response => response.data);
  try {
    const response = yield call(getLocationsReq);
    yield put(setLocations(
      response.map(res => ({
        ...res,
        id: `${res.place_id}-${res.osm_id}`,
        label: res.display_name,
        pos: {
          lat: Number(res.lat),
          lng: Number(res.lon)
        }
      }))
    ));
  } catch (error) {
    console.log(error)
  }
}

function* LocationSaga() {
  yield debounce(1000, GET_LOCATIONS, getLocations);
}

export default LocationSaga;