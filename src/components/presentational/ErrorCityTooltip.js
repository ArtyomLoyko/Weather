import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 45%;
  font-size: 1.3rem;
  z-index: 3;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.65);
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

class ErrorCityTooltip extends React.Component {
  handleClickOutside = () => this.props.toggleWarning();

  render() {
    return <Wrapper>Incorrect city!</Wrapper>;
  }
}

export default onClickOutside(ErrorCityTooltip);
