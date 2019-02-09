import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm } from './../../../components/presentational/RegistrationForm';

describe('RegistrationForm', () => {
    const mockHandleSubmit = jest.fn();

    const props = {
        handleSubmit: mockHandleSubmit,
    };

    const registrationForm = shallow(<RegistrationForm {...props} />);

    it('renders properly', () => {
        expect(registrationForm).toMatchSnapshot();
    });
});
