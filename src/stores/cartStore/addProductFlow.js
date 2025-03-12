export function addProduct(previousState, productName, amount) {
  // Does a product with name exists?
  const productReference = productList.find((product) => product.name === productName)
  if (!productReference) {
    return // Just do Noop (No Operation) for now
  }

  const newCartItem = {
    product: productReference,
    amount
  }

  // Return what's changed
  return {
    cart: [...previousState.cart, newCartItem]
  }
}
