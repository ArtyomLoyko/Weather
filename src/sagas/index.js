import { takeLatest, all } from 'redux-saga/effects';

import { GET_FORECAST } from '../constants';

import { getForecast } from './weatherSaga';

export default function* rootSaga() {
    yield all([takeLatest(GET_FORECAST, getForecast)]);
}
