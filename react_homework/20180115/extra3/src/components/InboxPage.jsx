import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MessagePreview from './MessagePreview.jsx';

import messages from '../messages.json';

import './InboxPage.less';

export default class InboxPage extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = { messages };
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    };

    handlePreviewClick(messageId) {
        this.context.router.push(`/inbox/messages/${messageId}`);
    };

    render() {
        const { messages } = this.state;
        const { messageId: selectedMessageId } = this.props.params;

        return (
            <div className='InboxPage'>
                <div className='messages'>
                    {
                        messages.map(message =>
                            <MessagePreview
                                key={message.id}
                                selected={message.id === selectedMessageId}
                                onClick={this.handlePreviewClick.bind(null, message.id)}
                                title={message.subject}
                                senderName={message.senderName}
                            />
                        )
                    }
                </div>

                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

InboxPage.contextTypes = {
    router: PropTypes.object.isRequired
};