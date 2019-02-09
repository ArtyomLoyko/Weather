import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer } from './../../../components/container/AppContainer';

describe('AppContainer', () => {
    const appContainer = shallow(<AppContainer />);

    it('renders properly', () => {
        expect(appContainer).toMatchSnapshot();
    });
});
