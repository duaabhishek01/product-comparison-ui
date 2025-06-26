// CompareSection.js
import React from 'react';

const CompareSection = ({ selectedProducts, handleRemoveFromCompare }) => {
  if (selectedProducts.length === 0) return null;

  // Collect all unique feature keys
  const allFeatures = Array.from(
    new Set(selectedProducts.flatMap((product) => Object.keys(product.features)))
  );

  // Identify which features differ across selected products
  const differingFeatures = new Set();
  allFeatures.forEach((featureKey) => {
    const values = selectedProducts.map((p) => p.features[featureKey] || '-');
    if (new Set(values).size > 1) {
      differingFeatures.add(featureKey);
    }
  });

  // Render rating stars
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {'★'.repeat(full)}
        {half && '⯨'}
        {'☆'.repeat(empty)}
      </>
    );
  };

  return (
    <div className="compare-section">
      <div className="comparison-table">

        {/* Header Row */}
        <div className="comparison-row header-row">
          <div className="feature-cell">Models</div>
          {selectedProducts.map((product) => (
            <div className="product-cell" key={product.id}>
              <button className="remove-btn" onClick={() => handleRemoveFromCompare(product)}>×</button>
              <img src={product.image} alt={product.name} className="compare-image" />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        {/* Static Info Rows */}
        <div className="comparison-row">
          <div className="feature-cell">Brand</div>
          {selectedProducts.map((product) => (
            <div className="product-cell" key={`${product.id}-brand`}>
              {product.brand}
            </div>
          ))}
        </div>

        <div className="comparison-row">
          <div className="feature-cell">Price</div>
          {selectedProducts.map((product) => (
            <div className="product-cell" key={`${product.id}-price`}>
              {product.price}
            </div>
          ))}
        </div>

        <div className="comparison-row">
          <div className="feature-cell">Customer Rating</div>
          {selectedProducts.map((product) => (
            <div className="product-cell" key={`${product.id}-rating`}>
              {renderStars(product.rating || 0)}
            </div>
          ))}
        </div>

        {/* Dynamic Feature Rows with Highlighting */}
        {allFeatures.map((featureKey) => {
          const isDifferent = differingFeatures.has(featureKey);
          return (
            <div
              key={featureKey}
              className={`comparison-row ${isDifferent ? 'highlight-row' : ''}`}
            >
              <div className="feature-cell">
                {featureKey.charAt(0).toUpperCase() + featureKey.slice(1)}
              </div>
              {selectedProducts.map((product) => (
                <div className="product-cell" key={`${product.id}-${featureKey}`}>
                  {product.features[featureKey] || '-'}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompareSection;
