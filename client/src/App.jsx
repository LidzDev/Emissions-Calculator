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

  const addTrip = (trip) => {
    setEmissionsTrip([...emissionsTrip, trip]);
  }

  const removeTrip = (id) => {
    const tripsToKeep = emmisionsTrip.filter(trip => trip._id !== id)
    setEmissionsTrip(tripsToKeep);
  }

  return (
    <>
      <nav>log & nav bar go here</nav>
      <MainTitle title={title} intro={intro}/>
      <div class="flex-box">
        <div class="calc-form">
          <form><TripForm modes={modes} addTrip = {addTrip} removeTrip ={removeTrip}/></form>

      
        </div>

        <div class="form-output">
          <p>Estimated CO2 emissions: </p>
            <p class="trip-emissions-total">50.93kg *this will be where the calc for the trip goes*</p>
            <button>Log emissions</button>
            <p>View total estimated CO2 emissions *links to entries page*</p>

        </div>
      </div>
    </>
  )
}

export default App
