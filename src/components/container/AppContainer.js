import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { toggleWarning } from './../../actions';

import MapContainer from './MapContainer';
import SettingContainer from './SettingContainer';
import ErrorCityTooltip from './../presentational/ErrorCityTooltip';

import './../../styles/normalize.css';

export class AppContainer extends Component {
  render() {
    const { warningIsOpen, toggleWarning } = this.props;
    return (
      <Fragment>
        <SettingContainer />
        <MapContainer />
        {warningIsOpen && <ErrorCityTooltip toggleWarning={toggleWarning} />}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    warningIsOpen: state.map.warningIsOpen,
  }),
  { toggleWarning }
)(AppContainer);
