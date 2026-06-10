import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=400", description: "Produces oxygen at night and purifies indoor air.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1512428813833-df4ef23e3af3?q=80&w=400", description: "Excellent at filtering toxins and very easy to grow.", cost: "$12" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400", description: "Calming and relaxing scent, perfect for bedrooms.", cost: "$18" },
        { name: "Jasmin", image: "https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=400", description: "Sweet, exotic evening fragrance that uplifts mood.", cost: "$20" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547613720-98d63bc36a31?q=80&w=400", description: "Soothing gel inside leaves for burns and skincare.", cost: "$10" },
        { name: "Oregano", image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=400", description: "Rich in antioxidants and great for culinary purposes.", cost: "$8" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div className="nav-brand" onClick={() => window.location.reload()} style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Paradise Nursery
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center', fontSize: '1.1rem' }}>
          <a href="#" onClick={() => setShowCart(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', fontWeight: '500' }}>
            <span style={{ fontSize: '1.3rem', marginRight: '5px' }}>🛒</span>
            <span>Cart</span>
            {totalItemsCount > 0 && (
              <span className="cart-count" style={{ marginLeft: '8px', background: '#ff3b30', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {totalItemsCount}
              </span>
            )}
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-listing" style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f4', minHeight: '100vh' }}>
          {plantsArray.map((section, idx) => (
            <div key={idx} className="category-section" style={{ marginBottom: '40px' }}>
              <h2 style={{ textAlign: 'center', color: '#2e7d32', borderBottom: '2px solid #a5d6a7', paddingBottom: '10px', maxWidth: '400px', margin: '20px auto 30px auto' }}>
                {section.category}
              </h2>
              <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
                {section.plants.map((plant, pIdx) => {
                  const isAdded = cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIdx} className="plant-card" style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', padding: '20px', borderRadius: '10px', width: '280px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                        <h3 style={{ margin: '15px 0 10px 0', color: '#333' }}>{plant.name}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', minHeight: '45px', lineHeight: '1.4' }}>{plant.description}</p>
                      </div>
                      <div>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2e7d32', margin: '15px 0' }}>{plant.cost}</p>
                        <button 
                          onClick={() => handleAddToCart(plant)} 
                          disabled={isAdded}
                          style={{ width: '100%', backgroundColor: isAdded ? '#b0bec5' : '#4CAF50', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', cursor: isAdded ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;