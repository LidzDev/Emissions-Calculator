import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TransportService from './services/TransportService'
import EmployeeService from './services/EmployeeService'
import {getTrips} from './services/TripService'
import Home from './components/Home'
import NavBar from './components/NavBar'
import TripTable from './components/TripTable'
import './App.css'

function App() {
  const [modes, setModes] = useState([])
  const [employees, setEmployees] = useState([])
  const [emissionsTrip, setEmissionsTrip] = useState([])
  const [totalEmissions, setTotalEmissions] = useState(0)
  const [tripEmissions, setTripEmissions] = useState(0)


  useEffect(() => {
    TransportService.getModesOfTransport()
      .then((modes) => setModes(modes))
      .then(()=> EmployeeService.getEmployees())
      .then(employees => setEmployees(employees))
      .then(() => getTrips())
      .then(emissionsTrip => setEmissionsTrip(emissionsTrip))
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
    setEmissionsTrip([...emissionsTrip, trip]);
  };

  const removeTrip = (id) => {
    const tripsToKeep = emissionsTrip.filter(trip => trip._id !== id)
    setEmissionsTrip(tripsToKeep);
  };

  const updateTripEmissions = (newTripEmissions) => {
      setTripEmissions(newTripEmissions)
  }

  return (
    <Router>
      <NavBar/>
      <Routes>

      <Route path='/'element={<Home 
        modes={modes} 
        employees={employees} 
        tripEmissions={tripEmissions} 
        addTrip = {addTrip} 
        removeTrip ={removeTrip} 
        updateTripEmissions={updateTripEmissions}/>} />

      <Route path='/triptable' 
        element={<TripTable 
        totalEmissions={totalEmissions} 
        removeTrip={removeTrip} 
        updateTripEmissions={updateTripEmissions} 
        trips={emissionsTrip} 
        modes={modes} 
        employees={employees} 
        tripEmissions={tripEmissions} />} />

      </Routes>
    </Router>
  );
}

export default App;
