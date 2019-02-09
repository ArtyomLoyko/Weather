import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './../../../components/presentational/Card';

describe('Card', () => {
    const mockHandleClick = jest.fn();

    const props = {
        isTurned: false,
        isOut: false,
        scirt: 'some/path',
        image: 'some/path',
        handleClick: mockHandleClick,
    };

    const card = shallow(<Card {...props} />);

    it('renders properly', () => {
        expect(card).toMatchSnapshot();
    });
});
