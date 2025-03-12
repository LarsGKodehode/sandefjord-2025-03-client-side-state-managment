export function removeProduct(previousState, productName) {
  // Filter out matching items
  const filteredCart = previousState.cart.filter(item => item.product.name !== productName);
  
  // Return what's changed
  return {
    cart: filteredCart
  }
}