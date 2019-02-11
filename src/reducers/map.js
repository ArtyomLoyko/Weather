import { createReducer } from 'redux-act';
import WebMercatorViewport from 'viewport-mercator-project';
import enhanceMapReducer from 'redux-map-gl';
import { fromJS } from 'immutable';
import {
  fetchCoordError,
  resetCoordError,
  changeCoordMap,
  setCitiesData,
  toggleDropdown,
} from '../actions';

const initialState = {
  citiesData: [],
  isError: undefined,
  error: undefined,
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 53.9022,
    longitude: 27.5618,
    zoom: 1,
    isError: false,
    error: null,
  },
  dropdownIsOpen: undefined,
};

export default createReducer(
  {
    [fetchCoordError]: (state, error) => ({
      ...state,
      isError: true,
      error: error,
    }),
    [resetCoordError]: state => ({
      ...state,
      isError: false,
      error: null,
    }),
    [changeCoordMap]: (state, coords) => {
      console.log('change');
      const newState = { ...state };
      const viewport = newState.viewport; /*.toJS()*/
      const { longitude, latitude, zoom } = new WebMercatorViewport(
        viewport
      ).fitBounds([[coords[1], coords[0]], [coords[3], coords[2]]]);
      viewport.latitude = longitude;
      viewport.longitude = latitude;
      viewport.zoom = zoom;
      // const viewportImmut = fromJS(viewport)
      newState.viewport = viewport; /*Immut*/

      return newState;
    },
    [setCitiesData]: (state, options) => ({
      ...state,
      citiesData: options,
    }),
    [toggleDropdown]: (state, isOpen) => ({
      ...state,
      dropdownIsOpen: isOpen,
    }),
  },
  initialState
);
