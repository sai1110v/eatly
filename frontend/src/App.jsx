import Success from "./Pages/Success/Success";
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Admin from './Pages/Admin/Admin.jsx';
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
  const location = useLocation(); // Get current location
  return (
    <>
      {location.pathname !== '/admin' && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/success" element={<Success />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
