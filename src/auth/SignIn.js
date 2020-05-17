import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/'/>

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign in</h5>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                        <button>
                            Login
                        </button>
                        <div>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)