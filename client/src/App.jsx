import { useState, useEffect } from 'react'
// import TransportList from './components/TransportList'
import MainTitle from './components/MainTitle'
import TransportService from './services/TransportService'
import './App.css'
import TripForm from './components/TripForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

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
    <Router>
      <NavBar />
      <MainTitle title={title} intro={intro} />
      <div className="flex-box">
        <div className="calc-form">
          <Routes>
            <Route path="/" element={<TripForm modes={modes} />} />
            {/* <Route path="/triptable" element={<TripTable />} /> */}
          </Routes>
        </div>
        <div className="form-output">
          <p>Estimated CO2 emissions: </p>
          <p className="trip-emissions-total">50.93kg *this will be where the calc for the trip goes*</p>
          <button>Log emissions</button>
          <p>View total estimated CO2 emissions *links to entries page*</p>
        </div>
      </div>
    </Router>
  )
}

export default App;
