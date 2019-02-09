import { call, put, select } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import axios from 'axios';

import { setScore, sendData, fetchRecords } from './../../sagas/dataSagas';
import { fetchSortedResults } from './../../actions';
import { getScore } from './../../selectors';
import {
    SET_SCORE,
    SEND_DATA_ERROR,
    FETCH_RECORDS_SUCCESS,
    FETCH_RECORDS_ERROR,
    FETCH_RECORDS_REQUEST,
} from '../../constants';

const name = 'ivan';
const email = 'ivan@ivan.com';
const time = '00:15';
const fetchSortedResultsAction = fetchSortedResults(name, email, time);

describe('dataSagas test', () => {
    describe('setScore Saga test', () => {
        const gen = setScore(fetchSortedResultsAction);

        it('setScore Saga must dispatch an SET_SCORE action', () => {
            expect(gen.next().value).toEqual(
                put({
                    type: SET_SCORE,
                    payload: time,
                })
            );
        });

        it('setScore Saga must be done', () => {
            expect(gen.next()).toEqual({ done: true, value: undefined });
        });
    });

    describe('sendData Saga test', () => {
        describe('sendData Saga flow', () => {
            const gen = cloneableGenerator(sendData)(fetchSortedResultsAction);

            expect(gen.next().value, select(getScore));
            expect(gen.next(15).value).toEqual(
                call(axios.post, 'https://mmg-score.herokuapp.com/', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        name: 'ivan',
                        email: 'ivan@ivan.com',
                        score: 15,
                    },
                })
            );

            it('sendData Saga error', () => {
                const clone = gen.clone();
                const error = new Error('some error');
                const result = clone.throw(error).value;

                expect(result).toEqual(
                    put({
                        type: SEND_DATA_ERROR,
                        payload: error,
                    })
                );
                expect(clone.next().done).toEqual(true);
            });
        });
    });

    describe('fetchRecords Saga test', () => {
        describe('fetchRecords Saga flow', () => {
            const gen = cloneableGenerator(fetchRecords)(
                fetchSortedResultsAction
            );

            expect(gen.next().value).toEqual(
                put({ type: FETCH_RECORDS_REQUEST })
            );
            expect(gen.next().value).toEqual(
                call(axios.get, 'https://mmg-score.herokuapp.com/')
            );

            it('fetchRecords Saga success', () => {
                const clone = gen.clone();
                const response = {
                    data: {
                        result: [{ score: 15 }, { score: 20 }],
                    },
                };

                expect(clone.next(response).value).toEqual(
                    put({
                        type: FETCH_RECORDS_SUCCESS,
                        payload: response.data.result,
                    })
                );
                expect(clone.next().done).toEqual(true);
            });

            it('fetchRecords Saga error', () => {
                const clone = gen.clone();
                const error = new Error('some error');
                const result = clone.throw(error).value;

                expect(result).toEqual(
                    put({
                        type: FETCH_RECORDS_ERROR,
                        payload: error,
                    })
                );
                expect(clone.next().done).toEqual(true);
            });
        });
    });
});
