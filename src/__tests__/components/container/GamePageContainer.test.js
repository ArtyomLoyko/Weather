import React from 'react';
import { shallow } from 'enzyme';
import { GamePageContainer } from './../../../components/container/GamePageContainer';

describe('GamePageContainer', () => {
    const mockInitCards = jest.fn();

    const props = {
        resetGame: mockInitCards,
    };

    const gamePageContainer = shallow(<GamePageContainer {...props} />);

    it('renders properly', () => {
        expect(gamePageContainer).toMatchSnapshot();
    });

    it('dispatches initCards method it receives from props', () => {
        expect(mockInitCards).toHaveBeenCalledTimes(1);
    });
});
