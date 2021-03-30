import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'
import ServicesScreen from './Screens/ServicesScreen'
import ContactScreen from './Screens/ContactScreen'
import './custom.css'
import Layout from './components/Shared/Layout';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>     
        <Route exact path='/' component={HomeScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/services' component={ServicesScreen} />
        <Route path='/contact' component={ContactScreen} />
      </Layout>
    );
  }
}
