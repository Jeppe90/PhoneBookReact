import React, { Component } from 'react'

class SignUp extends Component {
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
        console.log(this.state);
    }
    render() {
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
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUp