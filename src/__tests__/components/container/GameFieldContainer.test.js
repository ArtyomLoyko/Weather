import React from 'react';
import { shallow } from 'enzyme';
import { GameFieldContainer } from './../../../components/container/GameFieldContainer';

describe('GameFieldContainer', () => {
    const mockInitCards = jest.fn();

    const props = {
        cards: [],
        isFinished: false,
        initCards: mockInitCards,
        checkGame: () => {},
    };

    const gameFieldContainer = shallow(<GameFieldContainer {...props} />);

    it('renders properly', () => {
        expect(gameFieldContainer).toMatchSnapshot();
    });

    it('dispatches initCards method it receives from props', () => {
        expect(mockInitCards).toHaveBeenCalledTimes(1);
    });
});
