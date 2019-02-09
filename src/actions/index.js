import { createAction } from 'redux-act';

export const getForecast = createAction();

export const closePopup = createAction();
export const showPopup = createAction();

export const fetchCoord = createAction();
export const resetCoordError = createAction();
export const fetchCoordRequest = createAction();
export const fetchCoordError = createAction();
export const changeCoordMap = createAction();
export const setCoordPopup = createAction();

export const resetWeatherError = createAction();
export const fetchWeatherRequest = createAction();
export const fetchWeatherSuccess = createAction();
export const fetchWeatherError = createAction();

export const setCitiesData = createAction();

export const toggleDropdown = createAction();

export const changeInputValue = createAction();
