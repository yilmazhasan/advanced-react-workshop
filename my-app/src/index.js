import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppReduxContainer } from './containers/AppReduxContainer';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

{/* <Provider> component - it's a component that accepts our store and makes it available for the children down 
the React tree via the React's context API. For example: */}
ReactDOM.render(<Provider store={store}> <AppReduxContainer /></ Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
