import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import MapContainer from './MapContainer';
import SettingContainer from './SettingContainer';

import './../../styles/normalize.css';

export class AppContainer extends Component {
    render() {
        return (
            <Fragment>
                <SettingContainer />
                <MapContainer />
            </Fragment>
        );
    }
}

export default hot(module)(AppContainer);
