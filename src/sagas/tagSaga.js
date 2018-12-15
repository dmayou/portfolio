import { call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTags() {
    const tagsList = yield call(axios.get, '/api/tags');
    yield dispatch({ type: 'SET_TAGS', payload: tagsList.data });
}

export default fetchTags;