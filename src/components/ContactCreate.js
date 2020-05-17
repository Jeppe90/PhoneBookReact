import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../actions";
import ContactForm from "./ContactForm";
import { Redirect } from "react-router-dom";

const ContactCreate = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  if (!auth.uid) return <Redirect to="/signin" />;

  const onSubmit = (formValues) => {
    dispatch(createContact(formValues));
  };
  return (
    <div>
      <h3>Create a Contact</h3>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
};

export default ContactCreate;
