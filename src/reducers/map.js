import WebMercatorViewport from 'viewport-mercator-project';
import { fromJS } from 'immutable';

import {
    FETCH_COORD_ERROR,
    RESET_COORD_ERROR,
    CHANGE_COORD_MAP,
} from '../constants';

const map = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COORD_ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload,
            };
        case RESET_COORD_ERROR:
            return {
                ...state,
                isError: false,
                error: null,
            };
        case CHANGE_COORD_MAP:
            const newState = { ...state };
            const viewport = newState.viewport.toJS();

            const coords = action.payload;
            const { longitude, latitude, zoom } = new WebMercatorViewport(
                viewport
            ).fitBounds([[coords[1], coords[0]], [coords[3], coords[2]]]);

            viewport.latitude = longitude;
            viewport.longitude = latitude;
            viewport.zoom = zoom;

            const viewportImmut = fromJS(viewport);
            newState.viewport = viewportImmut;

            return newState;
        default:
            return state;
    }
};

export default map;
