// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>FINEbank.IO</h2>
      <nav>
        <ul>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/balance">Balances</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/bills">Bills</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <button className="logout-button">Logout</button>
    </aside>
  );
};

export default Sidebar;
