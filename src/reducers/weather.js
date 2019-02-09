import { createReducer } from 'redux-act';
import {
    resetWeatherError,
    fetchWeatherSuccess,
    fetchWeatherError,
} from '../actions';

const initialState = {
    city: null,
    data: null,
    isError: false,
    error: null,
};

export default createReducer(
    {
        [resetWeatherError]: state => ({
            ...state,
            isError: false,
            error: null,
        }),
        [fetchWeatherSuccess]: (state, weatherInfo) => ({
            ...state,
            city: weatherInfo.city,
            data: weatherInfo.weather,
        }),
        [fetchWeatherError]: (state, error) => ({
            ...state,
            isError: true,
            error: error,
        }),
    },
    initialState
);
