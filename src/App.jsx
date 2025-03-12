import { Navbar } from "./components/Navbar/Navbar"
import { useBearStore } from "./stores/bearStore/bearStore"
import {ShoppingCart} from './components/ShoppingCart/ShoppingCart'
import { ProductListing } from "./components/ProductListing/ProductListing"

function App() {
  const increaseBearPopulation = useBearStore(
    (store) => store.increaseBearPopulation
  )

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
        <ShoppingCart />
      </section>

      <section>
        <ProductListing />
      </section>
    </div>
  )
}

export default App
