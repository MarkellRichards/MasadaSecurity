import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Shared/Layout';
import Home from './Pages/Home';
import './index.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
