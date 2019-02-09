import React from 'react';
import { shallow } from 'enzyme';
import { ScorePageHeaderContainer } from './../../../components/container/ScorePageHeaderContainer';

describe('ScorePageHeaderContainer', () => {
    const props = {
        score: 25,
    };

    const scorePageHeaderContainer = shallow(
        <ScorePageHeaderContainer {...props} />
    );

    it('renders properly', () => {
        expect(scorePageHeaderContainer).toMatchSnapshot();
    });
});
