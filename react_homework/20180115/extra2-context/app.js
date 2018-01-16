import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
	render() {
		return (
			<button style={{background: this.context.color}}>
				{this.props.children}
			</button>
		);
	}
};

Button.contextTypes = {
	color: PropTypes.string
};

class Message extends React.Component {
	render() {
		return (
			<div style={{border: '1px solid grey', margin: 10, padding: 10}}>
				<p>{this.props.text}</p>
				<Button>Delete</Button>
			</div>
		);
	}
};

class MessageList extends React.Component {
	render() {
		const children = this.props.messages.map(message =>
			<Message key={message} text={message} />
		);

		return <div>{children}</div>;
	}
};

class App extends React.Component {
    getChildContext() {
        return {
            color: 'yellow'
        };
    };

	render() {
		const messages = [
			'Fusce ac felis sit amet',
			'Vivamus aliquet elit ac nisl',
			'In hac habitasse platea dictumst',
			'Vestibulum ante ipsum primis in',
            'Sed cursus turpis vitae tortor',
            'Aenean commodo ligula eget dolor'
		];

		return <MessageList messages={messages} />;
	}
};

App.childContextTypes = {
    color: PropTypes.string
};

ReactDOM.render(
	<App />,
	document.getElementById('mount-point')
);
