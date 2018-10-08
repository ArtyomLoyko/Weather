import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ForcastPeriod from './ForcastPeriod';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;
`;

const Forecast = styled.div`
    display: flex;
    background-color: rgba(255, 238, 0, 0.4);
    padding: 15px;
`;

export const Weather = ({ city, weather }) => {
    return (
        <Wrapper>
            <h2>{city}</h2>
            <Forecast>
                {weather.map(weatherPeriod => (
                    <ForcastPeriod
                        key={weatherPeriod[0].dt}
                        weatherPeriod={weatherPeriod}
                    />
                ))}
            </Forecast>
        </Wrapper>
    );
};

Weather.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.array.isRequired,
};

export default Weather;
