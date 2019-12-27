import { put, takeLatest, all } from 'redux-saga/effects';
import { receiveCategories, REQUEST_CATEGORIES } from './actions';

// Saga is a type of a Redux pattern providing asynchronous event dispatch.
// You can think of sagas as “redux for making HTTP requests.”

// Sagas can be based on async using yield keyword so they can help you dispatch events asynchronously 
// without having to wait until data is returned. 
// But soon as it does… coupled with a reducer the application state will be updated.

// * -> generator function
// The yield keyword is used to pause and resume a generator function.

// The yield call executes the API call. 
// And yield put takes the fetched data and sends it to your reducer. 
// The reducer then updates the state.

function* fetchCategories() {
    const json = yield fetch("http://jservice.io/api/categories?count=5")
        .then(res => res.json());
    yield put(receiveCategories(json));
}

// At its basic takeLatest will spawn a new saga on each dispatched action. 
function* actionWatcher() {
    yield takeLatest(REQUEST_CATEGORIES, fetchCategories)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}