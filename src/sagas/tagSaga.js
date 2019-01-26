import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTags() {
    try {
        const tagsList = yield call(axios.get, '/api/tags');
        yield dispatch({ type: 'SET_TAGS', payload: tagsList.data });
    } catch (err) {
        console.error('addProject error:', err);
    }
}

export default fetchTags;