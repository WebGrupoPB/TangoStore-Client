import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
/* import Menu from './web-pages/Menu';
import JobBoard from './web-pages/JobBoard';
import Locations from './web-pages/Locations'; */

const App = () => {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
      
  );
};

export default App;


