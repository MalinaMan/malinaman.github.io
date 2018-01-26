import React from 'react';

import TasksActions from '../actions/TasksActions';
import TaskListsActions from '../actions/TaskListsActions';

import TasksStore from '../stores/TasksStore';
import TaskListsStore from '../stores/TaskListsStore';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Task from './Task.jsx';
import TaskCreateModal from './TaskCreateModal.jsx';

import './TasksPage.less';

function getStateFromFlux() {
    return {
        tasks: TasksStore.getTasks(),
        currentTaskList: TaskListsStore.getTaskList()
    };
}

export default class TasksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...getStateFromFlux(),
                       isCreatingTaskList: false };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
    };

    componentWillMount() {
        TasksActions.loadTasks(this.props.params.id);
        TaskListsActions.getTask(this.props.params.id);
    };

    componentDidMount() {
        TasksStore.addChangeListener(this._onChange);
        TaskListsStore.addChangeListener(this._onChange);
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            TasksActions.loadTasks(nextProps.params.id);
            TaskListsActions.getTask(nextProps.params.id);
        }
    };

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
        TaskListsStore.removeChangeListener(this._onChange);
    };

    handleStatusChange(taskId, { isCompleted }) {
        TasksActions.updateTaskStatus({
            taskListId: this.props.params.id,
            taskId: taskId,
            isCompleted: isCompleted
        });
    };

    handleTaskUpdate(taskId, { text }) {
        TasksActions.updateTask({
            taskListId: this.props.params.id,
            taskId: taskId,
            text: text
        });
    };

    handleTaskDelete(taskId) {
        TasksActions.deleteTask({
            taskListId: this.props.params.id,
            taskId: taskId
        });
    };

    handleAddTask() {
        this.setState({ isCreatingTask: true });
    };

    handleClose() {
        this.setState({ isCreatingTask: false });
    };

    handleTaskSubmit(task) {
        const taskListId = this.props.params.id;

        TasksActions.createTask({ taskListId, ...task });

        this.setState({ isCreatingTask: false });
    };

    render() {
    	return (
            <div className='TasksPage'>
                <div className='TasksPage__header'>
                    <h2 className='TasksPage__title'>{ this.state.currentTaskList ? this.state.currentTaskList.title : "" }</h2>
                    <div className='TasksPage__tools'>
                        <IconButton onClick={this.handleAddTask}>
                            <ContentAdd />
                        </IconButton>
                    </div>
                </div>

                <div className='TasksPage__tasks'>
                    {
                        this.state.tasks.map(task =>
                            <Task
                                key={task.id}
                                text={task.text}
                                isCompleted={task.isCompleted}
                                onStatusChange={this.handleStatusChange.bind(null, task.id)}
                                onUpdate={this.handleTaskUpdate.bind(null, task.id)}
                                onDelete={this.handleTaskDelete.bind(null, task.id)}
                            />
                        )
                    }
                </div>
                <TaskCreateModal
                    isOpen={this.state.isCreatingTask}
                    onSubmit={this.handleTaskSubmit}
                    onClose={this.handleClose}
                />
            </div>
        );
    };

    _onChange() {
        this.setState(getStateFromFlux());
    }
};