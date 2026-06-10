import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleStartShopping = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', fontWeight: 'bold' }}>Paradise Nursery</h1>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '20px' }}>Where Green Meets Serenity</p>
            
            {/* Task 2 Component Included */}
            <AboutUs />
            
            <button className="get-started-btn" onClick={handleStartShopping}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;