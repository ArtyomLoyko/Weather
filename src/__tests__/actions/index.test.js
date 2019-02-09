import { GET_FORECAST, closePopup } from './../../constants';

import { getForecast, closePopup } from './../../actions';

describe('actions', () => {
    it('getForecast', () => {
        const expectedAction = {
            type: GET_FORECAST,
        };
        expect(getForecast()).toEqual(expectedAction);
    });

    it('closePopup', () => {
        const expectedAction = {
            type: closePopup,
        };
        expect(closePopup()).toEqual(expectedAction);
    });
});
