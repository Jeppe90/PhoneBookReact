import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

import { fetchContacts } from "../actions";
import Notifications from "./Notifications";
import ContactList from "./ContactList";

class DashBoard extends Component {
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
        if (contact.name) {
          return (
            contact.name
              .toLowerCase()
              .indexOf(this.state.term.toLowerCase()) !== -1
          );
        }
      });
      return filteredContacts.map((contact) => (
        <ContactList key={contact.id} contact={contact} />
      ));
    } else {
      return <h3>No files found...</h3>;
    }
  };

  render() {
    const { notifications, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div style={{backgroundColor: '#4c4c4c'}}>
        <div className="ui container">
          <div className="search-bar ui segment" style={{backgroundColor: '#7f7f7f'}}>
            <input
              placeholder="Search"
              value={this.state.term}
              onChange={(value) => this.onInputChange(value)}
            />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="Contact-content">{this.contactDetails()}</div>
          <div>
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: Object.values(state.contacts),
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps, { fetchContacts }),
  firestoreConnect([
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
  )(DashBoard)
