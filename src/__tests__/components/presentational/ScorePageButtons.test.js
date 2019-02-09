import React from 'react';
import { shallow } from 'enzyme';
import ScorePageButtons from './../../../components/presentational/ScorePageButtons';

describe('ScorePageButtons', () => {
    const mockHandleClickTryBtn = jest.fn();
    const mockHandleClickMenuBtn = jest.fn();

    const props = {
        handleClickTryBtn: mockHandleClickTryBtn,
        handleClickMenuBtn: mockHandleClickMenuBtn,
    };

    const scorePageButtons = shallow(<ScorePageButtons {...props} />);

    it('renders properly', () => {
        expect(scorePageButtons).toMatchSnapshot();
    });
});
