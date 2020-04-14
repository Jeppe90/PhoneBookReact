import React from 'react'
import { connect } from 'react-redux';
import { createContact } from '../actions'
import ContactForm from './ContactForm';

class ContactCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createContact(formValues)
    }
    render() {
        return (
            <div>
                <h3>Create a Contact</h3>
                <ContactForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createContact })(ContactCreate);