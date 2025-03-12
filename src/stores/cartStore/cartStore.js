import { create } from 'zustand'
import { addProduct } from './addProductFlow'
import { removeProduct } from './removeProductFlow'

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
    addProduct: (productName, amount) => set((prev) => addProduct(prev, productName, amount)),
    /**
     * Removes any matching products from the cart
     * @param {string} productName 
     */
    removeProduct: (productName) => set((prev) => removeProduct(prev, productName)),
  }
})
