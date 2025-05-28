import { useState } from "react"
import { useDebounce } from "./hooks/useDebounce"
import { useThrottle } from "./hooks/useThrottle"

const delay = 1000

function App() {
  const [search, setSearch] = useState("")

  const debouncedValue = useDebounce(search, delay)
  const throttledValue = useThrottle(search, delay)

  return (
    <>
      <input
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here"
      />    

      <div className="value__container">
        <h2>Debounced value: </h2>
        <span>{debouncedValue}</span>
      </div>

      <div className="value__container">
        <h2 >Throttled value: </h2>
        <span>{throttledValue}</span>
      </div>

      <p>Delay time is: {delay}</p>
    </>
  )
}

export default App
