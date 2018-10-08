import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;
`;

const Icon = styled.img`
    width: 75%;
    height: 75%;
    display: flex;
    margin: auto;
`;

const Description = styled.span`
    font-size: 0.7rem;
    padding: 0 0 3px;
`;

const Temp = styled.strong`
    padding: 2px;
`;

const Value = styled.span`
    font-size: 0.8rem;
    padding: 1.5px;
`;

export const ForcastPeriod = ({ weatherPeriod }) => {
    const { dt_txt, weather, main, wind } = weatherPeriod[0];
    return (
        <Wrapper>
            <strong>{dt_txt}</strong>
            <Icon
                src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt={weather[0].description}
            />
            <Description>{weather[0].description}</Description>
            <Temp>{main.temp} °C</Temp>
            <Value>{wind.speed} m/s</Value>
            <Value>{main.pressure} hPa</Value>
            <Value>{main.humidity} %</Value>
        </Wrapper>
    );
};

ForcastPeriod.propTypes = {
    weatherPeriod: PropTypes.array.isRequired,
};

export default ForcastPeriod;
