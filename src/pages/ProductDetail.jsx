import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import the CSS file

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ padding: '20px', textAlign: 'center' }}>Loading...</p>;

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default ProductDetail;
