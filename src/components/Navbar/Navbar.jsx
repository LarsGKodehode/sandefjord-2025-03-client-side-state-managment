import { useBearStore } from "../../stores/bearStore/bearStore"

export function Navbar() {
  const removeAllBears = useBearStore((store) => store.removeAllBears)

  return (
    <header>
      <div>Logo</div>

      <div>
        <BearCounter />
        <button onClick={removeAllBears}>Clear</button>
      </div>    
    </header>
  )
}

function BearCounter() {
  const {bears} = useBearStore()

  return (
    <p>Amount: {bears}</p>
  )
}