import { takeLatest, all } from 'redux-saga/effects';

import * as a from './../actions';

import { getForecast } from './weather';
import { fetchCoord } from './map';

export default function* rootSaga() {
  yield all([
    takeLatest(a.getForecast, getForecast),
    takeLatest(a.fetchCoord, fetchCoord),
  ]);
}
