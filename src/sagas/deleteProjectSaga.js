import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* deleteProject(action) {
    try {
        yield call(axios.delete, `/api/projects/${action.payload.id}`);
        yield dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: 'Project has been deleted', dwell: 3500 }
        });
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (err) {
        console.error('deleteProject error:', err);
        yield dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: 'ERROR deleting project!', dwell: 3500 }
        });
    }
}

export default deleteProject;