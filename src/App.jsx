import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Container>
    </>
  )
}

export default App
