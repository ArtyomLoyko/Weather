import { GET_FORECAST, CLOSE_POPUP } from '../constants';

export const getForecast = () => ({
    type: GET_FORECAST,
});

export const closePopup = () => ({
    type: CLOSE_POPUP,
});
