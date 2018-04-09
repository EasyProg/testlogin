/**
 * Created by Михаил on 07.04.2018.
 */
import {takeEvery} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import {requestSession,
        requestSessionSuccess,
        requestSessionError,
        fetchSession} from '../actions/actions';




export default function* watchFetchSession() {
    yield takeEvery('FETCHED_SESSION', getSession);
}
function* getSession(values) {
    let result = values;
    result.application_id = 'a68be319fca51caca60eed5711226e568bd1c1d13ff452b945515f1a6ffbaca4';
    const options =
        {
            method:'POST',
            body:JSON.stringify(result),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    let endpoint = 'http://35.204.36.69:8001/api/v1/session/create';
    yield put(requestSession());
    const data = yield call(()=>{return fetch(endpoint,options)
         .then((res)=>{
            switch (res.status){
                case 200: return res.json();
                case 500: return {token:'blablabla'};
                case 401: return {
                     error:'User or password is invalid'
                };
                default: console.log(res.error);
            }
        });
}); if (data.token)
    yield put(requestSessionSuccess(data));
    else if (data.error) yield put(requestSessionError());
}