import React from 'react';
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

 const Navbar = (props) => {
    return(
            <nav className="nav-wrapper black">
                <div className="container">
                    <NavLink to="/" className="brand-logo">AdressBook</NavLink>
                    <ul className="right">
                        <SignedInLinks/>
                        <SignedOutLinks/>
                    </ul>
                </div>
            </nav>  
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        
    }
}

export default connect(mapStateToProps)(Navbar)