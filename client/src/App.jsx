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
      <TransportList 
        modes={modes}
      />
    </>
  )
}

export default App
