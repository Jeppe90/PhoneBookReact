import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment'

const ContactList = (props) => {
  const { contact, auth, profile } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content" style={{color: 'white'}}>
          <a href="/" className="autor">
            {contact.name}
          </a>
        </div>
        <div className="metadata-description" style={{color: 'white'}}>
          <span className="description">{contact.description}</span>
        </div>
        <div className="metadata-phoneNumber" style={{color: 'white'}}>
          <span className="phoneNumber">{contact.phoneNumber}</span>
        </div>
        <div style={{color: 'white'}}>
            <p>Added: {moment(contact.createdAt).fromNow()}</p>
        </div>
        <div style={{color: 'white'}}>
            <p>Created by: {profile.firstName}</p>
        </div>
      </div>
      {renderAdmin(contact)}
    </div>
  );
};
function renderAdmin(contact) {
  return (
    <div>
      <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
        Edit
      </Link>
      <Link
        to={`/contacts/delete/${contact.id}`}
        className="ui button negative"
      >
        Delete
      </Link>
      <Link to={`/contacts/show/${contact.id}`} className="ui button">
        Details
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(ContactList);
