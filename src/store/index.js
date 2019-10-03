import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 使用redux-thunk中间件获取ajax异步请求
// import thunk from 'redux-thunk';

// redux-saga也是解决异步请求
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas);

export default store;
