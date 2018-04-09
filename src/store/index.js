/**
 * Created by Михаил on 07.04.2018.
 */
/**
 * Created by Михаил on 09.03.2018.
 */
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware    from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import session from '../reducers/index';
import watchFetchSession from '../sagas/sagas';
const  sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState)
{
    let initialStore = {};
    if (localStorage.getItem('loginStore')!==null)
    initialStore = JSON.parse(localStorage.getItem('loginStore'));
    const store = createStore(session,initialStore,composeWithDevTools(applyMiddleware(sagaMiddleware)),initialState);
    sagaMiddleware.run(watchFetchSession);
    return store;
};