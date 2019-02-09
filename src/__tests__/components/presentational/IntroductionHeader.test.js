import React from 'react';
import { shallow } from 'enzyme';
import IntroductionHeader from './../../../components/presentational/IntroductionHeader';

describe('IntroductionHeader', () => {
    const introductionHeader = shallow(<IntroductionHeader />);

    it('renders properly', () => {
        expect(introductionHeader).toMatchSnapshot();
    });
});
