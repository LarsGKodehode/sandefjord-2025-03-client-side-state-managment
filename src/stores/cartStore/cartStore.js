import { create } from 'zustand'

/**
 * The shape of a Prodcut object
 * 
 * @typedef {{
 * name: string,
 * price: number
 * }} Product
 */

/**@type {Array<Product>} */
export const productList = [
  { name: "razor", price: 45 },
  { name: "toothpaste", price: 12 },
  { name: "soda", price: 20 },
]

export const useCart = create((set) => {
  return {
    /**
     * The content of the Cart
     * @type {Array<{product: Product, amount: number}>}
     */
    cart: [],
    /**
     * Add a product to the Cart with given amount
     * @param {string} productName 
     * @param {number} amount 
     */
    addProduct: (productName, amount) => set((previousState) => {
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
    }),
    /**
     * Removes the given product from the cart
     * @param {string} productName 
     */
    removeProduct: (productName) => set((previousState) => {
      // Return what's changed
      return {

      }
    }),
  }
})