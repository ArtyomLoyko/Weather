import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapGL, { NavigationControl, FlyToInterpolator } from 'react-map-gl';
import { onChangeViewport } from 'redux-map-gl';

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
                onViewportChange={onChangeViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <div style={{ position: 'fixed', right: 15, top: 15 }}>
                    <NavigationControl onViewportChange={onChangeViewport} />
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
        viewport: state.map.viewport.toJS(),
    }),
    { onChangeViewport }
)(MapContainer);
