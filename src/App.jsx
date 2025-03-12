import { useState } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { useBearStore } from "./stores/bearStore/bearStore"
import { productList, useCart } from "./stores/cartStore/cartStore"

function App() {
  const increaseBearPopulation = useBearStore(
    (store) => store.increaseBearPopulation
  )

  const addProduct = useCart((store) => store.addProduct)
  const cart = useCart((store) => store.cart)

  return (
    <div>
      <Navbar />

      <section>
        <h1>Client Side State Management</h1>

        <div>
          <button onClick={increaseBearPopulation}>Increase</button>
        </div>
      </section>

      <section>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.product.name}>
              <p>{item.product.name}</p>
              <p>{item.amount}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Product Listing</h2>

        <ul>
          {productList.map((product) => (
            <li key={product.name}>
              <p>Product: {product.name}</p>
              <p>Price: {product.price}</p>

              <CartAdder onSubmit={(amount) => addProduct(product.name, amount)}  />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function CartAdder({onSubmit}) {
  const [amount, setAmount] = useState(1)

  return (
    <div>
      <button onClick={() => setAmount(prev => prev + 1)}>+</button>
      <span>{amount}</span>
      <button onClick={() => setAmount(prev => prev - 1)}>-</button>
      <button onClick={() => onSubmit(amount)}>Add to cart</button>
    </div>
  )
}

export default App
