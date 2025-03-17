import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from '../CartItem/CartItem'

function CartList({ cart }) {
    return (
        <ListGroup>
            {cart.map(item => <CartItem item={item} key={item.id} />)}
        </ListGroup>
    )
}
export default CartList;
