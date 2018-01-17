import React from 'react';
import ReactDOM from 'react-dom';

import messages from '../messages.json';

import './Message.less';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        const { messageId } = this.props.params;

        this.state = {
            message: messages.find(message => message.id === messageId)
        };
    };

    componentWillReceiveProps(nextProps) {
        const { messageId: prevId } = this.props.params;
        const { messageId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
    };

    render() {
        const { message } = this.state;

        return (
            <div className='Message'>
                <p><b>From:</b> {message.senderName} ({message.senderEmail})</p>
                <p><b>To:</b> you</p>
                <p><b>Subject:</b> {message.subject}</p>
                <hr />
                <p>{message.body}</p>
            </div>
        );
    }
};