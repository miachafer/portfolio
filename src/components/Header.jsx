import { Container, Row, Col, Image } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container className="mb-4">
        <Row className="d-flex align-items-center">
          <Col xs={4} md={2}>
            <Image src="MCF.jpg" roundedCircle fluid></Image>
          </Col>
          <Col xs={8} md={10}>
            <h1 className="ml-3">Mia Ferreira</h1>
          </Col>
        </Row>  
      </Container>
    </>
  )
}