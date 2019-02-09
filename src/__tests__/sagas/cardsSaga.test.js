import { checkCard } from './../../sagas/cardsSaga';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { CHECK_CARD_START } from '../../constants';

describe('checkCard Saga test', () => {
    const gen = checkCard();

    it('checkCard Saga must call delay(500)', () => {
        expect(gen.next().value).toEqual(call(delay, 500));
    });

    it('checkCard Saga must dispatch an CHECK_CARD_START action', () => {
        expect(gen.next().value).toEqual(put({ type: CHECK_CARD_START }));
    });

    it('checkCard Saga must be done', () => {
        expect(gen.next()).toEqual({ done: true, value: undefined });
    });
});
