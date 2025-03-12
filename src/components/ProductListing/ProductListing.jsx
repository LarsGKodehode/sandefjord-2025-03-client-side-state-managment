import {productList, useCart} from '../../stores/cartStore/cartStore'
import {QuantitySelector} from '../QuantitySelector/QuantitySelector'

export function ProductListing() {
  const addProduct = useCart((store) => store.addProduct)
  
  return (
    <div>
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
    </div>
  )
}