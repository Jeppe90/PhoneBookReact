import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import contactReducer from './contactReducer'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    form: formReducer,
    contacts: contactReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});