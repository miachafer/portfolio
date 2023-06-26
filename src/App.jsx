import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <h1>Hello world!</h1>
      <Footer />
    </>
  )
}

export default App
