import { createStore } from 'redux';
// eslint-disable-next-line
import reducer from '../reducers';

// To enable Redux devtools during development
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

// const store = createStore(reducer);

export default store;
