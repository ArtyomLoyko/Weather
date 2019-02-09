import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDropdown, changeInputValue } from './../../actions';

import CityListItem from '../presentational/CityListItem';

const Input = styled.input`
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin-left: 5px;
    text-indent: 2px;
    user-select: none;

    &:hover {
        background-color: rgba(240, 240, 240, 0.8);
    }

    &::-webkit-input-placeholder {
        font-size: 0.85rem;
        font-style: italic;
        padding-left: 3px;
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }
`;

const Container = styled.ul`
    position: absolute;
    top: 20px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    padding-left: 0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export class CityListContainer extends Component {
    handleItemClick = (e, value) => {
        this.props.toggleDropdown(false);
        // this.props.changeInputValue(value);
        // console.log(this.input)
        this.input.value = value;
    };

    render() {
        const {
            citiesData,
            handleChangeInput,
            inputValue,
            dropdownIsOpen,
        } = this.props;
        return (
            <Fragment>
                <Input
                    /*value={inputValue} */ onChange={handleChangeInput}
                    innerRef={el => (this.input = el)}
                />
                {citiesData.length > 0 &&
                    dropdownIsOpen && (
                        <Container>
                            {citiesData.map(city => (
                                <CityListItem
                                    data={city.value}
                                    onClick={e =>
                                        this.handleItemClick(e, city.value)
                                    }
                                />
                            ))
                            /*) : (
          <CityListItem
            data="No such city"
            //handleSubmit={event => this.handleSubmit(event)}
          />*/
                            }
                        </Container>
                    )}
            </Fragment>
        );
    }
}

CityListContainer.propTypes = {
    citiesData: PropTypes.array,
};

export default connect(
    state => ({
        citiesData: state.map.citiesData,
        dropdownIsOpen: state.map.dropdownIsOpen,
        // inputValue: state.map.inputValue
    }),
    { toggleDropdown, changeInputValue }
)(CityListContainer);
