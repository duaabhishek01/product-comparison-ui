import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, selectedProducts, handleAddToCompare }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const clearSearch = () => setSearchTerm('');

  return (
    <div>
      {/* Search Bar */}
      <div className="top-row">
        <h2 className="section-title">All Mobiles</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search with name or brand..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={clearSearch}>×</button>
          )}
        </div>
        </div>

      {/* Product Cards */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCompare={handleAddToCompare}
              isSelected={selectedProducts.includes(product.id)}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
