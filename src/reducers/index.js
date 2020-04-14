import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import contactReducer from './contactReducer'
import authReducer from './authReducer'

export default combineReducers({
    form: formReducer,
    contacts: contactReducer,
    auth: authReducer
});