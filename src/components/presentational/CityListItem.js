import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  flex-wrap: wrap;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const CityListItem = ({ data, onClick }) => (
  <Item onClick={onClick}>{data}</Item>
);

CityListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CityListItem;
