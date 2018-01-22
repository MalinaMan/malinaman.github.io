import React from 'react';
import PropTypes from 'prop-types';

import TaskListsStore from '../stores/TaskListsStore';
import TaskListsActions from '../actions/TaskListsActions';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListIcon from 'material-ui/svg-icons/action/view-list';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/svg-icons/file/folder';
import AddIcon from 'material-ui/svg-icons/content/add';

import TaskListCreateModal from './TaskListCreateModal.jsx';

import './TasklistsPage.less';

function getStateFromFlux() {
    return {
        taskLists: TaskListsStore.getTaskLists()
    };
}

export default class TasklistsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...getStateFromFlux(),
                       isCreatingTaskList: false };
        this._onChange = this._onChange.bind(this);
        this.handleTaskListSubmit = this.handleTaskListSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAddTaskList = this.handleAddTaskList.bind(this);
    };

    componentWillMount() {
        TaskListsActions.loadTaskLists();
    };

    componentDidMount() {
        TaskListsStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        TaskListsStore.removeChangeListener(this._onChange);
    };

    handleAddTaskList() {
        this.setState({ isCreatingTaskList : true });
    };

    handleClose() {
        this.setState({ isCreatingTaskList : false });
    };

    handleTaskListSubmit(taskList) {
        TaskListsActions.createTaskList(taskList);

        this.setState({ isCreatingTaskList : false });
    };

    render() {
        const { router } = this.context;

        return (
            <div className='TasklistsPage'>
                <div className='TasklistsPage__menu'>
                    <List className='TasklistsPage__list'>
                        <h3 className='TasklistsPage__title'>Almost Google Tasks</h3>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Home"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="About"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list' subheader="Task Lists">
                            {
                                this.state.taskLists.map(list =>
                                    <ListItem
                                        key={list.id}
                                        leftIcon={<FolderIcon />}
                                        primaryText={list.name}
                                        onClick={router.push.bind(null, `/lists/${list.id}`)}
                                    />
                                )
                            }
                            <ListItem
                                leftIcon={<AddIcon />}
                                primaryText="Create new list"
                                onClick={this.handleAddTaskList}
                            />
                        </List>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Log out"
                                onClick={this.handleLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='TasklistsPage__tasks'>
                    {this.props.children}
                </div>
                <TaskListCreateModal
                    isOpen={this.state.isCreatingTaskList}
                    onSubmit={this.handleTaskListSubmit}
                    onClose={this.handleClose}
                />
            </div>
        );
    };

    _onChange() {
        this.setState(getStateFromFlux());
    }
};

TasklistsPage.contextTypes = {
    router: PropTypes.object.isRequired
};