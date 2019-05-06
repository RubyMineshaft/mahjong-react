import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import Home from '../components/Home';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/register" render={() => <RegistrationForm />} />
        </div>
      </Router>
      
    );
  }
} 

export default (App);
