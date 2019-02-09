import cards from './../../reducers/cards';
import { INIT_CARDS, TURN_CARD, CHECK_CARD_START } from './../../constants';

describe('cards', () => {
    it('INIT_CARDS', () => {
        const initialState = [];
        const action = {
            type: INIT_CARDS,
        };

        expect(cards(initialState, action).length).toEqual(10);
    });

    it('TURN_CARD', () => {
        const initialState = [
            {
                id: '1',
                isTurned: false,
                isAnimated: false,
            },
            {
                id: '2',
                isTurned: false,
                isAnimated: false,
            },
            {
                id: '3',
                isTurned: false,
                isAnimated: false,
            },
        ];

        const action = {
            type: TURN_CARD,
            payload: '2',
        };

        expect(cards(initialState, action)).toEqual([
            {
                id: '1',
                isTurned: false,
                isAnimated: false,
            },
            {
                id: '2',
                isTurned: true,
                isAnimated: true,
            },
            {
                id: '3',
                isTurned: false,
                isAnimated: false,
            },
        ]);
    });

    it('CHECK_CARD_START', () => {
        const initialState = [
            {
                id: '1',
                image: 'path/same-img',
                isOut: false,
                isTurned: true,
                isAnimated: false,
            },
            {
                id: '2',
                image: 'path/same-img',
                isOut: false,
                isTurned: true,
                isAnimated: true,
            },
            {
                id: '3',
                image: 'path/other-img',
                isOut: false,
                isTurned: false,
                isAnimated: false,
            },
        ];

        const action = {
            type: CHECK_CARD_START,
            payload: '2',
        };

        expect(cards(initialState, action)).toEqual([
            {
                id: '1',
                image: 'path/same-img',
                isOut: true,
                isTurned: true,
                isAnimated: false,
            },
            {
                id: '2',
                image: 'path/same-img',
                isOut: true,
                isTurned: true,
                isAnimated: false,
            },
            {
                id: '3',
                image: 'path/other-img',
                isOut: false,
                isTurned: false,
                isAnimated: false,
            },
        ]);
    });
});
