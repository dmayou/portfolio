import { call, put as dispatch } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* snackBarNotify(action) {
    try {
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: {
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: action.payload.message
            }
        });
        yield call(delay, action.payload.dwell || 3500);
        yield dispatch({
            type: 'SET_SNACKBAR',
            payload: { open: false }
        });
    } catch (err) {
        console.log('SnackBarNotify Saga error:', err);
    }
}

export default snackBarNotify;