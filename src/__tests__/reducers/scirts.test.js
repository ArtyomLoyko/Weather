import scirts from './../../reducers/scirts';
import { SELECT_SCIRT } from './../../constants';

describe('scirts', () => {
    it('SELECT_SCIRT', () => {
        const initialState = [
            {
                id: '1',
                isSelected: true,
            },
            {
                id: '2',
                isSelected: false,
            },
            {
                id: '3',
                isSelected: false,
            },
        ];

        const action = {
            type: SELECT_SCIRT,
            payload: '3',
        };

        expect(scirts(initialState, action)).toEqual([
            {
                id: '1',
                isSelected: false,
            },
            {
                id: '2',
                isSelected: false,
            },
            {
                id: '3',
                isSelected: true,
            },
        ]);
    });
});
