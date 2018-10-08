import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../constants';

const initialState = {
    city: null,
    data: null,
    isError: false,
    error: null,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                city: action.payload.city,
                data: action.payload.weather,
            };
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weather;
