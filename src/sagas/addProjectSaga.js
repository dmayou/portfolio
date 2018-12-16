import { call, put as dispatch } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

function* addProject(action) {
    try {
        yield call(axios.post, '/api/projects', action.payload);
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: {
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: 'project added'
            }
        });
        yield dispatch({ type: 'FETCH_PROJECTS' });
        yield call(delay, 3500);
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: { open: false }
        });
    } catch (err) {
        console.log('addProject error:', err);
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: {
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: 'ERROR adding project'
            }
        });
        yield dispatch({ type: 'FETCH_PROJECTS' });
        yield call(delay, 3500);
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: { open: false }
        });
    }
}

export default addProject;