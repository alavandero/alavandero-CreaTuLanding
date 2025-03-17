import { cartContext } from './cartContext'
import { useStat } from 'react'

function Cartprovider({ children }) {
    const [cart, setCart] = useState([])

    const getQuantity = () => {
        const quantities = cart.map(item => item.quantity)
        const total = quantities.reduce((acc, curr) => acc + current, 0)
        return total
    }

    const getTotal = () => {
        const prices = cart.map(item => item.price * item.quantity)
        const total = prices.reduce((acc, current) => acc + current, 0)

        return total
    }

    const addToCart = (item) => setCart([...cart, item])

    const clearCart = () => setCart([])

    return (
        <cartContext.Provider value={{ cart, getQuantity, getTotal, addToCart, clearCart }}>
            {children}
        </cartContext.Provider>

    )
}

export default CartProvider