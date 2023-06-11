import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Signin />} />
        <Route path='register' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
