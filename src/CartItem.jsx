import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', ''));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (parseCost(item.cost) * item.quantity), 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Your Shopping Cart</h2>
      <h3 style={{ textAlign: 'center', color: '#333', margin: '10px 0 20px 0' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h3>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, idx) => (
            <div key={idx} className="cart-item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
              <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '8px' }} />
              
              <div style={{ flex: 1, marginLeft: '25px' }}>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#333' }}>{item.name}</h4>
                <p style={{ margin: '0 0 5px 0', color: '#666' }}>Unit Price: {item.cost}</p>
                <p style={{ margin: '0', fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${calculateTotalCost(item)}</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '6px 12px', fontSize: '1rem', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>-</button>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '6px 12px', fontSize: '1rem', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>+</button>
                <button onClick={() => handleRemove(item.name)} style={{ padding: '7px 14px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '15px', fontWeight: 'bold' }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <button onClick={onContinueShopping} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckoutShopping} style={{ backgroundColor: '#008CBA', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;