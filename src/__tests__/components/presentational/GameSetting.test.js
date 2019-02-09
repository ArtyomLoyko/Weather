import React from 'react';
import { shallow } from 'enzyme';
import GameSetting from './../../../components/presentational/GameSetting';

describe('GameSetting', () => {
    const gameSetting = shallow(<GameSetting />);

    it('renders properly', () => {
        expect(gameSetting).toMatchSnapshot();
    });
});
