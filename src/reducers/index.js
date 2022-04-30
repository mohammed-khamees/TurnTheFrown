import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import coins from './coins';
import auth from './auth';

const reducers = combineReducers({ coins, auth });

const store = () => {
	return createStore(reducers, composeWithDevTools());
};

export default store();
