import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import './MessagePreview.less';

export default class MessagePreview extends React.Component {
    render() {
        const { title, senderName, selected, onClick } = this.props;

        const classes = classNames('MessagePreview', { selected });

        return (
            <div className={classes} onClick={onClick}>
                <div className='title'>
                    {title}
                </div>

                <div className='from'>
                    {`from ${senderName}`}
                </div>
            </div>
        );
    }
};