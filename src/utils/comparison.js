// utils/comparison.js

const getComparisonData = (selectedProducts) => {
  const allFeatureKeys = new Set();

  // Collect all unique feature keys
  selectedProducts.forEach((product) => {
    Object.keys(product.features).forEach((key) => allFeatureKeys.add(key));
  });

  const comparisonData = [];

  allFeatureKeys.forEach((key) => {
    const values = selectedProducts.map((product) =>
      product.features[key] || "-"
    );

    const allDashes = values.every((val) => val === "-");
    if (!allDashes) {
      comparisonData.push({ key, values });
    }
  });

  return comparisonData;
};

const highlightDifferences = (comparisonData) => {
  return comparisonData.map((row) => {
    const uniqueValues = Array.from(new Set(row.values));
    return {
      ...row,
      highlight: uniqueValues.length > 1
    };
  });
};

export { getComparisonData, highlightDifferences };
