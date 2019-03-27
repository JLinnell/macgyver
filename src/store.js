import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import hackReducer from './reducers/hackReducer';


const rootReducer = combineReducers({
    user: userReducer,
    hack: hackReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;