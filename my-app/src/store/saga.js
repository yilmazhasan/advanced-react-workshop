import { put, takeLatest, all } from 'redux-saga/effects';
import { receiveCategories, REQUEST_CATEGORIES } from './actions';

function* fetchCategories() {
    const json = yield fetch("http://jservice.io/api/categories?count=5")
        .then(res => res.json());
    yield put(receiveCategories(json));
}

function* actionWatcher() {
    yield takeLatest(REQUEST_CATEGORIES, fetchCategories)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

// export function fetchCategories() {
//     return function (dispatch) {
//         dispatch(requestCategories())
//         return fetch("http://jservice.io/api/categories?count=5")
//             .then(res => res.json())
//             .then(res => {
//                 if (res.error) {
//                     throw (res.error);
//                 }
//                 dispatch(receiveCategories(res));
//                 return res;
//             })
//             .catch(error => {
//                 dispatch(failCategories(error));
//             })
//     };
// }