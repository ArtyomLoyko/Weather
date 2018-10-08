import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

import { getCity, getDay } from '../selectors';

import {
    MAPBOX_TOKEN,
    OPEN_WEATHER_TOKEN,
    RESET_COORD_ERROR,
    FETCH_COORD_REQUEST,
    FETCH_COORD_ERROR,
    CHANGE_COORD_MAP,
    SET_COORD_POPUP,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR,
    SHOW_POPUP,
    CLOSE_POPUP,
} from '../constants';

const createDayPeriods = day => {
    const currentDate = new Date();
    const yymmdd = `${currentDate.getFullYear()}-${currentDate.getMonth() +
        1}-${currentDate.getDate() + day}`;
    const night = moment(`${yymmdd} 03:00:00`).format('YYYY-MM-DD HH:mm:ss');
    const morning = moment(`${yymmdd} 09:00:00`).format('YYYY-MM-DD HH:mm:ss');
    const afternoon = moment(`${yymmdd} 15:00:00`).format(
        'YYYY-MM-DD HH:mm:ss'
    );
    const evening = moment(`${yymmdd} 21:00:00`).format('YYYY-MM-DD HH:mm:ss');
    return [night, morning, afternoon, evening];
};

const filterForcast = (dayPeriods, weather, forecast) => {
    dayPeriods.forEach(dayPeriod => {
        const forecastData = forecast.data.list;
        const forcastPeriod = forecastData.filter(
            forcastPeriod => dayPeriod === forcastPeriod.dt_txt
        );
        if (forcastPeriod.length) {
            let time = forcastPeriod[0].dt_txt.split(' ')[1].split(':');
            forcastPeriod[0].dt_txt = `at ${time[0]}:${time[1]}`;
            weather.push(forcastPeriod);
        }
    });
};

const getForecastDay = (day, forecast) => {
    let dayPeriods = null;
    let weather = [];
    switch (day) {
        case 'today':
            dayPeriods = createDayPeriods(0);
            filterForcast(dayPeriods, weather, forecast);
            return weather;
        case 'tomorrow':
            dayPeriods = createDayPeriods(1);
            filterForcast(dayPeriods, weather, forecast);
            return weather;
        case 'day after tomorrow':
            dayPeriods = createDayPeriods(2);
            filterForcast(dayPeriods, weather, forecast);
            return weather;
        default:
            return forecast;
    }
};

export function* resetCoordError() {
    yield put({
        type: CLOSE_POPUP,
    });

    yield put({
        type: RESET_COORD_ERROR,
    });
}

export function* fetchCoord() {
    const city = yield select(getCity);
    try {
        yield put({
            type: FETCH_COORD_REQUEST,
        });

        const response = yield call(
            axios.get,
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${MAPBOX_TOKEN}`
        );

        yield put({
            type: CHANGE_COORD_MAP,
            payload: response.data.features[0].bbox,
        });

        yield put({
            type: SET_COORD_POPUP,
            payload: response.data.features[0].center,
        });
    } catch (error) {
        yield put({
            type: FETCH_COORD_ERROR,
            payload: error,
        });
    }
}

export function* fetchWeather() {
    const city = yield select(getCity);
    const day = yield select(getDay);
    try {
        yield put({
            type: FETCH_WEATHER_REQUEST,
        });

        const response = yield call(
            axios.get,
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${OPEN_WEATHER_TOKEN}`
        );

        const forecastDay = getForecastDay(day, response);

        yield put({
            type: FETCH_WEATHER_SUCCESS,
            payload: {
                city: city.toUpperCase(),
                weather: forecastDay,
            },
        });

        yield put({
            type: SHOW_POPUP,
        });
    } catch (error) {
        yield put({
            type: FETCH_WEATHER_ERROR,
            payload: error,
        });
    }
}

export function* getForecast() {
    yield resetCoordError();
    yield fetchCoord();
    yield fetchWeather();
}
