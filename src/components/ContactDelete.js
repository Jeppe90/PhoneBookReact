import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../history";
import { fetchContact, deleteContact } from "../actions";
import { Redirect } from "react-router-dom";

const ContactDelete = (props) => {
  const contact = useSelector((state) => state.contacts[props.match.params.id]);
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchContact(id));
  }, []);

  const renderActions = () => {
    const { id } = props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => dispatch(deleteContact(id))}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    if (!contact) {
      return "Are you sure you want to delete this contact?";
    }
    return `Are you sure you want to delete the contact with name: ${contact.name}`;
  };
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDissmiss={() => history.push("/")}
    />
  );
};

export default ContactDelete;
