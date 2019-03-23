import { createReducer } from 'redux-act';
import WebMercatorViewport from 'viewport-mercator-project';
import { FlyToInterpolator } from 'react-map-gl';
import {
  fetchCoordError,
  resetCoordError,
  changeCoordMap,
  setCitiesData,
  toggleDropdown,
  onChangeViewport,
  toggleWarning,
} from '../actions';

const fitBounds = (bounds, viewport) =>
  new WebMercatorViewport(viewport).fitBounds(bounds);

const initialState = {
  citiesData: [],
  isError: undefined,
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 53.9022,
    longitude: 27.5618,
    zoom: 1,
  },
  dropdownIsOpen: undefined,
  warningIsOpen: undefined,
};

export default createReducer(
  {
    [fetchCoordError]: state => ({
      ...state,
      isError: true,
    }),
    [resetCoordError]: state => ({
      ...state,
      isError: false,
      error: null,
    }),
    [onChangeViewport]: (state, newViewport) => ({
      ...state,
      viewport: newViewport,
    }),
    [changeCoordMap]: (state, coords) => {
      const { viewport } = state;
      const bounds = [[coords[0], coords[1]], [coords[2], coords[3]]];
      const { latitude, longitude, zoom } = fitBounds(bounds, viewport);

      return {
        ...state,
        viewport: {
          ...state.viewport,
          latitude: latitude,
          longitude: longitude,
          zoom: zoom,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 2000,
        },
      };
    },
    [setCitiesData]: (state, options) => ({
      ...state,
      citiesData: options,
    }),
    [toggleDropdown]: (state, isOpen) => ({
      ...state,
      dropdownIsOpen: isOpen,
    }),
    [toggleWarning]: state => ({
      ...state,
      warningIsOpen: !state.warningIsOpen,
    }),
  },
  initialState
);
