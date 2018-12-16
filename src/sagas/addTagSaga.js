import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* addTag(action) {
    try {
        yield call(axios.post, '/api/tags', { name: action.payload });
        yield dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: 'Tag added successfully!', dwell: 3500 }
        });
        yield dispatch({ type: 'FETCH_TAGS' });
    } catch (err) {
        console.log('addtag error:', err);
        yield dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: 'ERROR adding tag!', dwell: 3500 }
        });
    }
}

export default addTag;