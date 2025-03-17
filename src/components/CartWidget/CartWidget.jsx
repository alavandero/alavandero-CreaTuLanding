import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './CartWidget.css'

function CartWidget() {
  const { getQuantity } = useContext(CartContext)
  const navigate = useNavigate()

  const handleClick = () => { navigate('/cart') }
  
  return (
      <Button variant="light" onClick={handleClick}>
        <Badge bg="secondary">{getQuantity()}</Badge>
      </Button> 
  )
}

export default CartWidget