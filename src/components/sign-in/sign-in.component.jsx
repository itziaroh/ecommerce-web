import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I have already an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton onClick={this.handleSubmit}>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;