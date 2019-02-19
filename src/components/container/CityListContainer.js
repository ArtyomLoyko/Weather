import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { toggleDropdown } from './../../actions';

import DropdownContainer from './DropdownContainer';

const InputContainer = styled.div`
  width: 200px;
  display: inline-flex;
  position: relative;
`;

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

class CityListContainer extends Component {
  handleItemClick = value => {
    this.props.toggleDropdown(false);
    this.input.value = value;
    this.props.change('setting', 'city', value);
  };

  render() {
    const {
      dropdownIsOpen,
      toggleDropdown,
      citiesData,
      input: { onChange },
    } = this.props;

    return (
      <InputContainer>
        <Input
          maxlength="30"
          onChange={onChange}
          innerRef={el => (this.input = el)}
          required
        />
        {citiesData.length > 0 &&
          dropdownIsOpen && (
            <DropdownContainer
              citiesData={citiesData}
              handleItemClick={this.handleItemClick}
              toggleDropdown={toggleDropdown}
            />
          )}
      </InputContainer>
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
  }),
  { toggleDropdown, change }
)(CityListContainer);
