import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing components for different pages
import Home from './components/Home';
import Shared from './components/Shared';
import Technology from './components/Technology';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
