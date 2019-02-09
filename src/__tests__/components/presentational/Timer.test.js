import React from 'react';
import { shallow } from 'enzyme';
import Timer from './../../../components/presentational/Timer';

describe('Timer', () => {
    const props = {
        time: '00:32',
    };

    const timer = shallow(<Timer {...props} />);

    it('renders properly', () => {
        expect(timer).toMatchSnapshot();
    });
});
