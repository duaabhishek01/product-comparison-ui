import React, { useEffect, useRef, useState } from 'react';
import ProductList from './components/ProductList';
import CompareSection from './components/CompareSection';
import products from './utils/data';
import './styles/styles.css';

export default function App() {
  const [compareList, setCompareList] = useState([]); // array of product IDs
  const compareSectionRef = useRef(null);

  // Derive full product objects for comparison
  const selectedProducts = products.filter((p) => compareList.includes(p.id));

  // Scroll into view when 2 products are selected
  useEffect(() => {
    if (compareList.length === 2) {
      setTimeout(() => {
        compareSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [compareList]);

  // ✅ Add product ID to compare list
  const handleAddToCompare = (product) => {
    if (compareList.includes(product.id)) return;

    if (compareList.length >= 3) {
      window.alert('You can only compare up to 3 products.');
      return;
    }

    setCompareList((prev) => [...prev, product.id]);
  };

  // Remove product ID from compare list
  const handleRemoveFromCompare = (product) => {
    setCompareList((prev) => prev.filter((id) => id !== product.id));
  };

  return (
    <div className="container">
      <h1 className="page-title">Product Comparison UI</h1>

      <ProductList
        products={products}
        selectedProducts={compareList} // array of IDs
        handleAddToCompare={handleAddToCompare}
      />

      {compareList.length >= 2 && (
        <div ref={compareSectionRef}>
        <div className="header-with-reset">
          <h2 className="section-title">Compare Mobiles</h2>
          {compareList.length > 0 && (
            <button className="reset-btn" onClick={() => setCompareList([])}>
              Reset Comparison
            </button>
          )}
        </div>
          <CompareSection
            selectedProducts={selectedProducts} // array of full product objects
            handleRemoveFromCompare={handleRemoveFromCompare}
          />
        </div>
      )}
    </div>
  );
}
