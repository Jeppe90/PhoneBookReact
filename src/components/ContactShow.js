import React, { useEffect } from "react";
import faker from "faker";
import { fetchContact } from "../actions";
import { useSelector, useDispatch } from 'react-redux'

const ContactDetails = (props) => {
  const contact = useSelector(state => state.contacts[props.match.params.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact(props.match.params.id));
  }, []);

  const renderContactShow = () => {
    if(!contact){
      return <div>Loading ...</div>
    }
    else{
     return( <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}></img>
    </a>
    <div className="content">
      <a href="/" className="autor">
        {contact.name}
      </a>
    </div>
    <div className="metadata-description">
      <span className="description">
        {contact.description}
      </span>
    </div>
    <div className="metadata-phoneNumber">
      <span className="phoneNumber">
        {contact.phoneNumber}
      </span>
    </div>
  </div>
  )
    }
    
  }
    return (
      <div className="ui container comments">
        {renderContactShow()}
      </div>
    );
  }

  export default ContactDetails;