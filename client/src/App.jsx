import { useState, useEffect } from 'react'
import TransportList from './components/TransportList'
import TransportService from './services/TransportService'
import './App.css'

function App() {
  const [modes, setModes] = useState([])

  useEffect(() => {
    TransportService.getModesOfTransport()
    .then(modes => setModes(modes))
    console.log(modes)
  }, [])
  return (
    <>

      <h1>Carbon Calculator</h1>
      <TransportList 
        modes={modes}
      />
      <div class="flex-box">
        <div class="calc-form">
          <form><p>form goes here</p></form>
        </div>
        <div class="form-output">
        <p>Estimated CO2 emissions: </p>
            <p class="trip-emissions-total">50.93kg</p>
            <button>Log emissions</button>
            <p>View total estimated CO2 emissions</p>

        </div>
      </div>
    </>
  )
}

export default App
