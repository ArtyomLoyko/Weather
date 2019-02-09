import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { MAPBOX_TOKEN } from './../constants';
import {
    fetchCoordRequest,
    resetCoordError,
    CHANGE_COORD_MAP,
    SET_COORD_POPUP,
    setCitiesData,
} from '../actions';

export function* fetchCoord(action) {
    const city = action.payload;
    try {
        yield put(fetchCoordRequest());

        const response = yield call(
            axios.get,
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${MAPBOX_TOKEN}`
        );

        const options = response.data.features.map(
            place =>
                (place = { value: place.place_name, label: place.place_name })
        );

        yield put(setCitiesData(options));
        // yield put({
        //     type: CHANGE_COORD_MAP,
        //     payload: response.data.features[0].bbox,
        // });

        // yield put({
        //     type: SET_COORD_POPUP,
        //     payload: response.data.features[0].center,
        // });
    } catch (error) {
        yield put(resetCoordError());
    }
}
