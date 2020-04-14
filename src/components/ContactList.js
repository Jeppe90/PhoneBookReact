import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import { connect } from "react-redux";
import { fetchContacts } from "../actions";

class ContactList extends Component {
  state = {
    data: [],
    loaded: false,
    message: "",
    contacts: [],
    term: "",
  };

  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  contactDetails = () => {
    if (this.props.contacts) {
      let filteredContacts = this.props.contacts.filter((contact) => {
        if(contact.name){
          return (
            contact.name.toLowerCase().indexOf(this.state.term.toLowerCase()) !==
            -1
          );
        }
      });
      return filteredContacts.map((contact) => (
        <ContactDetails key={contact.id} contact={contact} />
      ));
    } else {
      return <h3>No files found...</h3>;
    }
  };

  render() {
    return (
      <>
        <div className="ui container">
          <div className="search-bar ui segment">
            <input
              placeholder="Search"
              value={this.state.term}
              onChange={(value) => this.onInputChange(value)}
            />
          </div>
        </div>
        <div className="Contact-content">{this.contactDetails()}</div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: Object.values(state.contacts),
  };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);
