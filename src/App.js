import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Init from './components/Init'
import { PrimeReactProvider } from 'primereact/api'
import Nav from './components/Nav'
import 'primeicons/primeicons.css'
import History from './components/History'
import React from 'react'

function App () {
  return (
      <PrimeReactProvider>
        <Router>
            <Nav />
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Router>
      </PrimeReactProvider>
  )
}

export default App
