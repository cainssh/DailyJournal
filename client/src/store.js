import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import entryReducer from './reducers/entryReducer';

const rootReducer = combineReducers({
  entries: entryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
