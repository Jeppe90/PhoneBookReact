import React from 'react'
import { connect } from 'react-redux';
import { createContact } from '../actions'
import ContactForm from './ContactForm';
import { Redirect } from 'react-router-dom'

class ContactCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createContact(formValues)
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>

        return (
            <div>
                <h3>Create a Contact</h3>
                <ContactForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { createContact })(ContactCreate);