import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

import ContactList from "./ContactList";
import Notifications from "./Notifications";

class Home extends Component {
  render() {
    console.log("what do i have here " , this.props.auth);
    
    
    const { auth, notifications } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div>
        <div>
        <ContactList />
        </div>
        <div>
        <Notifications notifications={notifications}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications

  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
  )(Home)
