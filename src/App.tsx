import Weather from './Components/Weather';
import Navbar from './Components/Navbar';

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Weather />
      </div>
    </>
  )
}

export default App