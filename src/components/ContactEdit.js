import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from "./ContactForm";
import { fetchContact, editContact } from "../actions";
import { Redirect } from "react-router-dom";

const ContactEdit = (props) => {
  const contact = useSelector((state) => state.contacts[props.match.params.id]);
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchContact(id));
  }, []);

    const onSubmit = (formValues) => {
      const { id } = props.match.params;
      dispatch(editContact(id, formValues));
    }

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div>
      <h3>Create a Contact</h3>
      <ContactForm
          initialValues={contact}
          onSubmit={onSubmit}
        />
    </div>

  );
};

export default ContactEdit;