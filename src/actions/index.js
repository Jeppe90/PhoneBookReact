import contacts from "../apis/contacts";
import history from "../history";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CREATE_CONTACT,
  FETCH_CONTACT,
  FETCH_CONTACTS,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./types";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        history.push("/");
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            imgUrl: newUser.url,
          });
      })
      .then(() => {
        history.push("/");
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err });
      });
  };
};

export const createContact = (formValues) => async (dispatch) => {
  const response = await contacts.post("/contacts", { ...formValues });

  history.push("/");
  dispatch({ type: CREATE_CONTACT, payload: response.data });
};

export const fetchContacts = () => async (dispatch) => {
  const response = await contacts.get("/contacts");

  dispatch({ type: FETCH_CONTACTS, payload: response.data });
};

export const fetchContact = (id) => async (dispatch) => {
  const response = await contacts.get(`/contacts/${id}`);

  dispatch({ type: FETCH_CONTACT, payload: response.data });
};

export const editContact = (id, formValues) => async (dispatch) => {
  const response = await contacts.put(`/contacts/${id}`, formValues);

  dispatch({ type: EDIT_CONTACT, payload: response.data });
  history.push("/");
};

export const deleteContact = (id) => async (dispatch) => {
  await contacts.delete(`/contacts/${id}`);

  dispatch({ type: DELETE_CONTACT, payload: id });
  history.push("/");
};
