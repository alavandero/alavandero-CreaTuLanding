import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartItem({ item }) {
    return (
        <ListGroup.Item>
            {item.name} {item.title} x {item.quantity}
            <Button variant="danger">Remove</Button>
        </ListGroup.Item>
    )
}

export default CartItem