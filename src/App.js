import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  return (
  <>
  <Router>
  <div>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>


    </Routes>
  </div>
  </Router>
  
  </>
  );
};

export default App;
