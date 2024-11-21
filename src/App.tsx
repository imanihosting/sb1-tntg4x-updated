import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Search from './pages/Search';
import Booking from './pages/Booking';
import ChildminderProfile from './pages/profiles/ChildminderProfile';
import ParentProfile from './pages/profiles/ParentProfile';
import ChildminderDashboard from './pages/dashboards/ChildminderDashboard';
import ParentDashboard from './pages/dashboards/ParentDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/find" element={<Search />} />
          <Route path="/childminder/:id" element={<ChildminderProfile />} />
          <Route path="/childminder/:id/book" element={<Booking />} />
          <Route path="/parent/:id" element={<ParentProfile />} />
          <Route path="/dashboard/childminder" element={<ChildminderDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;