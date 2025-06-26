// ProductCard.js
import React from 'react';

const ProductCard = ({ product, handleAddToCompare, isSelected }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Price:</b> {product.price}</p>

      <ul className="prod-feature">
        {Object.entries(product.features).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCompare(product)}
        disabled={isSelected}
        className={`compare-btn ${isSelected ? 'selected' : ''}`}
      >
        {isSelected ? 'Added to Compare' : 'Add to Compare'}
      </button>
    </div>
  );
};

export default ProductCard;
