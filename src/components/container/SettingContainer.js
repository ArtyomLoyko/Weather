import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoord, toggleDropdown } from '../../actions';

import Setting from '../presentational/Setting';

export class SettingContainer extends Component {
    handleChangeInput = e => {
        this.props.fetchCoord(e.target.value);
        this.props.toggleDropdown(true);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.getForecast();
    };

    render() {
        return (
            <Setting
                handleChangeInput={this.handleChangeInput}
                handleSubmit={e => this.handleSubmit(e)}
            />
        );
    }
}

SettingContainer.propTypes = {
    isError: PropTypes.bool,
    fetchCoord: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        isError: state.map.isError,
        inputValue: state.map.inputValue,
    }),
    { fetchCoord, toggleDropdown }
)(SettingContainer);
