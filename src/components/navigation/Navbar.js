import React from 'react';
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

 const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks auth={auth} profile={profile}/> : <SignedOutLinks/>
    return(
            <nav style={{backgroundColor: '#333333'}}>
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
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)