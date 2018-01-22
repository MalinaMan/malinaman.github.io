import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './styles/base.less';

export default class App extends React.Component {
    render() {
        return (
        	<MuiThemeProvider>
	            <div className='App'>
	                {this.props.children || <LoginPage/>}
	            </div>
	        </MuiThemeProvider>
        );
    }
};