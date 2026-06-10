import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 className="about-us-title" style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '15px' }}>About Paradise Nursery</h2>
      <p className="about-us-description" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#f9f9f9' }}>
        Welcome to Paradise Nursery, where green meets serenity! Our mission is to provide a wide 
        range of high-quality plants that not only enhance the beauty of your surroundings but also 
        contribute to a healthier and more sustainable lifestyle.
      </p>
      <p className="about-us-content" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#e0e0e0', marginTop: '10px' }}>
        From air-purifying plants to aromatic herbs and medicinal wonders, our curated collection is 
        perfect for plant enthusiasts and beginners alike. Our team of experts ensures each plant is 
        nurtured with care before reaching your doorstep. Join us in making the world a greener place!
      </p>
    </div>
  );
}

export default AboutUs;