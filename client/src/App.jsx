import { useState, useEffect } from 'react'
// import TransportList from './components/TransportList'
import MainTitle from './components/MainTitle'
import TransportService from './services/TransportService'
import './App.css'
import TripForm from './components/TripForm'

function App() {
  const [modes, setModes] = useState([])
  const title = "CO2 Calculator"
  const intro = "Calculate your carbon footprint"

  useEffect(() => {
    TransportService.getModesOfTransport()
    .then(modes => setModes(modes))
    console.log(modes)
  }, [])
  return (
    <>
      <MainTitle
      title={title}
      intro={intro}
      />
      <TripForm
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
