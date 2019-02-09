import React from 'react';
import { shallow } from 'enzyme';
import UserSetting from './../../../components/presentational/UserSetting';

describe('UserSetting', () => {
    const userSetting = shallow(<UserSetting />);

    it('renders properly', () => {
        expect(userSetting).toMatchSnapshot();
    });
});
