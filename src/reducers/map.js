import { createReducer } from 'redux-act';
import WebMercatorViewport from 'viewport-mercator-project';
import {
  fetchCoordError,
  resetCoordError,
  changeCoordMap,
  setCitiesData,
  toggleDropdown,
  onChangeViewport,
  toggleWarning,
} from '../actions';

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
    [changeCoordMap]: (state, coords) => ({
      ...state,
      viewport: new WebMercatorViewport(state.viewport).fitBounds([
        [coords[0], coords[1]],
        [coords[2], coords[3]],
      ]),
    }),
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
