import { combineReducers } from "redux";
import {
  SET_LOCATIONS,
  SET_SELECTED_LOCATION,
} from './actionTypes';

const initialState = {
  locations: null,
  selectedLocation: null,
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      state = { ...state, locations: action.payload }
      return state;
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