import { createStore, combinedReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combinedReducers({});

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
