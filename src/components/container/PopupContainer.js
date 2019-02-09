import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popup } from 'react-map-gl';

import { closePopup } from '../../actions';

import Weather from '../presentational/Weather';

class PopupContainer extends Component {
    render() {
        const { popup, city, weather, isError, closePopup } = this.props;

        return !popup.isOpen ? null : (
            <Popup
                latitude={popup.coord[1]}
                longitude={popup.coord[0]}
                closeButton={true}
                onClose={closePopup}
                tipSize={25}
                anchor={'top-left'}
                offsetLeft={15}
                offsetTop={15}
            >
                {isError ? (
                    <p>Sorry, there is no weather forecast for your city...</p>
                ) : (
                    <Weather city={city} weather={weather} />
                )}
            </Popup>
        );
    }
}

PopupContainer.propTypes = {
    city: PropTypes.string,
    weather: PropTypes.array,
    popup: PropTypes.object.isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        popup: state.popup,
        city: state.weather.city,
        weather: state.weather.data,
        isError: state.weather.isError,
    }),
    { closePopup }
)(PopupContainer);
