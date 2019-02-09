import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import enhanceMapReducer from 'redux-map-gl';

import map from './map';
import weather from './weather';
import popup from './popup';

export default combineReducers({
    form: formReducer,
    // map: enhanceMapReducer(map, {
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    //   latitude: 53.9022,
    //   longitude: 27.5618,
    //   zoom: 1,
    //   isError: false,
    //   error: null,
    // }),
    map,
    weather,
    popup,
});
