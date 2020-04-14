import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import { fetchContact, editContact } from "../actions";

class ContactEdit extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editContact(this.props.match.params.id, formValues);
  };
  render() {
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
  };
};

export default connect(mapStateToProps, { fetchContact, editContact })(
  ContactEdit
);
