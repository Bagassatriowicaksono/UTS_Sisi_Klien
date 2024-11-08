// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Goals from '../components/Goals';
import CategoryCard from '../components/CategoryCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <section className="goals-section">
          <Goals />
        </section>
        <section className="categories-section">
          <h2>Expenses Goals by Category</h2>
          <div className="categories-grid">
            <CategoryCard title="Housing" amount="250.00" />
            <CategoryCard title="Food" amount="250.00" />
            <CategoryCard title="Transportation" amount="250.00" />
            <CategoryCard title="Entertainment" amount="250.00" />
            <CategoryCard title="Shopping" amount="250.00" />
            <CategoryCard title="Others" amount="250.00" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
