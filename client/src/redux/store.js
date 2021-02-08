import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './RootReducer';
import {rootSaga} from './RootSaga';

const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware];

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga)