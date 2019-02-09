import React from 'react';
import { shallow } from 'enzyme';
import Scirt from './../../../components/presentational/Scirt';

describe('Scirt', () => {
    const mockHandleClick = jest.fn();

    const props = {
        isSelected: false,
        image: 'some/path',
        handleClick: mockHandleClick,
    };

    const scirt = shallow(<Scirt {...props} />);

    it('renders properly', () => {
        expect(scirt).toMatchSnapshot();
    });
});
