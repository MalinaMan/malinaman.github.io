import React from 'react';
import PropTypes from 'prop-types';

import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';

import RaisedButton from 'material-ui/RaisedButton';

import './LoginPage.less';

function getStateFromFlux() {
    return {
        isLoggedIn: SessionStore.isLoggedIn()
    };
}

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    };

    componentDidMount() {
        SessionStore.addChangeListener(this._onChange);

        if (this.state.isLoggedIn) {
            this.redirectLoggedInUser();
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isLoggedIn) {
            this.redirectLoggedInUser();
        }
    };

    componentWillUnmount() {
        SessionStore.removeChangeListener(this._onChange);
    };

    handleLogIn() {
        SessionActions.authorize();
    };

    redirectLoggedInUser() {
        const { location } = this.props;

        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname);
        } else {
            this.context.router.replace('/lists');
        }
    };

    render() {
        return (
            <div className='LoginPage'>
                <div className='LoginPage__banner'>
                    <div className='LoginPage__text'>
                        <h1>Almost Google tasks</h1>
                        <p>Organise your life!</p>
                        <RaisedButton
                            className='login-button'
                            label='Log in with Google'
                            onClick={this.handleLogIn}
                        />
                    </div>
                    <img
                        src='/img/desk.png'
                        className='LoginPage__image'
                    />
                </div>
            </div>
        );
    };

    _onChange() {
        this.setState(getStateFromFlux());
    }
};

LoginPage.contextTypes = {
    router: PropTypes.object.isRequired
};