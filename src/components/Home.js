import React, { Component } from "react";
import ContactList from "./ContactList";
import Notifications from "./Notifications";

class Home extends Component {
  render() {
    return (
      <div>
        <ContactList />
        <Notifications />
      </div>
    );
  }
}
export default Home;
