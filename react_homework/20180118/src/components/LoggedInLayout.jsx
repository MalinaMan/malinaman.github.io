import React from 'react';
import ReactDOM from 'react-dom';

import './LoggedInLayout.less';

export default class LoggedInLayout extends React.Component {
    render() {
        return (
            <div className='LoggedInLayout'>
                <div className='LoggedInLayout__content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
};