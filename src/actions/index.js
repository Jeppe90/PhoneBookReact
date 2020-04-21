import contacts from '../apis/contacts'
import history from '../history';
import {
SIGN_IN,
SIGN_OUT,
CREATE_CONTACT,
FETCH_CONTACT,
FETCH_CONTACTS,
DELETE_CONTACT,
EDIT_CONTACT      
} from './types'

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const createContact = formValues => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const fireStore = getFirestore();
    fireStore.collection('contacts').add({
        ...formValues,
        authorFirstName: 'Jesper',
        authorId: 1234,
        createdAt: new Date()
    }).then(() => {
        const response = contacts.post('/contacts', { ...formValues });
        dispatch({ type: CREATE_CONTACT, payload: response.data});
        history.push('/')
    }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
};

export const fetchContacts = () => async dispatch => {
    const response = await contacts.get('/contacts');
    dispatch({ type: FETCH_CONTACTS, payload: response.data})
};

export const fetchContact = (id) => async dispatch => {
    const response = await contacts.get(`/contacts/${id}`);

    dispatch({ type: FETCH_CONTACT, payload: response.data})
};

export const editContact = (id, formValues) => async dispatch => {
    const response = await contacts.put(`/contacts/${id}`, formValues);

    dispatch({ type: EDIT_CONTACT, payload: response.data})
    history.push('/');
};

export const deleteContact = (id) => async dispatch => {
    await contacts.delete(`/contacts/${id}`);

    dispatch({ type: DELETE_CONTACT, payload: id})
    history.push('/')
};