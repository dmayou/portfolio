import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* addProject(action) {
    try {
        yield call(axios.post, '/api/projects', action.payload);
        yield dispatch({ 
            type: 'SHOW_SNACKBAR', 
            payload: {message: 'Project added successfully!', dwell: 3500}
        });
    } catch (err) {
        console.log('addProject error:', err);
        yield dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: 'ERROR adding project!', dwell: 3500 }
        });
    }
}

export default addProject;