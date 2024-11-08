// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="header-right">
        <span>{new Date().toLocaleDateString()}</span>
        <button className="notification-icon">🔔</button>
      </div>
    </header>
  );
};

export default Header;
