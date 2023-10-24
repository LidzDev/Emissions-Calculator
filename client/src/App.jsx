import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TransportService from './services/TransportService'
import EmployeeService from './services/EmployeeService'
import {getTrips} from './services/TripService'
import Home from './components/Home'
import NavBar from './components/NavBar'
import TripTable from './components/TripTable'
import TripService from './services/TripService'
import './App.css'

function App() {
  const [modes, setModes] = useState([])
  const [employees, setEmployees] = useState([])

  // const [emissionsTrip, setEmissionsTrip] = useState([])
  const [trip, setTrip] = useState([])
  const [trips, setTrips] = useState([])
  const [totalEmissions, setTotalEmissions] = useState(0)
  // const [trip, setTrip] =  useState([])


  useEffect(() => {
    TransportService.getModesOfTransport()
      .then(modes => setModes(modes))
      .then(EmployeeService.getEmployees()
        .then(employees => setEmployees(employees)))
      .then(getTrips()
        .then(emissionsTrip => setEmissionsTrip(emissionsTrip)))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9000/api/trips/total-emissions')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setTotalEmissions(data.totalEmissions)
    })
    .catch((error) => console.error('Error fetching total emissions:', error));
  })

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  }


  const deleteTrip = idToDelete => {
    TripService.deleteTrip(idToDelete);
    setTrip(trips.filter(trip => trip._id !== idToDelete))

  }

  const updateTrip = idToUpdate => {
    TripService.updateTrip(idToUpdate)

    const updatedTripIndex = trips.findIndex(trip => trip._id === updatedTrip._id);
    const updatedTrips = [...trips];
    updatedTrips[updatedTripIndex] = updatedTrip;
    setTrips(updatedTrips);
  }


  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path='/'element={<Home modes={modes} employees={employees} addTrip = {addTrip} removeTrip ={removeTrip}/>} />
      <Route path='/triptable' element={<TripTable totalEmissions={totalEmissions} removeTrip={removeTrip} trips={emissionsTrip} modes={modes} employees={employees}/>} />
      </Routes>
    </Router>
  )
}

export default App;
