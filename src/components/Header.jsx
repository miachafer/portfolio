import { Container, Row, Col, Image } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src="src\assets\MCF.jpg" roundedCircle fluid></Image>
          </Col>
          <Col xs={10}><h1>Mia Ferreira</h1></Col>
        </Row>  
      </Container>
    </>
  )
}