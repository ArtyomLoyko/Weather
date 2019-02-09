import React from 'react';
import { shallow } from 'enzyme';
import { ScirtsListContainer } from './../../../components/container/ScirtsListContainer';

describe('ScirtsListContainer', () => {
    const props = {
        scirts: [
            {
                id: '1',
                isSelected: true,
                image: 'some/path',
            },
            {
                id: '2',
                isSelected: false,
                image: 'some/path',
            },
        ],
    };

    const scirtsListContainer = shallow(<ScirtsListContainer {...props} />);

    it('renders properly', () => {
        expect(scirtsListContainer).toMatchSnapshot();
    });
});
