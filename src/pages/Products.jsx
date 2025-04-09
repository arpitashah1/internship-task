import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Importing the CSS

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, [page]);

  return (
    <div className="products-container">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
