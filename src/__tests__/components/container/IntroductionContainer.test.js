import React from 'react';
import { shallow } from 'enzyme';
import { IntroductionContainer } from './../../../components/container/IntroductionContainer';

describe('IntroductionContainer', () => {
    const introductionContainer = shallow(<IntroductionContainer />);

    it('renders properly', () => {
        expect(introductionContainer).toMatchSnapshot();
    });
});
