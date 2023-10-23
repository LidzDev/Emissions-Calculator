import { useState, useEffect } from 'react'
// import TransportList from './components/TransportList'
// import MainTitle from './components/MainTitle'
import TransportService from './services/TransportService'
import Home from './components/Home'
import './App.css'
// import TripForm from './components/TripForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import TripTable from './components/TripTable'
// import TripTable from './components/TripTable'

function App() {
  const [modes, setModes] = useState([])


  useEffect(() => {
    TransportService.getModesOfTransport()
      .then(modes => setModes(modes))
    console.log(modes)
  }, [])
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path='/'element={<Home modes={modes}/>} />
      <Route path='/triptable' element={<TripTable />} />
      </Routes>
    </Router>
  )
}

export default App;
