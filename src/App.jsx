import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
