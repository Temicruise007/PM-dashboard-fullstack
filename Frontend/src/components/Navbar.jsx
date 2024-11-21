import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Agiphi Dashboard</h1>
      </div>
      <div className="navbar-menu">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/tasks">Tasks</a>
        <a href="/logout">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
