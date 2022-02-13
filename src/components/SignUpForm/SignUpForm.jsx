import React from "react";
import "./SignUpForm.css";
import { Component } from 'react';
import { signUp } from "../../utilities/users-service";

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        confirm: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: '',
        admin: 'false',
        error: ''
    };
    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
    };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const formData = {...this.state};
          delete formData.error;
          delete formData.error;
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await signUp(formData);
          // Use this in a class component
          this.props.setUser(user);
        } catch {
          //An error occurred
          this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="SignUpForm">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <label>First Name</label>
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                <label>Last Name</label>
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                <label>Address</label>
                <input name="address" value={this.state.address} onChange={this.handleChange} required />
                <label>City</label>
                <input name="city" value={this.state.city} onChange={this.handleChange} required />
                <label>State</label>
                <input name="state" value={this.state.state} onChange={this.handleChange} required />
                <label>Zip Code</label>
                <input name="zip" value={this.state.zip} onChange={this.handleChange} required />
                <label>Phone Number</label>
                <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}

export default SignUpForm;