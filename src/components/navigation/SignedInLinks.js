import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/">Contacts</NavLink></li>
            <li><NavLink to="/contacts/new">Add Contact</NavLink></li>
        </ul>
    );
}
export default SignedInLinks;
