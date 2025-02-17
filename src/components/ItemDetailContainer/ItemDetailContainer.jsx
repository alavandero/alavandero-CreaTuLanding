import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import woks from '../assets/Woks.json';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      const foundProduct = woks.find(wok => wok.id === parseInt(itemId));

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError(new Error('Product not found'));
      }
    } catch (err) {
      setError(err);
      console.error("Error fetching product details:", err);
    } finally {
      setLoading(false);
    }
  }, [itemId]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <img src={`../../assets/${product.image}`} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>

      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Added ${quantity} to cart`)} />
    </div>
  );
};

export default ItemDetailContainer;