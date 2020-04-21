import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import { fetchContact, editContact } from "../actions";
import { Redirect } from "react-router-dom";

class ContactEdit extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editContact(this.props.match.params.id, formValues);
  };
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    if (!this.props.contact) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <h3>Create a Contact</h3>
        <ContactForm
          initialValues={this.props.contact}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts[ownProps.match.params.id],
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, { fetchContact, editContact })(
  ContactEdit
);
