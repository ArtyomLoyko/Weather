import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecast } from '../../actions';

import Setting from '../presentational/Setting';
import ErrorCityTooltip from './../presentational/ErrorCityTooltip';

export class SettingContainer extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.getForecast();
    };

    render() {
        const { isError } = this.props;
        return (
            <Fragment>
                <Setting handleSubmit={event => this.handleSubmit(event)} />
                {isError && <ErrorCityTooltip />}
            </Fragment>
        );
    }
}

SettingContainer.propTypes = {
    isError: PropTypes.bool,
    getForecast: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        isError: state.map.isError,
    }),
    { getForecast }
)(SettingContainer);
