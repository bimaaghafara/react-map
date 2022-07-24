import {
  SET_LOCATIONS,
  GET_LOCATIONS,
  SET_SELECTED_LOCATION
} from './actionTypes';

export const setLocations = (locations) => {
  return {
    type: SET_LOCATIONS,
    payload: locations
  };
};

export const getLocations = (query) => {
  return {
    type: GET_LOCATIONS,
    payload: query
  };
};

export const setSelectedLocation = (location) => {
  return {
    type: SET_SELECTED_LOCATION,
    payload: location
  };
};