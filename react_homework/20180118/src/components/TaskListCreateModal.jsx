import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class TaskListCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', open: Boolean(this.props.isOpen) };
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    };

    componentWillReceiveProps(nextProps) {
    	this.setState({ open: Boolean(nextProps.isOpen) });
    	return true;
    };

    handleClose() {
        const { onClose } = this.props;

        this.setState({ name: '', open: false });

        if (onClose) {
            onClose();
        }
    };

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                name: this.state.name
            });
        }

        this.setState({ name: '' });
    };

    handleTextChange(e) {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        const { name } = this.state;

        return (
            <Dialog
                className='TaskListCreateModal'
                contentStyle={{ maxWidth: 400 }}
                actions={[
                    <FlatButton
                        label='Cancel'
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        primary
                        label='Submit'
                        disabled={!name}
                        onTouchTap={this.handleSubmit}
                    />
                ]}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <h3 className='TaskListCreateModal__modal-title'>Add task list</h3>
                <TextField
                    fullWidth
                    ref={c => this.taskInput = c}
                    value={name}
                    onChange={this.handleTextChange}
                    hintText='e.g. movies to watch'
                    floatingLabelText='Enter task list name'
                />
            </Dialog>
        );
    }
};