import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* addProject(action) {
    yield call(axios.post, '/api/projects', action.payload);
    yield dispatch({ type: 'FETCH_PROJECTS' });
}

export default addProject;