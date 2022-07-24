import {
  DATA_LOCATIONS,
  SET_LOCATIONS,
  GET_LOCATIONS,
  DATA_SELECTED_LOCATION,
  SET_SELECTED_LOCATION
} from './actionTypes';

export const dataLocations = () => {
  return {
    type: DATA_LOCATIONS,
  };
};

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

export const dataSelectedLocation = () => {
  return {
    type: DATA_SELECTED_LOCATION,
  };
};

export const setSelectedLocation = (location) => {
  return {
    type: SET_SELECTED_LOCATION,
    payload: location
  };
};