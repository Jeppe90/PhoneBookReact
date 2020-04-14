import React from 'react';
import { NavLink } from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'

 const Navbar = (props) => {
    return(
            <nav className="nav-wrapper black">
                <div className="container">
                    <NavLink to="/" className="brand-logo">AdressBook</NavLink>
                    <ul className="right">
                        <li><NavLink to="/">Contacts</NavLink></li>
                        <li><NavLink to="/contacts/new">Add Contact</NavLink></li>
                    </ul>
                </div>
                        <GoogleAuth/>
            </nav>  
    )
}


export default Navbar