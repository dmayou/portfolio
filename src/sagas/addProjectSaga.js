import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* addProject(action) {
    try {
        yield call(axios.post, '/api/projects', action.payload);
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (err) {
        console.log('addProject error:', err);
    }
}

export default addProject;