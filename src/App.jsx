import { Navbar } from "./components/Navbar/Navbar"
import { useBearStore } from "./stores/bearStore/bearStore"

function App() {
  const increaseBearPopulation = useBearStore(
    (store) => store.increaseBearPopulation
  )

  return (
    <div>
      <Navbar />

      <h1>Client Side State Management</h1>

      <div>
        <button onClick={increaseBearPopulation}>Increase</button>
      </div>
    </div>
  )
}

export default App
