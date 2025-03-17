import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemCount({ product}) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
  }
  const handleRestar = () => {
  }
  const handleAddToCart = () => addToCart({...product, quantity: count})
  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount;