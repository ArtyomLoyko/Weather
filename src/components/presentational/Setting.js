import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import './../../styles/FormInput.css';

const Wrapper = styled.form`
    position: fixed;
    top: 15px;
    left: 15px;
    background-color: white;
    z-index: 2;
    font-family: sans-serif;
    text-align: center;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    :hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    }
`;

const Text = styled.h1`
    font-size: 1.5rem;
`;

const FieldContainer = styled.div`
    display: flex;
    margin: 0 12px 15px;
`;

const RadioLabel = styled.label`
    display: flex;
    margin-bottom: 5px;
    cursor: pointer;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const RadioLabelsContainer = styled.div`
    display: flex;
    margin: 1.5px 0 0 5px;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    background-color: white;
    margin: 10px auto 15px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    user-select: none;

    :hover {
        background-color: rgba(240, 240, 240, 0.8);
    }
`;

export const Setting = ({ handleSubmit }) => {
    return (
        <Wrapper onSubmit={handleSubmit}>
            <Text>WEATHER FORECAST</Text>
            <FieldContainer>
                <label>
                    Insert City:
                    <Field
                        name="city"
                        component="input"
                        className="form-input"
                        type="text"
                        placeholder="city *"
                        required
                    />
                </label>
            </FieldContainer>
            <FieldContainer>
                <SelectContainer>
                    <span>Select Day:</span>
                    <RadioLabelsContainer>
                        <RadioLabel>
                            <Field
                                name="day"
                                component="input"
                                className="form-radio"
                                type="radio"
                                value="today"
                                required
                            />
                            Today
                        </RadioLabel>
                        <RadioLabel>
                            <Field
                                name="day"
                                component="input"
                                className="form-radio"
                                type="radio"
                                value="tomorrow"
                                required
                            />
                            Tomorrow
                        </RadioLabel>
                        <RadioLabel>
                            <Field
                                name="day"
                                component="input"
                                className="form-radio"
                                type="radio"
                                value="day after tomorrow"
                                required
                            />
                            Day after tomorrow
                        </RadioLabel>
                    </RadioLabelsContainer>
                </SelectContainer>
            </FieldContainer>
            <SubmitButton type="submit">Show Weather</SubmitButton>
        </Wrapper>
    );
};

Setting.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'setting',
    destroyOnUnmount: false,
})(Setting);
