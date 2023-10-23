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
      <nav>log & nav bar go here</nav>
      <MainTitle title={title} intro={intro}/>
      <div class="flex-box">
        <div class="calc-form">
          <TripForm modes={modes}/>
        </div>

        <div class="form-output">
          <p>Estimated CO2 emissions: </p>
            <p class="trip-emissions-total">50.93 kg</p> {/**this will be where the calc for the trip goes* */}
            <button class="log-estimate-btn">Log estimate</button>
            <p>View total estimated CO2 emissions *links to entries page*</p>

        </div>
      </div>
    </>
  )
}

export default App
