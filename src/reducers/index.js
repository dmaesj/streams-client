import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer
});