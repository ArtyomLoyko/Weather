import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

import { getCity, getCityError, getDay } from '../selectors';
import { MAPBOX_TOKEN, OPEN_WEATHER_TOKEN } from '../constants';
import {
    resetCoordError,
    fetchCoordRequest,
    fetchCoordError,
    changeCoordMap,
    setCoordPopup,
    resetWeatherError,
    fetchWeatherRequest,
    fetchWeatherSuccess,
    fetchWeatherError,
    showPopup,
    closePopup,
} from '../actions';

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

export function* resetStateErrors() {
    yield put(closePopup());
    yield put(resetCoordError());
    yield put(resetWeatherError());
}

export function* fetchCoord(action) {
    // const city = yield select(getCity);
    const city = action.payload;
    try {
        yield put(fetchCoordRequest());
        console.log(city);
        const response = yield call(
            axios.get,
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${MAPBOX_TOKEN}`
        );

        console.log(response);

        // if (response.data.features[0].bbox) {
        //     yield put(changeCoordMap(response.data.features[0].bbox));
        //     yield put(setCoordPopup(response.data.features[0].center));
        // } else {
        //     yield put(fetchCoordError());
        // }
    } catch (error) {
        yield put(fetchCoordError(error));
    }
}

export function* fetchWeather() {
    const city = yield select(getCity);
    const day = yield select(getDay);
    try {
        yield put(fetchWeatherRequest());

        const response = yield call(
            axios.get,
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${OPEN_WEATHER_TOKEN}`
        );

        const forecastDay = getForecastDay(day, response);

        yield put(
            fetchWeatherSuccess({
                city: city.toUpperCase(),
                weather: forecastDay,
            })
        );
        yield put(showPopup());
    } catch (error) {
        yield put(fetchWeatherError(error));
        yield put(showPopup());
    }
}

export function* getForecast(action) {
    // yield resetStateErrors();
    // yield fetchCoord(action);
    // const isError = yield select(getCityError);
    // !isError && (yield fetchWeather());
}
