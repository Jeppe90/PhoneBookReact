import React from 'react';
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

 const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
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
    console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)