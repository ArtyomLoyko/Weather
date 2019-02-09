import userData from './../../reducers/userData';
import { SEND_DATA_ERROR } from './../../constants';

describe('userData', () => {
    it('SEND_DATA_ERROR', () => {
        const initialState = {
            isError: false,
            error: null,
        };

        const action = {
            type: SEND_DATA_ERROR,
            payload: 'some error',
        };

        expect(userData(initialState, action)).toEqual({
            ...initialState,
            isError: true,
            error: 'some error',
        });
    });
});
