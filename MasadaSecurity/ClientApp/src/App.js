import React, { useEffect } from 'react';
import { Route } from 'react-router';
import HomeScreen from './Screens/HomeScreen'
import './custom.css'
import Layout from './components/Shared/Layout';
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(() => {
    Aos.init({})
  }, [])

    return (
      <Layout>     
        <Route exact path='/' component={HomeScreen} />
      </Layout>
    );
  
}

export default App;