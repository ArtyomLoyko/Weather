import gameState from './../../reducers/gameState';
import { RESET_GAME, SET_SCORE } from './../../constants';

describe('gameState', () => {
    it('RESET_GAME', () => {
        const initialState = {
            isFinished: true,
            score: 20,
        };

        const action = {
            type: RESET_GAME,
        };

        expect(gameState(initialState, action)).toEqual({
            ...initialState,
            isFinished: false,
            score: null,
        });
    });

    it('SET_SCORE', () => {
        const initialState = {
            isFinished: true,
            score: null,
        };

        const action = {
            type: SET_SCORE,
            payload: '00:25',
        };

        expect(gameState(initialState, action)).toEqual({
            ...initialState,
            score: 25,
        });
    });
});
