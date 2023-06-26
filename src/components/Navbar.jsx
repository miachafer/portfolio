import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}