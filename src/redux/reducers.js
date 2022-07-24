import { combineReducers } from "redux";
import {
  DATA_LOCATIONS,
  DATA_SELECTED_LOCATION,
  SET_LOCATIONS,
  SET_SELECTED_LOCATION,
} from './actionTypes';

const initialState = {
  locations: null,
  selectedLocation: null,
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOCATIONS:
      return state.locations;
    case SET_LOCATIONS:
      state = { ...state, locations: action.payload }
      return state;
    case DATA_SELECTED_LOCATION:
      return state.selectedLocation;
    case SET_SELECTED_LOCATION:
      state = { ...state, selectedLocation: action.payload }
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  LocationReducer,
});

export default rootReducer;