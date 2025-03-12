import { useState } from "react"

/**
 * Stateful selctor for easily dispatching values
 *
 * @param {{
 * onSubmit: (amount: number) => void,
 * submitMessage: string
 * }} param0 
 * @returns 
 */
export function QuantitySelector({onSubmit, submitMessage}) {
  const [amount, setAmount] = useState(1)

  return (
    <div>
      <button onClick={() => setAmount(prev => prev + 1)}>+</button>
      <span>{amount}</span>
      <button onClick={() => setAmount(prev => prev - 1)}>-</button>
      <button onClick={() => onSubmit(amount)}>{submitMessage}</button>
    </div>
  )
}