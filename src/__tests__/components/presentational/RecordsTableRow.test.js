import React from 'react';
import { shallow } from 'enzyme';
import RecordsTableRow from './../../../components/presentational/RecordsTableRow';

describe('RecordsTableRow', () => {
    const props = {
        username: 'alex',
        email: 'alex@gmail.com',
        score: 25,
    };

    const recordsTableRow = shallow(<RecordsTableRow {...props} />);

    it('renders properly', () => {
        expect(recordsTableRow).toMatchSnapshot();
    });
});
