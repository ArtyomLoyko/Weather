import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationFormContainer } from './../../../components/container/RegistrationFormContainer';

describe('RegistrationFormContainer', () => {
    const registrationFormContainer = shallow(<RegistrationFormContainer />);

    it('renders properly', () => {
        expect(registrationFormContainer).toMatchSnapshot();
    });
});
