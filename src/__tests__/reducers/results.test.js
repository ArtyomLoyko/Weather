import results from './../../reducers/results';
import {
    FETCH_RECORDS_SUCCESS,
    FETCH_RECORDS_ERROR,
    FETCH_RECORDS_REQUEST,
    DELETE_RESULTS,
} from './../../constants';

describe('results', () => {
    it('FETCH_RECORDS_SUCCESS', () => {
        const initialState = {
            data: null,
            isLoading: true,
            isError: false,
            error: null,
        };

        const action = {
            type: FETCH_RECORDS_SUCCESS,
            payload: [{ score: 30 }, { score: 20 }, { score: 25 }],
        };

        expect(results(initialState, action)).toEqual({
            ...initialState,
            data: [{ score: 30 }, { score: 20 }, { score: 25 }],
            isLoading: false,
        });
    });

    it('FETCH_RECORDS_ERROR', () => {
        const initialState = {
            data: null,
            isLoading: true,
            isError: false,
            error: null,
        };

        const action = {
            type: FETCH_RECORDS_ERROR,
            payload: 'some error',
        };

        expect(results(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            isError: true,
            error: 'some error',
        });
    });

    it('FETCH_RECORDS_REQUEST', () => {
        const initialState = {
            data: null,
            isLoading: false,
            isError: false,
            error: null,
        };

        const action = {
            type: FETCH_RECORDS_REQUEST,
        };

        expect(results(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        });
    });

    it('DELETE_RESULTS', () => {
        const initialState = {
            data: [{ score: 20 }, { score: 25 }, { score: 30 }],
            isLoading: true,
            isError: false,
            error: null,
        };

        const action = {
            type: DELETE_RESULTS,
        };

        expect(results(initialState, action)).toEqual({
            ...initialState,
            data: null,
            isError: false,
            error: null,
        });
    });
});
