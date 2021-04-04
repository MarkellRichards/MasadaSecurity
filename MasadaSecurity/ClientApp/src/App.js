import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import HomeScreen from './Screens/HomeScreen'

import './custom.css'
import Layout from './components/Shared/Layout';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>     
        <Route exact path='/' component={HomeScreen} />

      </Layout>
    );
  }
}
