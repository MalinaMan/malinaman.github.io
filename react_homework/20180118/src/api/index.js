import config from '../config';

const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
    authorize(params) {
        return new Promise((resolve, reject) => {
            gapi.auth.authorize(
                {
                    'client_id': config.clientId,
                    'scope': SCOPES,
                    'immediate': params.immediate,
                    'cookie_policy': 'single_host_origin'
                },
                authResult => {
                    if (authResult.error) {
                        return reject(authResult.error);
                    }

                    return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve() ) );
                }
            );
        });
    },

    listTaskLists() {
        const request = gapi.client.tasks.tasklists.list();

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    getTaskList(taskListId) {
        const request = gapi.client.tasks.tasklists.get( {
        	tasklist: taskListId
     	} );

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    insertTaskList({ title }) {
        const request = gapi.client.tasks.tasklists.insert({
            title: title
        });

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    listTasks(taskListId) {
        const request = gapi.client.tasks.tasks.list({
            tasklist: taskListId
        });

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    insertTask({ taskListId, title }) {
        const request = gapi.client.tasks.tasks.insert({
            tasklist : taskListId,
            title    : title
        });

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    updateTask({ taskListId, taskId, ...params }) {
        const request = gapi.client.tasks.tasks.update({
            tasklist : taskListId,
            task     : taskId,
            id       : taskId,
            ...params
        });

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    },

    deleteTask({ taskListId, taskId }) {
        const request = gapi.client.tasks.tasks.delete({
            tasklist : taskListId,
            task     : taskId
        });

        return new Promise((resolve, reject) => {
            request.execute(resp => resolve(resp));
        });
    }
}
