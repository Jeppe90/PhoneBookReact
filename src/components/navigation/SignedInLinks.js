import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/">Contacts</NavLink></li>
            <li><NavLink to="/contacts/new">Add Contact</NavLink></li>
            <li><NavLink to="/">{props.profile.initials}</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);
