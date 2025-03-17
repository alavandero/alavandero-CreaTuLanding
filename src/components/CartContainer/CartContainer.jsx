import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import CartList from "../CartList/CartList";


function CartContainer() {
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleClick = () =>  navigate('/checkout')
    
    if(cart.length === 0) {
      alert('No hay productos en el carrito')
    }

    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <CartList  cart={cart}  />
                    <Button variant="primary" onClick={handleClick}>Checkout</Button>
                </>
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </div>
    )
}

export default CartContainer
