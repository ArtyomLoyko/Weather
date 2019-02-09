import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDropdown, changeInputValue } from './../../actions';

import CityListItem from '../presentational/CityListItem';

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
            citiesData.length > 0 &&
            dropdownIsOpen && (
                <Container>
                    {citiesData.map(city => (
                        <CityListItem
                            data={city.value}
                            onClick={e => this.handleItemClick(e, city.value)}
                        />
                    ))
                    /*) : (
          <CityListItem
            data="No such city"
            //handleSubmit={event => this.handleSubmit(event)}
          />*/
                    }
                </Container>
            )
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
)(onClickOutside(CityListContainer));
