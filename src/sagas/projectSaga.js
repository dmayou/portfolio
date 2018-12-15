import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjects() {
    const projectsList = yield call(axios.get, '/api/projects');
    console.log('/api/projects GET:', projectsList);
    yield dispatch({ type: 'SET_PROJECTS', payload: projectsList.data });
}

export default fetchProjects;