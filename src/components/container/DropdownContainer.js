import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

class CityListContainer extends Component {
  handleClickOutside = () => this.props.toggleDropdown(false);

  render() {
    const { citiesData, handleItemClick } = this.props;

    return (
      <Container>
        {citiesData.map(city => (
          <CityListItem
            key={city.id}
            data={city.place_name}
            onClick={() => handleItemClick(city.place_name)}
          />
        ))}
      </Container>
    );
  }
}

CityListContainer.propTypes = {
  citiesData: PropTypes.array,
};

export default onClickOutside(CityListContainer);
