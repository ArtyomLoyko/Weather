import React from 'react';
import { shallow } from 'enzyme';
import { ScirtContainer } from './../../../components/container/ScirtContainer';

describe('ScirtContainer', () => {
    const props = {
        id: '2',
        isSelected: false,
        image: 'some/path',
        selectScirt: () => {},
    };

    const scirtContainer = shallow(<ScirtContainer {...props} />);

    it('renders properly', () => {
        expect(scirtContainer).toMatchSnapshot();
    });
});
