import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TransportService from './services/TransportService'
import EmployeeService from './services/EmployeeService'
import Home from './components/Home'
import NavBar from './components/NavBar'
import TripTable from './components/TripTable'
import './App.css'

function App() {
  const [modes, setModes] = useState([])
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    TransportService.getModesOfTransport()
      .then(modes => setModes(modes))
      .then(EmployeeService.getEmployees()
        .then(employees => setEmployees(employees)))
  }, [])
  
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path='/'element={<Home modes={modes} employees={employees}/>} />
      <Route path='/triptable' element={<TripTable />} />
      </Routes>
    </Router>
  )
}

export default App;
