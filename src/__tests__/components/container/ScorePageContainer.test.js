import React from 'react';
import { shallow } from 'enzyme';
import { ScorePageContainer } from './../../../components/container/ScorePageContainer';

describe('ScorePageContainer', () => {
    const props = {
        results: {
            data: null,
            isLoading: true,
            isError: false,
            error: null,
        },
        time: '00:25',
        userData: {
            username: 'alex',
            email: 'alex@gmail.com',
        },
        fetchSortedResults: () => {},
        deleteResults: () => {},
    };

    describe('ScorePageContainer initial', () => {
        const mockFetchSortedResults = jest.fn();

        const nextProps = {
            ...props,
            fetchSortedResults: mockFetchSortedResults,
        };

        const scorePageContainer = shallow(
            <ScorePageContainer {...nextProps} />
        );

        it('renders properly', () => {
            expect(scorePageContainer).toMatchSnapshot();
        });

        it('dispatches methods it receives from props', () => {
            expect(mockFetchSortedResults).toHaveBeenCalledTimes(1);
        });
    });

    describe('ScorePageContainer render preloader', () => {
        const nextProps = {
            ...props,
            results: {
                ...props.results,
                isLoading: true,
            },
            score: 25,
        };

        const scorePageContainer = shallow(
            <ScorePageContainer {...nextProps} />
        );

        it('renders properly', () => {
            expect(scorePageContainer).toMatchSnapshot();
        });

        it('render preloader', () => {
            expect(scorePageContainer.find('div')).toHaveLength(1);
        });
    });

    describe('ScorePageContainer render results', () => {
        const nextProps = {
            ...props,
            results: {
                ...props.results,
                data: [1, 2, 3],
                isLoading: false,
            },
        };

        const scorePageContainer = shallow(
            <ScorePageContainer {...nextProps} />
        );

        it('renders properly', () => {
            expect(scorePageContainer).toMatchSnapshot();
        });

        it('render records-table', () => {
            expect(scorePageContainer.find('section')).toHaveLength(1);
        });
    });
});
