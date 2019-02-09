import React from 'react';
import { shallow } from 'enzyme';
import { RecordsTableContainer } from './../../../components/container/RecordsTableContainer';

describe('RecordsTableContainer', () => {
    const props = {
        results: [
            {
                _id: '1',
                username: 'alex',
                email: 'alex@gmail.com',
                score: 25,
            },
            {
                _id: '2',
                username: 'den',
                email: 'den@gmail.com',
                score: 35,
            },
        ],
        isError: false,
    };

    describe('RecordsTableContainer render results', () => {
        const recordsTableContainer = shallow(
            <RecordsTableContainer {...props} />
        );

        it('renders properly', () => {
            expect(recordsTableContainer).toMatchSnapshot();
        });

        it('render results', () => {
            expect(recordsTableContainer.find('RecordsTableRow')).toHaveLength(
                2
            );
        });
    });

    describe('RecordsTableContainer render without results', () => {
        const nextProps = {
            ...props,
            results: null,
            isError: true,
        };

        const recordsTableContainer = shallow(
            <RecordsTableContainer {...nextProps} />
        );

        it('renders properly', () => {
            expect(recordsTableContainer).toMatchSnapshot();
        });

        it('render no results', () => {
            expect(recordsTableContainer.find('RecordsTableRow')).toHaveLength(
                0
            );
        });
    });
});
