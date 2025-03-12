import { Navbar } from "./components/Navbar/Navbar"
import { useBearStore } from "./stores/bearStore/bearStore"
import { productList, useCart } from "./stores/cartStore/cartStore"
import {QuantitySelector} from './components/QuantitySelector/QuantitySelector'

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

              <QuantitySelector
                onSubmit={(amount) => addProduct(product.name, amount)}
                submitMessage="Add to cart"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
