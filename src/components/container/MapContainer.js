import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onChangeViewport } from './../../actions';
import MapGL, { NavigationControl, FlyToInterpolator } from 'react-map-gl';

import { MAPBOX_TOKEN } from '../../constants';

import PopupContainer from './PopupContainer';

class MapContainer extends Component {
  render() {
    const { viewport, onChangeViewport } = this.props;
    return (
      <MapGL
        {...viewport}
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => onChangeViewport(viewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <div style={{ position: 'fixed', right: 15, top: 15 }}>
          <NavigationControl
            onViewportChange={viewport => onChangeViewport(viewport)}
          />
        </div>
        <PopupContainer
          latitude={viewport.latitude}
          longitude={viewport.longitude}
        />
      </MapGL>
    );
  }
}

MapContainer.propTypes = {
  viewport: PropTypes.object.isRequired,
  onChangeViewport: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    viewport: state.map.viewport,
  }),
  { onChangeViewport }
)(MapContainer);
