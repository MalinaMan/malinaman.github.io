import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class TaskCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text : '' };
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    };

    handleClose() {
        const { onClose } = this.props;

        this.setState({ text: '' });

        if (onClose) {
            onClose();
        }
    };

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                text: this.state.text
            });
        }

        this.setState({ text: '' });
    };

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        const { text } = this.state;
        const { isOpen } = this.props;

        return (
            <Dialog
                className='TaskCreateModal'
                contentStyle={{ maxWidth: 400 }}
                actions={[
                    <FlatButton
                        label='Cancel'
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        primary
                        label='Submit'
                        disabled={!text}
                        onTouchTap={this.handleSubmit}
                    />
                ]}
                open={isOpen}
                onRequestClose={this.handleClose}
            >
                <h3 className='TaskCreateModal__modal-title'>Add task</h3>
                <TextField
                    fullWidth
                    ref={c => this.taskInput = c}
                    value={text}
                    onChange={this.handleTextChange}
                    hintText='e.g. buy a bottle of milk'
                    floatingLabelText='Enter task description'
                />
            </Dialog>
        );
    }
};