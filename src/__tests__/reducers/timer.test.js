import timer from './../../reducers/timer';
import { STOP_TIMER, RESET_TIMER } from './../../constants';

describe('timer', () => {
    it('STOP_TIMER', () => {
        const initialState = {
            time: '00:30',
            id: '12345',
        };

        const action = {
            type: STOP_TIMER,
            payload: '12345',
        };

        expect(timer(initialState, action)).toEqual({
            ...initialState,
            id: null,
        });
    });

    it('RESET_TIMER', () => {
        const initialState = {
            time: '00:30',
            id: null,
        };

        const action = {
            type: RESET_TIMER,
        };

        expect(timer(initialState, action)).toEqual({
            ...initialState,
            time: '00:00',
        });
    });
});
