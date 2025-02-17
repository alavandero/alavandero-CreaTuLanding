import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css'; // Import your CSS

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container"> {/* Container for the grid */}
      {products.map((product) => (
        <div key={product.id} className="item-card"> {/* Card for each product */}
          <img src={`../../assets/${product.image}`} alt={product.name} className="item-image" />
          <div className="item-details"> {/* Details inside the card */}
            <h3 className="item-title">{product.name}</h3>
            <p className="item-price">${product.price}</p>
            <Link to={`/item/${product.id}`} className="item-link"> {/* Link to details */}
              <button className="item-details-button">Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;