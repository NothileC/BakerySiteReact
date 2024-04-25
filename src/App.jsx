import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Recipelist from './pages/Recipelist/Recipelist';


const App = () => {





  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
         <Route path='/' element={<Homepage />}       />
         <Route path='Recipelist' element={<Recipelist />} />

        </Routes>
      </Router>





    </div>
  )
}

export default App
