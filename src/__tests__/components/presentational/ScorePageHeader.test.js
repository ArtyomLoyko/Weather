import React from 'react';
import { shallow } from 'enzyme';
import ScorePageHeader from './../../../components/presentational/ScorePageHeader';

describe('ScorePageHeader', () => {
    const props = {
        score: 25,
    };

    const scorePageHeader = shallow(<ScorePageHeader {...props} />);

    it('renders properly', () => {
        expect(scorePageHeader).toMatchSnapshot();
    });
});
