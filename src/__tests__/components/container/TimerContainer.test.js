import React from 'react';
import { shallow } from 'enzyme';
import { TimerContainer } from './../../../components/container/TimerContainer';

describe('TimerContainer', () => {
    const mockStartTimer = jest.fn();
    const mockChangeTime = jest.fn();
    const mockStopTimer = jest.fn();

    const props = {
        timer: {
            time: null,
            id: null,
        },
        startTimer: mockStartTimer,
        changeTime: mockChangeTime,
        stopTimer: mockStopTimer,
    };

    const timerContainer = shallow(<TimerContainer {...props} />);

    it('renders properly', () => {
        expect(timerContainer).toMatchSnapshot();
    });

    it('dispatches methods it receives from props', () => {
        expect(mockStartTimer).toHaveBeenCalledTimes(1);
    });
});
