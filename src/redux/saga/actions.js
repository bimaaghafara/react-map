import {
  GET_LOCATIONS,
} from './actionTypes';

export const getLocations = (query) => {
  return {
    type: GET_LOCATIONS,
    payload: query
  };
};