import {useCart} from '../../stores/cartStore/cartStore'

export function ShoppingCart() {
  const cart = useCart((store) => store.cart)
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.name}>
            <p>{item.product.name}</p>
            <p>{item.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  ) 
}