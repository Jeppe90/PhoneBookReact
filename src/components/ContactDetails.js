import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';

const ContactDetails = ({contact}) => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="autor">
                        {contact.name}
                    </a>
                </div>
                <div className="metadata-description">
                    <span className="description">{contact.description}</span>
                </div>
                <div className="metadata-phoneNumber">
                    <span className="phoneNumber">{contact.phoneNumber}</span>
                </div>
            </div>
            {renderAdmin(contact)}
        </div>

    );
}
function renderAdmin(contact) {
    // if (contact.userId === this.props.currentUserId) {
         return (
             <div className="right floated content">
                 <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
                     Edit
                 </Link>
                 <Link to={`/contacts/delete/${contact.id}`} className="ui button negative">
                     Delete
                 </Link>
                 <Link to={`/contacts/show/${contact.id}`} className="ui button">
                     Details
                 </Link>
             </div>
         );
    // }
 }

export default ContactDetails;