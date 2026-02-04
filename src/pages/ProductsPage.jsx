import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <div className="page">
      <h2>Products</h2>

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductsPage;
