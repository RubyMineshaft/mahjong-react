import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'

class RegistrationForm extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirmaton: ""
    }
  } 

  handleConfirmation = e => {
    this.setState({
      ...this.state,
      passwordConfirmaton: e.target.value
    })
  }

  handleEmail = e => {
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }

  handleUsername = e => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  handlePassword = e => {
    this.setState({
      ...this.state,
      password: e.target.value
    })
  }

  render() {
    return (
     
      <div className="bs-form border p-5">
        <h1>Create an Account</h1>
        <Form className="">
          <Form.Group controlId="formEmail">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" onChange={this.handleEmail} name="email" value={this.state.email} />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" onChange={this.handleUsername} name="username" value={this.state.username} />
          </Form.Group>

          <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control type="password" onChange={this.handlePassword} name="password" value={this.state.password} />
          </Form.Group>

          <Form.Group>
          <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
          <Form.Control type="password" name="password_confirmation" onChange={this.handleConfirmation} value={this.state.passwordConfirmaton} />
          </Form.Group>

          <Form.Control type="submit" className="pl-200 pr-200 btn btn-primary"/>
        </Form>
      </div>
     
    )
  }
}

export default RegistrationForm;