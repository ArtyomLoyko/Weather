import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';
import { getCity, getCitiesData, getDay } from '../selectors';
import { OPEN_WEATHER_TOKEN, DATE_FORMAT } from '../constants';
import {
  changeCoordMap,
  setCoordPopup,
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherError,
  showPopup,
  toggleWarning,
  closePopup,
} from '../actions';

const createDayPeriods = day => {
  const date = new Date();
  const yymmdd = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate() + day}`;
  const night = moment(`${yymmdd} 03:00:00`).format(DATE_FORMAT);
  const morning = moment(`${yymmdd} 09:00:00`).format(DATE_FORMAT);
  const afternoon = moment(`${yymmdd} 15:00:00`).format(DATE_FORMAT);
  const evening = moment(`${yymmdd} 21:00:00`).format(DATE_FORMAT);
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

export function* fetchWeather(city) {
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

export function* getForecast() {
  const inputValue = yield select(getCity);
  const citiesData = yield select(getCitiesData);
  const selectedCity = citiesData.find(city => city.text === inputValue);

  if (selectedCity) {
    yield put(changeCoordMap(selectedCity.bbox));
    yield put(setCoordPopup(selectedCity.center));
    yield fetchWeather(selectedCity.text);
  } else {
    yield put(toggleWarning());
    yield put(closePopup());
  }
}
