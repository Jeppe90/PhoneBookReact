import React from 'react';
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

 const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return(
            <nav className="nav-wrapper black">
                <div className="container">
                    <NavLink to="/" className="brand-logo">AdressBook</NavLink>
                    <ul className="right">
                        {auth.isLoaded && links }
                    </ul>
                </div>
            </nav>  
    )
}
const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)