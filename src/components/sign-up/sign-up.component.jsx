import React from 'react';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP </CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp;