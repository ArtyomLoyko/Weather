import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './../../../components/container/CardContainer';

describe('CardContainer', () => {
    const props = {
        id: '2',
        isTurned: false,
        isOut: false,
        image: 'some/path',
        turnCard: () => {},
        checkCard: () => {},
    };

    const cardContainer = shallow(<CardContainer {...props} />);

    it('renders properly', () => {
        expect(cardContainer).toMatchSnapshot();
    });
});
