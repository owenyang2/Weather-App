import { Route, Routes } from 'react-router-dom';

import Forecast from './Pages/Forecast';
import PredictionGame from './Pages/PredictionGame';

import Navbar from './Components/Navbar';

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Forecast />}/>
        <Route path="/prediction" element={<PredictionGame />}/>
      </Routes>
    </>
  )
}

export default App