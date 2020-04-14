import React, { Component } from "react";
import faker from "faker";
import { connect } from "react-redux";
import { fetchContact } from "../actions";

class ContactDetails extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }
  render() {
    if(!this.props.contact){
        return(
            <div>
                loading...
            </div>
        );
    }
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
          </a>
          <div className="content">
            <a href="/" className="autor">
              {this.props.contact.name}
            </a>
          </div>
          <div className="metadata-description">
            <span className="description">
              {this.props.contact.description}
            </span>
          </div>
          <div className="metadata-phoneNumber">
            <span className="phoneNumber">
              {this.props.contact.phoneNumber}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchContact })(ContactDetails);
