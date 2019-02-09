import React from 'react';
import { shallow } from 'enzyme';
import { ScorePageButtonsContainer } from './../../../components/container/ScorePageButtonsContainer';

describe('ScorePageButtonsContainer', () => {
    const mockResetTimer = jest.fn();
    const mockResetGame = jest.fn();

    const props = {
        resetTimer: mockResetTimer,
        resetGame: mockResetGame,
    };

    const scorePageButtonsContainer = shallow(
        <ScorePageButtonsContainer {...props} />
    );

    it('renders properly', () => {
        expect(scorePageButtonsContainer).toMatchSnapshot();
    });
});
