import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}