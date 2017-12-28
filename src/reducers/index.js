import { combineReducers } from 'redux';
import scoreReducer from './score';
import authenticationReducer from './authentication';

export default combineReducers({
    authenticationReducer,
    scoreReducer, 
})
